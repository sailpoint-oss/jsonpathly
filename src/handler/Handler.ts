import { JSONPathSyntaxError } from '../parser/errors';
import {
  BracketExpressionContent,
  BracketMemberContent,
  Comparator,
  DotDot,
  FilterExpressionContent,
  Identifier,
  Indexes,
  LogicalExpression,
  NumericLiteral,
  OperationContent,
  PathFunction,
  Root,
  Slices,
  StringLiteral,
  Subscript,
  Unions,
} from '../parser/types';
import { isArray, isBoolean, isDefined, isEqual, isNumber, isPlainObject, isString, isUndefined } from './helper';

const getNumericLiteralIndex = (index: number, total: number): number => (index < 0 ? total + index : index);
const formatStringLiteralPath = (paths: string | string[], v: string): string | string[] => paths.concat(`["${v}"]`);
const formatNumericLiteralPath = (paths: string | string[], v: number): string | string[] => paths.concat(`[${v}]`);

type ValuePath<T extends unknown = unknown> = { value: T; paths: string | string[]; isIndefinite?: boolean };

export class Handler<T extends unknown = unknown> {
  rootPayload: ValuePath<T>;
  parserType: string;

  constructor(rootPayload: T, parserType: string) {
    this.rootPayload = { value: rootPayload, paths: '$' };
    this.parserType = parserType;
  }

  private handleIdentifier = (payload: ValuePath, tree: Identifier): ValuePath | undefined => {
    if (!isPlainObject(payload.value) || !(tree.value in payload.value)) {
      return;
    }

    return { value: payload.value[tree.value], paths: formatStringLiteralPath(payload.paths, tree.value) };
  };

  private handleWildcard = ({ value, paths }: ValuePath): ValuePath[] => {
    if (!isPlainObject(value) && !isArray(value)) {
      return [];
    }

    if (isArray(value)) {
      return value.map((item, index) => ({
        value: item,
        paths: formatNumericLiteralPath(paths, index),
      }));
    }

    return Object.keys(value).map((key) => ({ value: value[key], paths: formatStringLiteralPath(paths, key) }));
  };

  private handleFunction = (payload: ValuePath, tree: PathFunction, parserType: string): ValuePath | undefined => {
    switch (tree.operator) {
      case 'length': {
        if (parserType === 'Workflows' && (isArray(payload.value) || isString(payload.value))) {
          return { value: payload.value.length, paths: payload.paths };
        } else if (parserType === 'EventTrigger' && isArray(payload.value)) {
          return { value: payload.value.length, paths: payload.paths };
        } else {
          return;
        }
      }
    }
  };

  private handleOperationContent = (
    payload: ValuePath,
    tree: OperationContent,
    parserType: string,
  ): ValuePath | undefined => {
    switch (tree.type) {
      case 'root': {
        return this.handleSubscript(this.rootPayload, tree.next, parserType);
      }
      case 'current': {
        return this.handleSubscript(payload, tree.next, parserType);
      }
      case 'value': {
        return { value: tree.value, paths: payload.paths };
      }
      case 'groupOperation': {
        return this.handleOperationContent(payload, tree.value, parserType);
      }
      case 'operation': {
        const left = this.handleOperationContent(payload, tree.left, parserType)?.value;
        const right = this.handleOperationContent(payload, tree.right, parserType)?.value;

        if (!isNumber(left) || !isNumber(right)) {
          return;
        }

        switch (tree.operator) {
          case 'plus': {
            return { value: left + right, paths: payload.paths };
          }
          case 'minus': {
            return { value: left - right, paths: payload.paths };
          }
          case 'div': {
            if (right === 0) {
              return;
            }
            return { value: left / right, paths: payload.paths };
          }
          case 'multi': {
            return { value: left * right, paths: payload.paths };
          }
          case '': {
            if (right > 0) {
              throw new JSONPathSyntaxError(0, 0, 'Missing operator in operation');
            }
            return { value: left + right, paths: payload.paths };
          }
        }
      }
    }
  };

