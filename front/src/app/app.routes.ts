import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'book/:id',component:BookDetailComponent}
];
