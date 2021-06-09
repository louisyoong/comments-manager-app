import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id: any;
  public data: any;

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDetail();
  }

  getDetail() {
    this.ApiService.getDetail(this.id).subscribe(data => {
      // @ts-ignore
      this.data = data;
      // @ts-ignore
      console.log(this.data);
    })
  }

}
