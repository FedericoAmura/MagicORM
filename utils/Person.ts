export default class Person {
  public firstname: string;
  public lastname: string;
  public age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  static fromData(data: any) {
    return new Person(data.firstname, data.lastname, data.age)
  }

  public fullname(): string {
    return this.firstname + " " + this.lastname;
  }
}
