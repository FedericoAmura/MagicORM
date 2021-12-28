import { Model } from '../src/MagicORM';
import { isPositiveNumber, isString, isNumericString } from '../src/validators';
import { or } from '../src/combinators';

// TODO validate the required properties
// TODO is it possible to add access validation? Does not seem possible in JS/TS as this is a TS feature (compile time). Maybe in other languages
// TODO add methods through this model
// TODO handle situation when calling a property/method that does not exists
const personModel: Model = {
  properties: {
    firstname: {
      type: isString,
      required: true,
      access: 'public',
    },
    lastname: {
      type: isString,
      required: true,
      access: 'public',
    },
    age: {
      type: or([isPositiveNumber, isNumericString]),
      required: true,
      access: 'public',
    },
  },
};

export default personModel;
