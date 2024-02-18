import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

const routes: Routes = [
  { path: 'newsfeed', component: NewsFeedComponent, pathMatch: 'full' },
  { 
    path: '', 
    redirectTo: 'newsfeed', 
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
