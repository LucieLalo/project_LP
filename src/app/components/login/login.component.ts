import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._formBuilder.group({
      email: ["allister@all.io", [Validators.required, Validators.email]],
      password: ["test", [Validators.required]]
    });
  }

  login(loginForm: FormGroup) {
    console.log("loginForm : ", loginForm);
    this._authService.login(loginForm.value).subscribe(({isLogged, error}) => {

      if (error) {
        console.log(error);
        this._toastr.error(error.message)
      }

      if (isLogged) {
        this._router.navigate(['/home']);
      }

      this._authService.isLogged$.next(isLogged);
    })
  }

}
