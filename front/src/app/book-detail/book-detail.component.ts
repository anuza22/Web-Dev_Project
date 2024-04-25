import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../models";
import {BookApiService} from "../service/book-api.service";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit{

  book!: Book

  constructor(private route: ActivatedRoute, private bookServ: BookApiService) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookServ.getBookById(params['id']).subscribe(book =>{
        this.book = book;
      })
    })
    console.log(this.book.id)
  }

}
