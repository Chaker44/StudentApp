export class Student {
  public id: number;
  public name: string;
  public dateOfBirth: Date;
  public description: string;
  public email: string;
  constructor(
    id: number,
    name: string,
    dateOfBirth: Date,
    description: string,
    email: string
  ) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.description = description;
    this.email = email;
  }
}
