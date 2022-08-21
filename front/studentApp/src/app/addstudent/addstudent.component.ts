import { Router } from '@angular/router';
import { Student } from './../Models/student.model';
import { StudentService } from './../service/student.service';
import { StudentDataService } from './../service/data/student-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
})
export class AddstudentComponent implements OnInit {
  student: Student;
  constructor(
    private studentService: StudentDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.student = new Student(-1, '', new Date(), '', '');
  }

  addStudent(student: Student) {
    this.studentService.addStudent(student).subscribe((response) => {
      console.log(response);
      this.router.navigate(['']);
    });
  }
  log(x: any) {
    console.log(x);
  }
}
