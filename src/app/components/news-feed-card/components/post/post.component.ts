import { Component, Input, OnInit } from '@angular/core';

export interface IPostData {
  comment?: string;
  imgLocations?: string[];
  videoLocation?: string ;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postData!: IPostData;

  constructor() { }

  ngOnInit(): void {
  }

}
