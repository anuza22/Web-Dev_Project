import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'book/:id',component:BookDetailComponent},
    {path:'register', component:RegisterComponent}
];
