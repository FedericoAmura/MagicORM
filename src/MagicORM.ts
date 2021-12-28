export interface Model {
  properties: object;
}

class MagicORM {
  private crashOnFailure: boolean;

  constructor(crashOnFailure: boolean) {
    this.crashOnFailure = crashOnFailure; // We might not want to crash on production, but we certainly do when testing
  }

  public get<T>(data: any, model: Model, dataConstructor: (data: any) => T) {
    for (const [property, propertyData] of Object.entries(model.properties)) {
      if (!data[property]) throw new Error(`Property ${property} does not exist`);

      if (!propertyData.type(data, property)) throw new Error(`Property ${property} does not validate`)
    }

    return dataConstructor(data);
  }
}

export default MagicORM;
