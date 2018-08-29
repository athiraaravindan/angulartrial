import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../booklist';
import { BooksService } from '../books.service';
import { HttpClient } from '@angular/common/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Items:any[];
  name: String = "";
  user:String ="";
  image:String = "";
 

  selectedBook:Book ;
 
   BOOKS: Book[];
  //books = BOOKS[];

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  getBooks(): void {
    this.BooksService.getBooks()
        .subscribe(books => this.BOOKS = BOOKS);
  }
  constructor(private BooksService: BooksService, private http: HttpClient, private router:ActivatedRoute) {
   
   }
  ngOnInit() {
    this.getBooks();
    this.router.queryParams.subscribe(
      params => {
        this.user = params.user;
            ;
      }
    
    );
  }
  getDetails(){ 
    this.http.get('http://jsonplaceholder.typicode.com/posts?_start=5&_limit=5')
    .subscribe( (data:any[]) => {
    this.Items = data;
    console.log(this.Items); 
    }) 
    };
    

}


