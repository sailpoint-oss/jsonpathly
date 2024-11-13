import { parseInternal } from '../parser/parse';
import { Handler } from './Handler';
import { isArray, isDefined, isUndefined, validateWorkflowsParser } from './helper';

export type QueryOptions = {
  hideExceptions?: boolean;
  returnArray?: boolean;
};

const querySingle = (payload: unknown, path: string, parserType: string, options: QueryOptions): unknown => {
  const tree = parseInternal(path);

  // Throws an error if the tree contains any operations that are unsupported
  if (parserType === 'Workflows') {
    validateWorkflowsParser(tree);
  } else if (parserType === 'EventTrigger') {
    // Not implemented yet
  } else {
    throw new Error(`Invalid parserType: ${parserType}`);
  }

  const handler = new Handler(payload, parserType);
  const result = handler.handleRoot(tree, parserType);

  if (!result?.isIndefinite && options.returnArray) {
    if (isUndefined(result)) {
      return [];
    }
    return [result.value];
  }

  return result?.value;
};

const queryMany = (payload: unknown, paths: string[], parserType: string, options: QueryOptions): unknown => {
  const results: unknown[] = [];
  for (const path of paths) {
    const res = querySingle(payload, path, parserType, options);
    if (isDefined(res)) {
      results.push(res);
    }
  }
  return results;
};

export const query = (payload: unknown, paths: string | string[], parserType: string, options: QueryOptions = {}): unknown => {
  try {
    if (isArray(paths)) {
      return queryMany(payload, paths, parserType, options);
    }
    return querySingle(payload, paths, parserType, options);
  } catch (e) {
    if (!options.hideExceptions) {
      throw e;
    }

    if (!!options.returnArray) {
      return [];
    }
    return;
  }
};
