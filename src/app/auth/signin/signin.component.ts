import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email: string = form.value.email || 'test@example.com';
    console.log(email);
    const password: string = form.value.password || 'Passw0rd!';
    console.log(password);
    this.authService.signinUser(email, password);
  }
}
