import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this._formBuilder.group({
      pseudo: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    // this.registerForm.valueChanges.subscribe(value => {
    //   console.log("value : ", value);
    // })
  }

  register(registerForm: FormGroup) {
    console.log("registerForm : ", registerForm.valid);
    this._userService.register(registerForm.value).subscribe(data => {
      console.log("data : ", data);
    })
  }
}
