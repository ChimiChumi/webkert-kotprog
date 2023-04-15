import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  login(username: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(username, password)
      .then(result => {
        this.auth.authState.subscribe(user => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/dashboard']);
            console.log(user);
          }
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  logout() {
    localStorage.setItem('user', 'null');
    this.router.navigate(['']);
  }

  isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }
}
