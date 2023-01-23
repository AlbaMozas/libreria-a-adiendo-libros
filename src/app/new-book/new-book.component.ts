import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  @Output() newBook = new EventEmitter();

  addBook(book: any){
    console.log(book)
    this.newBook.emit(book);
  }
}
