import { validatorFunction } from './validators';

export const not = (condition: validatorFunction): validatorFunction => {
  return (data: any, property: string) => !condition(data, property);
}

export const ifElse = (condition: validatorFunction, trueCondition: validatorFunction, falseCondition: validatorFunction): validatorFunction => {
  return (data: any, property: string) => {
    return condition(data, property) ? trueCondition(data, property) : falseCondition(data, property);
  }
}

export const or = (conditions: validatorFunction[]): validatorFunction => {
  return (data: any, property: string) => conditions.reduce((acc: boolean, condition: any) => {
    return acc || condition(data, property);
  }, false);
}

export const and = (conditions: validatorFunction[]): validatorFunction => {
  return (data: any, property: string) => conditions.reduce((acc: boolean, condition: any) => {
    return acc && condition(data, property);
  }, true);
}
