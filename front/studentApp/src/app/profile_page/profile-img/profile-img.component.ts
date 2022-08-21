import { Student } from './../../Models/student.model';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../../service/student.service';
import { StudentDataService } from './../../service/data/student-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.css'],
})
export class ProfileImgComponent implements OnInit {
  id: any;

  constructor(
    private studentService: StudentDataService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
