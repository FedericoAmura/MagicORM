import MagicORM from './src/MagicORM';
import personsData from './utils/persons.json';
import PersonModel from './utils/personModel';
import Person from './utils/Person';

async function main() {
  // Getting Chris data. This can be replaced from any source, even DBs as long as we receive a JSON like thing
  const persons = personsData;
  const chrisData = persons[0];
  console.log(`Chris data is: ${JSON.stringify(chrisData)}`);

  // Getting how to construct Person object. This can also be obtained from a DB or endpoint
  const personModel = PersonModel;
  console.log(`Person model: ${JSON.stringify(personModel)}`);

  // Now we want to create a Person from data validating the updated Model
  const magicORM = new MagicORM(true);
  const cr: Person = magicORM.get<Person>(chrisData, personModel, Person.fromData);
  // So, if the data validates the model, we get the created object
  // And this happens decoupled from the object constructor code which could not verify anything
  console.log(`This is the Chris Person object: ${JSON.stringify(cr)}`);
  console.log(`Which has type: ${cr.constructor.name} and can call methods like fullname that return: ${cr.fullname()}`);
}


main().catch(e => console.error(e));
