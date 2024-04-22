import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../service/book-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private bookApiService: BookApiService){}

  books: Book[] = [];
  loggedIn: boolean = true;
  showCatalogMenu: boolean = false;

  categories: string[] = [
    'Fiction',
    'Fantasy',
    'Mystery',
    'Adventure',
    'Romance',
    'Biography',
    'History',
    'Science',
    'Business',
    'Computers',
    'Cooking',
    'Health',
    'Self-Help',
    'Travel'
  ]; 

  ngOnInit(): void {
    this.loadBooksByCategories();
  }

  toggleCatalogMenu(): void {
    this.showCatalogMenu = !this.showCatalogMenu; // Инвертируем значение переменной видимости меню
  }

  loadBooksByCategories(): void {
    this.bookApiService.getByCategories(this.categories)
      .subscribe({
        next: (books: Book[]) => {
          this.books = books;
          console.log('Books loaded:', this.books);
        },
        error: (error: any) => {
          console.error('Error loading books:', error);
        }
      });
  }

}
