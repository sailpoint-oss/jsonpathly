import { parseInternal } from '../parser/parse';
import { Handler } from './Handler';
import { isArray, isUndefined } from './helper';

export type PathsOptions = {
  hideExceptions?: boolean;
};

export const paths = (payload: unknown, path: string, parserType: string, options: PathsOptions = {}): string[] => {
  try {
    const tree = parseInternal(path);
    const treeString = JSON.stringify(tree);
    if (parserType === 'Workflows') {
      if (treeString.includes('"operator":"length"')) {
        throw new Error("Workflows JSONpath does not support length()");
      }
    }

    const handler = new Handler(payload);
    const result = handler.handleRoot(tree);

    if (isUndefined(result)) {
      return [];
    }

    if (!isArray(result.paths)) {
      return [result.paths];
    }
    return result.paths;
  } catch (e) {
    if (!options.hideExceptions) {
      throw e;
    }
    return [];
  }
};
