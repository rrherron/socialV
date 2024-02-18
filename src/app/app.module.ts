import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedCardComponent } from './components/news-feed-card/news-feed-card.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPostDataComponent } from './components/news-feed-card/components/user-post-data/user-post-data.component';
import { PostComponent } from './components/news-feed-card/components/post/post.component';
import { PostCommentsComponent } from './components/news-feed-card/components/post-comments/post-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedCardComponent,
    NewsFeedComponent,
    UserPostDataComponent,
    PostComponent,
    PostCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
