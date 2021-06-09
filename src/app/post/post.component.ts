import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Posts} from '../interfaces/posts'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // @ts-ignore
  listPost: Posts[];

  constructor(private ApiService: ApiService) {
  }

  ngOnInit(): void {
    this.ApiService.getPosts()
      .subscribe(data => {
          this.listPost = data
        },
        error => {
          throw error
        }
      );
  }

}
