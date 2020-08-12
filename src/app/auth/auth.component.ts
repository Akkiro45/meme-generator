import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // signup form
  form = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ]))
  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  // on signup
  onSubmit() {
    // Todo: signup
    localStorage.setItem('email', this.form.value.email);
    this.router.navigate(['home']);
  }

}
