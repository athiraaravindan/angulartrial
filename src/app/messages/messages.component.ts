import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() book: Book;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
