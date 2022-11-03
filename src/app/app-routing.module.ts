import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'movie/:type/:id',component: MovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
