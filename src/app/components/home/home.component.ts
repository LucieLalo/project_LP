import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
    this._userService.me().subscribe(data => {
      console.log("getMe : ", data);
      this.user = data.user;
      
    })
  }
}
