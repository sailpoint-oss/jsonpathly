import * as equal from 'fast-deep-equal';
import { Root } from '../parser/types';

export function validateWorkflowsParser(tree: Root): void {
  const treeString = JSON.stringify(tree);
  const unsupportedStrings = [
    { value: '"operator":"in"', error: 'in' },
    { value: '"operator":"nin"', error: 'nin' },
    { value: '"operator":"subsetof"', error: 'subsetof' },
    { value: '"operator":"anyof"', error: 'anyof' },
    { value: '"operator":"noneof"', error: 'noneof' },
    { value: '"operator":"size"', error: 'size' },
  ];

  for (const unsupportedString of unsupportedStrings) {
    if (treeString.includes(unsupportedString.value)) {
      throw new Error(`Workflows JSONpath does not support "${unsupportedString.error}"`);
    }
  }
}

export const isEqual = (objA: unknown, objB: unknown): boolean => {
  return equal(objA, objB);
};

export const isArray = (item: unknown): item is unknown[] => {
  return Array.isArray(item);
};

// https://github.com/reduxjs/redux/blob/master/src/utils/isPlainObject.ts
export const isPlainObject = (item: unknown): item is Record<string, unknown> => {
  if (typeof item !== 'object' || item === null) {
    return false;
  }

  let proto = item;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(item) === proto;
};

export const isNumber = (item: unknown): item is number => {
  return typeof item === 'number';
};

export const isString = (item: unknown): item is string => {
  return typeof item === 'string';
};

export const isUndefined = <T extends unknown>(item: T | undefined): item is undefined => {
  return typeof item === 'undefined';
};

export const isDefined = <T extends unknown>(item: T): item is Exclude<typeof item, undefined> => {
  return typeof item !== 'undefined';
};

export const isArrayOfNumber = (item: unknown): item is number[] => {
  return isArray(item) && item.every(isNumber);
};
