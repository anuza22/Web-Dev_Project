import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http:HttpClient) { }

  baseUrl="https://www.googleapis.com/books/v1/";
  apiKey='AIzaSyAfrKiM2pERprGSjHavtMRCgF_yFULQoX8';

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}volumes/${bookId}?key=${this.apiKey}`);
  }

  bannerApiData(): Observable<Book[]> {
    return this.http.get<any>(`${this.baseUrl}volumes?q=popular&key=${this.apiKey}`)
      .pipe(
        map(response => response.items.map((item: any) => this.extractBookData(item)))
      );
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<any>(`${this.baseUrl}volumes?q=${query}&key=${this.apiKey}`)
      .pipe(
        map(response => response.items.map((item: any) => this.extractBookData(item)))
      );
  }

  getBooksByCategory(category: string): Observable<Book[]> {
    return this.http.get<any>(`${this.baseUrl}volumes?q=subject:${category}&key=${this.apiKey}`)
      .pipe(
        map(response => response.items.map((item: any) => this.extractBookData(item)))
      );
  }

  getByCategories(categories: string[]): Observable<Book[]> {
    const categoryQuery = categories.join('+');
    return this.http.get<any>(`${this.baseUrl}volumes?q=subject:${categoryQuery}&key=${this.apiKey}`)
      .pipe(
        map(response => response.items.map((item: any) => this.extractBookData(item)))
      );
  }

  // Преобразовать данные книги из ответа API в модель Book
  private extractBookData(item: any): Book {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || [],
      publisher: item.volumeInfo.publisher || '',
      publishedDate: item.volumeInfo.publishedDate || '',
      description: item.volumeInfo.description || '',
      thumbnail: (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) || '',
      pageCount: item.volumeInfo.pageCount || 0,
      categories: item.volumeInfo.categories || [],
      language: item.volumeInfo.language || '',
      previewLink: item.volumeInfo.previewLink || '',
      infoLink: item.volumeInfo.infoLink || ''
    };
  }
}