  private handleComparator = (payload: ValuePath, tree: Comparator, parserType: string): boolean => {
    const leftValue = this.handleOperationContent(payload, tree.left, parserType)?.value;
    const rightValue = this.handleOperationContent(payload, tree.right, parserType)?.value;

    switch (tree.operator) {
      case 'subsetof': {
        if (!isArray(leftValue) || !isArray(rightValue)) {
          return false;
        }
        const itemsRight = new Set(rightValue);
        return leftValue.every((e) => itemsRight.has(e));
      }
      case 'anyof': {
        if (!isArray(leftValue) || !isArray(rightValue)) {
          return false;
        }
        const itemsRight = new Set(rightValue);
        return leftValue.some((e) => itemsRight.has(e));
      }
      case 'noneof': {
        if (!isArray(leftValue) || !isArray(rightValue)) {
          return false;
        }
        const itemsRight = new Set(rightValue);
        return !leftValue.some((e) => itemsRight.has(e));
      }
      case 'size': {
        if ((!isArray(leftValue) && !isString(leftValue)) || !isNumber(rightValue)) {
          return false;
        }
        return leftValue.length === rightValue;
      }
      case 'eq': {
        return isEqual(leftValue, rightValue);
      }
      case 'ne': {
        return !isEqual(leftValue, rightValue);
      }
      case 'lt': {
        if (isNumber(leftValue) && isNumber(rightValue)) {
          return leftValue < rightValue;
        }
        if (isString(leftValue) && isString(rightValue)) {
          return leftValue < rightValue;
        }
        return false;
      }
      case 'le': {
        if (isNumber(leftValue) && isNumber(rightValue)) {
          return leftValue <= rightValue;
        }
        if (isString(leftValue) && isString(rightValue)) {
          return leftValue <= rightValue;
        }
        return false;
      }
      case 'gt': {
        if (isNumber(leftValue) && isNumber(rightValue)) {
          return leftValue > rightValue;
        }
        if (isString(leftValue) && isString(rightValue)) {
          return leftValue > rightValue;
        }
        return false;
      }
      case 'ge': {
        if (isNumber(leftValue) && isNumber(rightValue)) {
          return leftValue >= rightValue;
        }
        if (isString(leftValue) && isString(rightValue)) {
          return leftValue >= rightValue;
        }
        return false;
      }
      case 'in': {
        if (!isArray(rightValue)) {
          return false;
        }
        return rightValue.includes(leftValue);
      }
      case 'nin': {
        if (!isArray(rightValue)) {
          return false;
        }
        return !rightValue.includes(leftValue);
      }
      case 'reg': {
        if (!isString(leftValue) || !isString(rightValue)) {
          return false;
        }
        const value = rightValue.slice(1, -1);
        return !!leftValue.match(new RegExp(value, tree.right.opts));
      }
    }
  };

  private handleLogicalExpression = (payload: ValuePath, tree: LogicalExpression, parserType: string): boolean => {
    const leftValue = this.handleFilterExpressionContent(payload, tree.left, parserType);
    const rightValue = this.handleFilterExpressionContent(payload, tree.right, parserType);

    switch (tree.operator) {
      case 'and': {
        return leftValue && rightValue;
      }
      case 'or': {
        return leftValue || rightValue;
      }
    }
  };

  private handleFilterExpressionContent = (
    payload: ValuePath,
    tree: FilterExpressionContent,
    parserType: string,
  ): boolean => {
    switch (tree.type) {
      case 'logicalExpression': {
        return this.handleLogicalExpression(payload, tree, parserType);
      }
      case 'comparator': {
        return this.handleComparator(payload, tree, parserType);
      }
      case 'groupExpression': {
        return this.handleFilterExpressionContent(payload, tree.value, parserType);
      }
      case 'notExpression': {
        return !this.handleFilterExpressionContent(payload, tree.value, parserType);
      }
      case 'root': {
        return isDefined(this.handleSubscript(this.rootPayload, tree.next, parserType));
      }
      case 'current': {
        const result = this.handleSubscript(payload, tree.next, parserType)
        if (isDefined(result)) {
          if (parserType === 'Workflows' && isBoolean(result.value)) {
            // GoSlice library treats [?(@.item)] as [?(@.item == true)] it @.item is a boolean
            return result.value
          } else {
            return true;
          }
        } else {
          return false
        }
      }
      case 'value': {
        return !!tree.value;
      }
    }
  };

