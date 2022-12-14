import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }
  gotohome(){
    this.router.navigate(['home']);
  }
  logout(){
    this.auth.logout();
  }

}
