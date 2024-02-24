import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox'

export interface IPostData {
  comment?: string;
  images?: IAlbum[];
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

  constructor(private _lightbox: Lightbox) {}

  ngOnInit(): void {
  }

  open(index: number): void {
    // open lightbox
    if (this.postData.images) {
      this._lightbox.open(this.postData.images, index);
    }
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
