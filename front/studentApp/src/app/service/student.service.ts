import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public students = [
    { id: 1, name: 'chaker', dateOfBirth: new Date('2001-05-12') },
    { id: 2, name: 'mootez', dateOfBirth: new Date() },
    { id: 3, name: 'souhaib', dateOfBirth: new Date() },
    { id: 4, name: 'said', dateOfBirth: new Date() },
  ];

  constructor() {}

  getStudents() {
    return this.students;
  }
}
