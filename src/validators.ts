import Person from '../utils/Person';

export type validatorFunction = (data: any, property: string) => boolean;

export const isNumber: validatorFunction = (data: any, property: string) => {
  return typeof data[property] === 'number';
};

export const isPositiveNumber: validatorFunction = (data: any, property: string) => {
  return isNumber(data, property) && data[property] > 0;
};

export const isNumericString: validatorFunction = (data: any, property: string) => {
  return isString(data, property) && !Number.isNaN(Number(data[property]));
}

export const isString: validatorFunction = (data: any, property: string) => {
  return typeof data[property] === 'string';
};

export const isFunction: validatorFunction = (data: any, property: string) => {
  return typeof data[property] === 'function';
};

export const isObject: validatorFunction = (data: any, property: string) => {
  return typeof data[property] === 'object' && !isArray(data, property);
};

export const isArray: validatorFunction = (data: any, property: string) => {
  return Array.isArray(data[property]);
};

export const isPerson: validatorFunction = (data: any, property: string) => {
  return data[property] instanceof Person;
};
