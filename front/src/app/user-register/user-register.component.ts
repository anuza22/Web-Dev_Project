import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})

export class UserRegisterComponent implements OnInit {
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

  userRegister(){

    if(this.userData.valid){
     const uservalue = this.userData.value
     console.log(uservalue)
 
     
     this.regSer.userRegister(uservalue).subscribe((response)=>{
       alert("Registered")
       this.router.navigate(['login'])
       console.log(uservalue)
     })
    }else{
     alert("every field need valid data")
    }
   }
 
 

}
