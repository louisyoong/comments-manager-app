import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  // @ts-ignore
  public listPost: Post[];
  // @ts-ignore
  public listSelected: Number;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getComments()
      .subscribe(
        data => {
          this.listPost = data
        },
        error => {
          throw error
        }
      );
  }

  onListSelected(listSelectedId: any): void {
    this.ApiService.getCommentsPostSelectedbyParameter(listSelectedId)
      .subscribe(
        data => {
          this.listPost = data;
        }
      )
  }


}
