import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './booklist';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    this.messageService.add('Clear message....');
    return of(BOOKS);
  }
  // getBooks(): Book[] {
  //   return BOOKS;
  // }

  constructor(private messageService: MessageService) { }
}
