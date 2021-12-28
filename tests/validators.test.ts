import { isNumber, isPositiveNumber, isNumericString, isString, isFunction, isObject, isArray, isPerson } from '../src/validators';
import Person from '../utils/Person';

describe('Type validators', () => {
  const pampita = new Person('Carolina', 'Ardohain', 43);

  const testData = {
    aZero: 0,
    aPositiveNumber: 5,
    aNegativeNumber: -5,
    aPositiveNumberString: '6',
    aNegativeNumberString: '-6',

    aString: 'Wilson da Dachshund',
    aFunction: () => {},
    anObject: {},
    anArray: [],

    // aNull: null, // TODO
    // anUndefined: undefined, // TODO

    aPerson: pampita,
  };

  test('Should validate isNumber', () => {
    expect(isNumber(testData, 'aPositiveNumber')).toBeTruthy();
    expect(isNumber(testData, 'aNegativeNumber')).toBeTruthy();
    expect(isNumber(testData, 'aZero')).toBeTruthy();
    expect(isNumber(testData, 'aPositiveNumberString')).toBeFalsy();
    expect(isNumber(testData, 'aNegativeNumberString')).toBeFalsy();
    expect(isNumber(testData, 'aString')).toBeFalsy();
    expect(isNumber(testData, 'aFunction')).toBeFalsy();
    expect(isNumber(testData, 'anObject')).toBeFalsy();
    expect(isNumber(testData, 'anArray')).toBeFalsy();
    expect(isNumber(testData, 'aPerson')).toBeFalsy();
  });

  test('Should validate isPositiveNumber', () => {
    expect(isPositiveNumber(testData, 'aPositiveNumber')).toBeTruthy();
    expect(isPositiveNumber(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aZero')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aPositiveNumberString')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aNegativeNumberString')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aString')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aString')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aFunction')).toBeFalsy();
    expect(isPositiveNumber(testData, 'anObject')).toBeFalsy();
    expect(isPositiveNumber(testData, 'anArray')).toBeFalsy();
    expect(isPositiveNumber(testData, 'aPerson')).toBeFalsy();
  });

  test('Should validate isNumericString', () => {
    expect(isNumericString(testData, 'aPositiveNumber')).toBeFalsy();
    expect(isNumericString(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isNumericString(testData, 'aZero')).toBeFalsy();
    expect(isNumericString(testData, 'aPositiveNumberString')).toBeTruthy();
    expect(isNumericString(testData, 'aNegativeNumberString')).toBeTruthy();
    expect(isNumericString(testData, 'aString')).toBeFalsy();
    expect(isNumericString(testData, 'aFunction')).toBeFalsy();
    expect(isNumericString(testData, 'anObject')).toBeFalsy();
    expect(isNumericString(testData, 'anArray')).toBeFalsy();
    expect(isNumericString(testData, 'aPerson')).toBeFalsy();
  });

  test('Should validate isString', () => {
    expect(isString(testData, 'aPositiveNumber')).toBeFalsy();
    expect(isString(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isString(testData, 'aZero')).toBeFalsy();
    expect(isString(testData, 'aPositiveNumberString')).toBeTruthy();
    expect(isString(testData, 'aNegativeNumberString')).toBeTruthy();
    expect(isString(testData, 'aString')).toBeTruthy();
    expect(isString(testData, 'aFunction')).toBeFalsy();
    expect(isString(testData, 'anObject')).toBeFalsy();
    expect(isString(testData, 'anArray')).toBeFalsy();
    expect(isString(testData, 'aPerson')).toBeFalsy();
  });

  test('Should validate isFunction', () => {
    expect(isFunction(testData, 'aPositiveNumber')).toBeFalsy();
    expect(isFunction(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isFunction(testData, 'aZero')).toBeFalsy();
    expect(isFunction(testData, 'aPositiveNumberString')).toBeFalsy();
    expect(isFunction(testData, 'aNegativeNumberString')).toBeFalsy();
    expect(isFunction(testData, 'aString')).toBeFalsy();
    expect(isFunction(testData, 'aFunction')).toBeTruthy();
    expect(isFunction(testData, 'anObject')).toBeFalsy();
    expect(isFunction(testData, 'anArray')).toBeFalsy();
    expect(isFunction(testData, 'aPerson')).toBeFalsy();
  });

  test('Should validate isObject', () => {
    expect(isObject(testData, 'aPositiveNumber')).toBeFalsy();
    expect(isObject(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isObject(testData, 'aZero')).toBeFalsy();
    expect(isObject(testData, 'aPositiveNumberString')).toBeFalsy();
    expect(isObject(testData, 'aNegativeNumberString')).toBeFalsy();
    expect(isObject(testData, 'aString')).toBeFalsy();
    expect(isObject(testData, 'aFunction')).toBeFalsy();
    expect(isObject(testData, 'anObject')).toBeTruthy();
    expect(isObject(testData, 'anArray')).toBeFalsy();
    expect(isObject(testData, 'aPerson')).toBeTruthy();
  });

  test('Should validate isArray', () => {
    expect(isArray(testData, 'aPositiveNumber')).toBeFalsy();
    expect(isArray(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isArray(testData, 'aZero')).toBeFalsy();
    expect(isArray(testData, 'aPositiveNumberString')).toBeFalsy();
    expect(isArray(testData, 'aNegativeNumberString')).toBeFalsy();
    expect(isArray(testData, 'aString')).toBeFalsy();
    expect(isArray(testData, 'aFunction')).toBeFalsy();
    expect(isArray(testData, 'anObject')).toBeFalsy();
    expect(isArray(testData, 'anArray')).toBeTruthy();
    expect(isArray(testData, 'aPerson')).toBeFalsy();
  });

  test('Should validate isPersona', () => {
    expect(isPerson(testData, 'aPositiveNumber')).toBeFalsy();
    expect(isPerson(testData, 'aNegativeNumber')).toBeFalsy();
    expect(isPerson(testData, 'aZero')).toBeFalsy();
    expect(isPerson(testData, 'aPositiveNumberString')).toBeFalsy();
    expect(isPerson(testData, 'aNegativeNumberString')).toBeFalsy();
    expect(isPerson(testData, 'aString')).toBeFalsy();
    expect(isPerson(testData, 'aFunction')).toBeFalsy();
    expect(isPerson(testData, 'anObject')).toBeFalsy();
    expect(isPerson(testData, 'anArray')).toBeFalsy();
    expect(isPerson(testData, 'aPerson')).toBeTruthy();
  });
});

