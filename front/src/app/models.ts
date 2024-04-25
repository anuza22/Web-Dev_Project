export interface Book {
    id: string;
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    thumbnail: string;
    pageCount: number;
    categories: string[];
    language: string;
    previewLink: string;
    infoLink: string;
}

export interface User {
  name: string;
  email: string;
  password: string
}

export interface Comment {
  user: User;
  book: Book;
  text: string;
}

export interface Cart {
  user: User;
  books: Book[]
}
