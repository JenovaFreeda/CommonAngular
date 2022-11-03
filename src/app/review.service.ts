import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8089';

  public saveReview(reviews: any) {
    return this.http.post(this.API + '/review/register', reviews);
  }
  public getAll() {
    return this.http.get(this.API + '/review/getReviews')
  }
}
