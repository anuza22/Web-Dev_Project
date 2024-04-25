import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink, CommonModule, ReactiveFormsModule
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  userData:FormGroup
  constructor(private fb:FormBuilder,private regSer:RegisterService,private router:Router){
    this.userData = this.fb.group({
      username : ['',Validators.required],
      email : ['',Validators.required],
      password: ['',Validators.required],

    })
  }

  ngOnInit(): void {
    
  }

  userRegister() {
    if (this.userData.valid) {
      const userDataValue = this.userData.value;
      console.log(userDataValue);
      
      this.regSer.userRegister(userDataValue).subscribe({
        next: (response) => {
          alert("Registered successfully");
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.error("Registration failed:", error);
          alert("Registration failed. Please try again later.");
        }}
      );
    } else {
      alert("Please provide valid data for all fields.");
    }
  }
   
 

}
