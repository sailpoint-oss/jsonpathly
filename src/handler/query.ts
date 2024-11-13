import { parseInternal } from '../parser/parse';
import { Handler } from './Handler';
import { isArray, isDefined, isUndefined } from './helper';

export type QueryOptions = {
  hideExceptions?: boolean;
  returnArray?: boolean;
};

const querySingle = (payload: unknown, path: string, parserType: string, options: QueryOptions): unknown => {
  const tree = parseInternal(path);
  const treeString = JSON.stringify(tree);
  if (parserType === 'Workflows') {
    if (treeString.includes('"operator":"length"')) {
      throw new Error("Workflows JSONpath does not support length()");
    }
  }
  const handler = new Handler(payload);
  const result = handler.handleRoot(tree);

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
