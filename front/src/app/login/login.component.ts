import { Component } from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink, FormsModule, MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private registerService: RegisterService, private router: Router, private snackBar: MatSnackBar) {}

  login() {
    this.errorMessage = '';
    this.registerService.login(this.email, this.password)
      .subscribe({
        next: (response) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
            this.snackBar.open('Login successful', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        },
        error: (error) => {
          this.errorMessage = 'An error occurred while logging in';
          this.snackBar.open('An error occurred while logging in', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
  }
  
  }

