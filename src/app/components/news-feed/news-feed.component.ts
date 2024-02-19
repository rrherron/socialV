import { Component, OnInit } from '@angular/core';
import { INewsFeedPost } from '../news-feed-card/news-feed-card.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  public postData: INewsFeedPost[] = [
    {
      userData: {
        name: 'Anna Sthesia',
        userImgLocation: '../../../assets/images/01.jpg',
        postStatus: 'Add New Post'
      },
      post: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
        imgLocations: [
          '../../../assets/images/dude1.jpg',
          '../../../assets/images/dude2.jpg',
          '../../../assets/images/chick1.jpg',
          '../../../assets/images/group1.jpg'
        ]
      },
      comments: {
        totalLikes: 140,
        likesUsers: [
          'Max Emum',
          'Bill Yerds',
          'Hap E',
          'Tara Misu',
          'Midge Itz',
          'Sal Vidge',
          'Other'
        ],
        totalComments: 20,
        commentsUsers: [
          'Max Emum',
          'Bill Yerds',
          'Hap E',
          'Tara Misu',
          'Midge Itz',
          'Sal Vidge',
          'Other'
        ],
        totalShares: 99,
        comments: [
          {
            name: 'Monty Carlo',
            userImgLocation: '../../../assets/images/02.jpg',
            comment: 'Lorem ipsum dolor sit amet',
            date: '5 min'
          },
          {
            name: 'Paul Molive',
            userImgLocation: '../../../assets/images/03.jpg',
            comment: 'Lorem ipsum dolor sit amet',
            date: '7 min'
          }
        ]
      }
    },
    {
    userData: {
      name: 'Anna Sthesia',
      userImgLocation: '../../../assets/images/01.jpg',
      postStatus: 'Add New Post'
    },
    post: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
      imgLocations: [
        '../../../assets/images/dude1.jpg',
          '../../../assets/images/dude2.jpg',
          '../../../assets/images/chick1.jpg'
      ]
    },
    comments: {
      totalLikes: 140,
      likesUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalComments: 20,
      commentsUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalShares: 99,
      comments: [
        {
          name: 'Monty Carlo',
          userImgLocation: '../../../assets/images/02.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '5 min'
        },
        {
          name: 'Paul Molive',
          userImgLocation: '../../../assets/images/03.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '7 min'
        }
      ]
    }
  },
  {
    userData: {
      name: 'Anna Sthesia',
      userImgLocation: '../../../assets/images/01.jpg',
      postStatus: 'Add New Post'
    },
    post: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
      imgLocations: [
        '../../../assets/images/dude1.jpg',
          '../../../assets/images/dude2.jpg'
      ]
    },
    comments: {
      totalLikes: 140,
      likesUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalComments: 20,
      commentsUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalShares: 99,
      comments: [
        {
          name: 'Monty Carlo',
          userImgLocation: '../../../assets/images/02.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '5 min'
        },
        {
          name: 'Paul Molive',
          userImgLocation: '../../../assets/images/03.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '7 min'
        }
      ]
    }
  },
  {
    userData: {
      name: 'Barb Ackue',
      userImgLocation: '../../../assets/images/01.jpg',
      postStatus: 'Added New Image in a Post'
    },
    post: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
      imgLocations: [
        '../../../assets/images/dude1.jpg'
      ]
    },
    comments: {
      totalLikes: 140,
      likesUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalComments: 20,
      commentsUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalShares: 99,
      comments: [
        {
          name: 'Monty Carlo',
          userImgLocation: '../../../assets/images/02.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '5 min'
        },
        {
          name: 'Paul Molive',
          userImgLocation: '../../../assets/images/03.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '7 min'
        }
      ]
    }
  },
  {
    userData: {
      name: 'Ira Membrit',
      userImgLocation: '../../../assets/images/01.jpg',
      postStatus: 'Update her Status'
    },
    post: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus'
    },
    comments: {
      totalLikes: 140,
      likesUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalComments: 20,
      commentsUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalShares: 99,
      comments: [
        {
          name: 'Monty Carlo',
          userImgLocation: '../../../assets/images/02.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '5 min'
        },
        {
          name: 'Paul Molive',
          userImgLocation: '../../../assets/images/03.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '7 min'
        }
      ]
    }
  },
  {
    userData: {
      name: 'Paige Turner',
      userImgLocation: '../../../assets/images/01.jpg',
      postStatus: 'Added New Video in his Timeline'
    },
    post: {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
      videoLocation: 'https://www.youtube.com/embed/j_GsIanLxZk?rel=0'
    },
    comments: {
      totalLikes: 140,
      likesUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalComments: 20,
      commentsUsers: [
        'Max Emum',
        'Bill Yerds',
        'Hap E',
        'Tara Misu',
        'Midge Itz',
        'Sal Vidge',
        'Other'
      ],
      totalShares: 99,
      comments: [
        {
          name: 'Monty Carlo',
          userImgLocation: '../../../assets/images/02.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '5 min'
        },
        {
          name: 'Paul Molive',
          userImgLocation: '../../../assets/images/03.jpg',
          comment: 'Lorem ipsum dolor sit amet',
          date: '7 min'
        }
      ]
    }
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
