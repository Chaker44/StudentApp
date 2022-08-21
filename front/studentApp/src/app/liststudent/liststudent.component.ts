import { StudentDataService } from './../service/data/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css'],
})
export class ListstudentComponent implements OnInit {
  students: any = [];
  message: any;
  constructor(
    private studentDataService: StudentDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshListOfStudents();
  }
  refreshListOfStudents() {
    this.studentDataService.getListOfStudents().subscribe((response: any) => {
      console.log(response);
      this.students = response;
    });
  }

  deleteStudent(id: number) {
    this.studentDataService.deleteStudent(id).subscribe((response) => {
      console.log(response);
      this.message = `Delete student ${id} sucessful`;
      this.refreshListOfStudents();
    });
  }
  update(id: number) {
    this.router.navigate(['students', id]);
  }

  addStudent() {
    this.router.navigate(['add']);
  }
}
