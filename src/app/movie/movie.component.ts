import { ReviewService } from './../review.service';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent implements OnInit {

  reviewContent: any = null
  type = '';
  id = '';
  url = '';
  movies : any;
  movie : any;
  u_name: String = "";
  review_data : String = "";

 
  constructor(private route : ActivatedRoute, private http : HttpClient, private reviewService: ReviewService) { 

      this.retrieveReviews();
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'trending'){
        this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if(this.type === 'theatre'){
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
  }
  if(this.type === 'popular'){
    this.url = 'http://localhost:4200/assets/data/popular-movies.json';
}
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: {id: String}) => movie.id == this.id);

      if(index > -1){
        this.movie = this.movies[index];
      }

    })
  }
  register(reviewForm :NgForm) {
    this.reviewService.saveReview(reviewForm.value).subscribe(
      (resp) => {
        console.log(resp);
        reviewForm.reset();
        this.retrieveReviews();
      },
      (err) => {
        console.log(err);
      }
    )
  }
  retrieveReviews() {
    this.reviewService.getAll().subscribe(
      (resp) => {
        console.log(resp);
        this.reviewContent = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
