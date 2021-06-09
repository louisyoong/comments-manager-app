import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient,HttpParams} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // @ts-ignore
  public getDetail(id): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  public getComments(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  public getCommentsPostSelectedbyParameter(listSelectedId: string): Observable<any> {
    let param1 = new HttpParams().set('postId', listSelectedId);
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {params:param1});
  }
}
