import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import { CommentComponent } from './comment/comment.component';
import { BaseLayoutComponent } from './_layout/base-layout/base-layout.component';
import { NavbarComponent } from './_layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DetailComponent,
    CommentComponent,
    BaseLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
