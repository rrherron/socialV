import { Component, Input, OnInit } from '@angular/core';

export interface IPostComments {
  totalLikes: number;
  likesUsers: string[];
  totalComments: number;
  commentsUsers: string[];
  totalShares: number;
  comments: IComment[]
}
export interface IComment {
  name: string;
  userImgLocation: string;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  @Input() postComments!: IPostComments;
  public maxUserLikes: number = 7;
  public maxUserComments: number = 7;
  public maxComments: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  shareOnClick() {
    console.log('shareOnClick');
  }

  likeOnClick() {
    console.log('likeOnClick');
  }

  replyOnClick() {
    console.log('replyOnClick');
  }

  translateOnClick() {
    console.log('translateOnClick');
  }

  insertLinkOnClick() {
    console.log('insertLinkOnClick');
  }

  emotOnClick() {
    console.log('emotOnClick');
  }

  pictureOnClick() {
    console.log('pictureOnClick');
  }

}
