import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./post/post.component";
import {DetailComponent} from "./detail/detail.component";
import {CommentComponent} from "./comment/comment.component";
import {BaseLayoutComponent} from "./_layout/base-layout/base-layout.component";

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children  : [
      {
        path      : '',
        component : PostComponent
      },
      {
        path      : 'post/:id',
        component : DetailComponent
      },
      {
        path      : 'comment',
        component : CommentComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
