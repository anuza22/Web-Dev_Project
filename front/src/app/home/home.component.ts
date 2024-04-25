import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../service/book-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  PROF_URL!: string;

  constructor(private bookApiService: BookApiService){}

  books: Book[] = [];
  loggedIn: boolean = false;
  showCatalogMenu: boolean = false;

  bannerResult:Book[]=[];

  fictionBooks: Book[] = [];
  fantasyBooks: Book[] = [];
  mysteryBooks: Book[] = [];
  adventureBooks: Book[] = [];
  romanceBooks: Book[] = [];
  biographyBooks: Book[] = [];
  historyBooks: Book[] = [];
  scienceBooks: Book[] = [];
  businessBooks: Book[] = [];
  computersBooks: Book[] = [];
  cookingBooks: Book[] = [];
  healthBooks: Book[] = [];
  selfHelpBooks: Book[] = [];
  travelBooks: Book[] = [];

  ngOnInit(): void {
    if(this.fictionBooks.length == 0){
      this.loadBooksByCategories();
      this.bannerData();
    }
    if(this.loggedIn){
      this.PROF_URL = '/profile'
    } else {
      this.PROF_URL = '/login'
    }
  }

  bannerData() {
    this.bookApiService.bannerApiData().subscribe((result) => {
      console.log(result, "bannerResult");
      this.bannerResult = result;
    });
  }

  toggleCatalogMenu(): void {
    this.showCatalogMenu = !this.showCatalogMenu; // Инвертируем значение переменной видимости меню
  }
  loadBooksByCategories(): void {
    this.loadBooksByCategory('Fiction', this.fictionBooks);
    this.loadBooksByCategory('Fantasy', this.fantasyBooks);
    this.loadBooksByCategory('Mystery', this.mysteryBooks);
    this.loadBooksByCategory('Adventure', this.adventureBooks);
    this.loadBooksByCategory('Romance', this.romanceBooks);
    this.loadBooksByCategory('Biography', this.biographyBooks);
    this.loadBooksByCategory('History', this.historyBooks);
    this.loadBooksByCategory('Science', this.scienceBooks);
    this.loadBooksByCategory('Business', this.businessBooks);
    this.loadBooksByCategory('Computers', this.computersBooks);
    this.loadBooksByCategory('Cooking', this.cookingBooks);
    this.loadBooksByCategory('Health', this.healthBooks);
    this.loadBooksByCategory('Self-Help', this.selfHelpBooks);
    this.loadBooksByCategory('Travel', this.travelBooks);
  }

  private loadBooksByCategory(category: string, targetArray: Book[]): void {
    this.bookApiService.getBooksByCategory(category)
      .subscribe({
        next: (books: Book[]) => {
          targetArray.push(...books);
          console.log(`Books loaded for category ${category}:`, books);
        },
        error: (error: any) => {
          console.error(`Error loading books for category ${category}:`, error);
        }
      });
  }



}
