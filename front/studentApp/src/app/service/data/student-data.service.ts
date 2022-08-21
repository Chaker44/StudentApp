import { Student } from './../../Models/student.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  constructor(private http: HttpClient) {}

  getListOfStudents(): any {
    return this.http.get<Student[]>('http://localhost:8082/students');
  }

  getProfilePage(id: number): any {
    return this.http.get<Student>(`http://localhost:8082/students/${id}`);
  }

  deleteStudent(id: number) {
    return this.http.delete<Student>(`http://localhost:8082/students/${id}`);
  }
  updateStudent(id: number, student: Student) {
    return this.http.put(`http://localhost:8082/students/${id}`, student);
  }
  addStudent(student: Student | undefined) {
    return this.http.post<Student>(`http://localhost:8082/students`, student);
  }
}
