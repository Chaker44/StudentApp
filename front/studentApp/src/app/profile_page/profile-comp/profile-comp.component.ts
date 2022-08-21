import { Student } from './../../Models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from './../../service/data/student-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-comp',
  templateUrl: './profile-comp.component.html',
  styleUrls: ['./profile-comp.component.css'],
})
export class ProfileCompComponent implements OnInit {
  id: any;
  student: any;
  constructor(
    private studentService: StudentDataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if (isNaN(this.id)) {
      console.log('yes');
      this.router.navigate(['**']);
    } else {
      this.student = new Student(
        1,
        'gggggg',
        new Date('10-10-2010'),
        'fgfgfgfgfgfgfgfg',
        'a@a.gmail.com'
      );
      this.studentService.getProfilePage(this.id).subscribe((data: any) => {
        this.student = data;
        console.log(data);
      });
    }
  }

  updateStudent(id: number, student: Student) {
    this.studentService.updateStudent(id, student).subscribe((response) => {
      console.log(response);
      this.router.navigate(['students']);
    });
  }
}