  private handleNumericLiteral = ({ value, paths }: ValuePath, tree: NumericLiteral): ValuePath | undefined => {
    if (!isArray(value) && !isPlainObject(value)) {
      return;
    }

    if (isPlainObject(value)) {
      return this.handleStringLiteral({ value, paths }, { type: 'stringLiteral', value: `${tree.value}` });
    }

    const index = getNumericLiteralIndex(tree.value, value.length);

    if (index < value.length && index >= 0) {
      return { value: value[index], paths: formatNumericLiteralPath(paths, index) };
    }
    return;
  };

  private handleSlices = ({ value, paths }: ValuePath, tree: Slices): ValuePath[] => {
    const results: ValuePath[] = [];

    if (!isArray(value)) {
      return [];
    }

    const start = tree.start !== null ? getNumericLiteralIndex(tree.start, value.length) : 0;
    const end = tree.end !== null ? getNumericLiteralIndex(tree.end, value.length) : value.length;
    const step = tree.step === null || tree.step <= 0 ? 1 : tree.step;

    let count = 0;
    value.forEach((item, index) => {
      if (index >= start && index < end) {
        if (count % step === 0) {
          results.push({ value: item, paths: formatNumericLiteralPath(paths, index) });
        }
        count += 1;
      }
    });

    return results;
  };

  private handleStringLiteral = ({ value, paths }: ValuePath, tree: StringLiteral): ValuePath | undefined => {
    if (!isPlainObject(value) || !(tree.value in value)) {
      return;
    }

    return { value: value[tree.value], paths: formatStringLiteralPath(paths, tree.value) };
  };

  private handleUnions = (payload: ValuePath, tree: Unions): ValuePath[] => {
    if (!isPlainObject(payload.value)) {
      return [];
    }

    return tree.values
      .map((value) => {
        switch (value.type) {
          case 'identifier': {
            return this.handleIdentifier(payload, value);
          }
          case 'stringLiteral': {
            return this.handleStringLiteral(payload, value);
          }
        }
      })
      .filter(isDefined);
  };

  private handleIndexes = ({ value, paths }: ValuePath, tree: Indexes): ValuePath[] => {
    if (!isArray(value)) {
      return [];
    }

    return tree.values.map((item) => this.handleNumericLiteral({ value, paths }, item)).filter(isDefined);
  };

  private handleDotdot = (payload: ValuePath, tree: DotDot, parserType: string): ValuePath[] => {
    const treeValue = tree.value;
    const value = payload.value;
    let results: ValuePath[] = [];

    switch (treeValue.type) {
      case 'bracketMember': {
        const result = this.handleBracketMemberContent(payload, treeValue.value);
        if (isDefined(result)) {
          results = results.concat(result);
        }
        break;
      }
      case 'bracketExpression': {
        if (isPlainObject(value) || (isArray(value) && treeValue.value.type === 'wildcard')) {
          const result = this.handleBracketExpressionContent(payload, treeValue.value, parserType);
          results = results.concat(result);
        }
        break;
      }
      case 'wildcard': {
        const result = this.handleWildcard(payload);
        results = results.concat(result);
        break;
      }
      case 'identifier': {
        const result = this.handleIdentifier(payload, treeValue);
        if (isDefined(result)) {
          results = results.concat(result);
        }
        break;
      }
    }

    if (isPlainObject(value)) {
      Object.keys(value).forEach((key) => {
        const result = this.handleDotdot(
          { value: value[key], paths: formatStringLiteralPath(payload.paths, key) },
          tree,
          parserType,
        );
        results = results.concat(result);
      });
    } else if (isArray(value)) {
      value.forEach((item, index) => {
        const result = this.handleDotdot(
          { value: item, paths: formatNumericLiteralPath(payload.paths, index) },
          tree,
          parserType,
        );
        results = results.concat(result);
      });
    }

    return results;
  };

