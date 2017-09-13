import { api } from './api';

export function getBooks() {
  return api.get('/books');
}

export function getBook(id) {
  return api.get(`/books/${id}`);
}
