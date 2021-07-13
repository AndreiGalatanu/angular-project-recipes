import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresin: string,
  localid: string
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBI9qxOOW7lqpsE57GYR82LPwBIUiaP28U',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(catchError(errorRes => {
        let errorMessage = "An unknown error ocurred !";
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);

        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXIST':
            errorMessage = "This email exist already !"

        }
        return throwError(errorMessage);


      }));
  }
}
