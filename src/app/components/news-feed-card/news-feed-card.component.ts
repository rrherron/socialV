import { Component, Input, OnInit } from '@angular/core';
import { IUserPostData } from './components/user-post-data/user-post-data.component';
import { IPostData } from './components/post/post.component';
import { IPostComments } from './components/post-comments/post-comments.component';

export interface INewsFeedPost {
  userData: IUserPostData;
  post: IPostData;
  comments: IPostComments;
}

@Component({
  selector: 'app-news-feed-card',
  templateUrl: './news-feed-card.component.html',
  styleUrls: ['./news-feed-card.component.css']
})
export class NewsFeedCardComponent implements OnInit {

  @Input() postData!: INewsFeedPost;

  constructor() { }

  ngOnInit(): void {
  }

}
