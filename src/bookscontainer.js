import React, {Component} from 'react';

import {BookList} from './booklist'
import {BookDetail} from './bookdetails'

export class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedBook: null, books: [{title: 'Kamayani'},
    {title: 'Rashmirathi'},
    {title: 'Eat that frog'},
    {title: 'Fifty shades of Gray'},
    {title: 'Man eater tiger of Rudraprayag'}]}

    this.selectBook = this.selectBook.bind(this);
  }
  selectBook(book) {
    this.setState({selectedBook: book});
  }
  render() {
    return (
      <div> 
        <BookList selectBook={this.selectBook} books={this.state.books}/>
        <hr/>
        <BookDetail book={this.state.selectedBook}/>
      </div>
    );
  }
}
