import { Component, Input, OnInit } from '@angular/core';

export interface IUserPostData {
  name: string;
  userImgLocation: string;
  postStatus: string;

}

@Component({
  selector: 'app-user-post-data',
  templateUrl: './user-post-data.component.html',
  styleUrls: ['./user-post-data.component.css']
})
export class UserPostDataComponent implements OnInit {

  @Input() userData!:  IUserPostData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
