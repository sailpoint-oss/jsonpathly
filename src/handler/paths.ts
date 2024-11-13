import { parseInternal } from '../parser/parse';
import { Handler } from './Handler';
import { isArray, isUndefined, validateWorkflowsParser } from './helper';

export type PathsOptions = {
  hideExceptions?: boolean;
};

export const paths = (payload: unknown, path: string, parserType: string, options: PathsOptions = {}): string[] => {
  try {
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
