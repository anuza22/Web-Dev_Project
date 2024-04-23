import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../models';
import { BookApiService } from '../service/book-api.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent {

  // bookDetail: Book;
  
  // constructor(
  //   private route: ActivatedRoute,
  //   private bookApiService: BookApiService,
  //   this.bookDetail
  // ) { }


  // ngOnInit(): void {
  //   let getParamId = this.route.snapshot.paramMap.get('id');
  //   if (getParamId) { // Check if getParamId is not null
  //     this.getBookDetailByID(getParamId); // Call the method to fetch book details
  //   }
  // }

  // // Method to fetch book details by ID
  // getBookDetailByID(id:string){
  //   this.bookApiService.getBookById(id).subscribe((result)=>{
  //     this.bookDetail = result; // Assign the fetched book details to BookDetail property
  //   })
  // }s
}