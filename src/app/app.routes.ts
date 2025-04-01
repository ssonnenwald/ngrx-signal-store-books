import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    title: 'Books',
    path: 'books',
    loadComponent: () =>
      import('./features/books/books.component').then((m) => m.BooksComponent),
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
