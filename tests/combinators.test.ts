import { and, ifElse, not, or } from '../src/combinators';
import { isNumber, isNumericString, isPositiveNumber, isString } from '../src/validators';

describe('Validator combinators', () => {
  const testData = {
    aNumber: 8,
    aPositiveNumberString: '6',
    aString: 'something',
  };

  const throwIfCalled = () => {
    throw new Error('Should never get here');
  };

  test('should negate a validation with not', () => {
    expect(not(isNumber)(testData, 'aNumber')).toBeFalsy();
    expect(not(isNumber)(testData, 'aPositiveNumberString')).toBeTruthy();
    expect(not(isNumber)(testData, 'aString')).toBeTruthy();
  });

  test('should conditionally validate using a condition with ifElse', () => {
    expect(ifElse(isNumber, isPositiveNumber, throwIfCalled)(testData, 'aNumber')).toBeTruthy();
    expect(ifElse(isNumber, throwIfCalled, isNumericString)(testData, 'aPositiveNumberString')).toBeTruthy();
    expect(ifElse(isString, isPositiveNumber, throwIfCalled)(testData, 'aString')).toBeFalsy();
  });

  test('should validate at least one of the conditions with or', () => {
    expect(or([isString, isNumericString])(testData, 'aNumber')).toBeFalsy();
    expect(or([isString, isNumericString])(testData, 'aPositiveNumberString')).toBeTruthy();
    expect(or([isString, isNumericString])(testData, 'aString')).toBeTruthy();
  });

  test('should validate all of the conditions with and', () => {
    expect(and([isString, isNumericString])(testData, 'aPositiveNumberString')).toBeTruthy();
    expect(and([isString, isNumericString])(testData, 'aString')).toBeFalsy();
  });
});