  private handleBracketMemberContent = (payload: ValuePath, tree: BracketMemberContent): ValuePath | undefined => {
    switch (tree.type) {
      case 'identifier': {
        return this.handleIdentifier(payload, tree);
      }
      case 'numericLiteral': {
        return this.handleNumericLiteral(payload, tree);
      }
      case 'stringLiteral': {
        return this.handleStringLiteral(payload, tree);
      }
    }
  };

  private handleBracketExpressionContent = (
    payload: ValuePath,
    tree: BracketExpressionContent,
    parserType: string,
  ): ValuePath[] => {
    const payloadValue = payload.value;

    switch (tree.type) {
      case 'filterExpression': {
        let results: ValuePath[] = [];

        if (isArray(payloadValue)) {
          payloadValue.forEach((value, index) => {
            const item = { value, paths: formatNumericLiteralPath(payload.paths, index) };
            if (this.handleFilterExpressionContent(item, tree.value, parserType)) {
              results = results.concat(item);
            }
          });
        } else if (isPlainObject(payloadValue)) {
          if (this.handleFilterExpressionContent(payload, tree.value, parserType)) {
            results = results.concat(payload);
          }
        }

        return results;
      }
      case 'indexes': {
        return this.handleIndexes(payload, tree);
      }
      case 'unions': {
        return this.handleUnions(payload, tree);
      }
      case 'wildcard': {
        return this.handleWildcard(payload);
      }
      case 'slices': {
        return this.handleSlices(payload, tree);
      }
    }
  };

  private concatIndefiniteValuePaths = (
    payload: ValuePath[],
    tree: Subscript | null,
    parserType: string,
  ): ValuePath => {
    if (!tree) {
      return payload.reduce<ValuePath<unknown[]>>(
        (acc, current) => ({
          isIndefinite: true,
          value: [...acc.value, current.value],
          paths: [...acc.paths, current.paths] as string[],
        }),
        { value: [], paths: [], isIndefinite: true },
      );
    }

    let values: unknown[] = [];
    let paths: string[] = [];

    payload.forEach((item) => {
      const result = this.handleSubscript(item, tree, parserType);

      if (isUndefined(result)) {
        return;
      }

      values = result.isIndefinite ? values.concat(result.value) : [...values, result.value];
      paths = paths.concat(result.paths);
    });

    return { value: values, paths, isIndefinite: true };
  };

  private handleSubscript = (payload: ValuePath, tree: Subscript | null, parserType: string): ValuePath | undefined => {
    if (tree === null) {
      return payload;
    }

    const treeValue = tree.value;
    switch (treeValue.type) {
      case 'bracketExpression': {
        const result = this.handleBracketExpressionContent(payload, treeValue.value, parserType);
        return this.concatIndefiniteValuePaths(result, tree.next, parserType);
      }
      case 'bracketMember': {
        const result = this.handleBracketMemberContent(payload, treeValue.value);
        if (isUndefined(result)) {
          return;
        }
        return this.handleSubscript(result, tree.next, parserType);
      }
      case 'dot': {
        switch (treeValue.value.type) {
          case 'identifier': {
            const result = this.handleIdentifier(payload, treeValue.value);
            if (isUndefined(result)) {
              return;
            }
            return this.handleSubscript(result, tree.next, parserType);
          }
          case 'numericLiteral': {
            const result = this.handleNumericLiteral(payload, treeValue.value);
            if (isUndefined(result)) {
              return;
            }
            return this.handleSubscript(result, tree.next, parserType);
          }
          case 'wildcard': {
            const result = this.handleWildcard(payload);
            return this.concatIndefiniteValuePaths(result, tree.next, parserType);
          }
          case 'function': {
            const result = this.handleFunction(payload, treeValue.value, parserType);
            if (isUndefined(result)) {
              return;
            }
            return this.handleSubscript(result, tree.next, parserType);
          }
        }
      }
      case 'dotdot': {
        const result = this.handleDotdot(payload, treeValue, parserType);
        return this.concatIndefiniteValuePaths(result, tree.next, parserType);
      }
    }
  };

  public handleRoot = (tree: Root, parserType: string): ValuePath | undefined => {
    return this.handleSubscript(this.rootPayload, tree.next, parserType);
  };
}
