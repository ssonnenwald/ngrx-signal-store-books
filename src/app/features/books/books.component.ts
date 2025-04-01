import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { BooksStore } from '../../stores/books-store/books-store';
import { RandomHelper } from '../../helpers/random-helper';
import { IBook } from '../../models/book';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-books',
  imports: [MatList, MatDivider, MatListItem, MatProgressSpinner, MatButton],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  providers: [BooksStore],
})
export class BooksComponent {
  bookStore = inject(BooksStore);

  public addBook(): void {
    this.bookStore.add({
      id: RandomHelper.getRandomInt(10000, 99999),
      name: RandomHelper.getRandomString(5),
      pageCount: 0,
    });
  }

  public removeBook(book: IBook): void {
    this.bookStore.remove(book);
  }
}
