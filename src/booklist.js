import React, { Component } from 'react';

export class BookList extends Component {
  renderList() {
	return this.props.books.map( (book) => {	  
	  return(
	    <li 
		  key={book.title}
		  className="list-group-item"
		  onClick={() => this.props.selectBook(book)}
		>
		  {book.title}
		</li>
	  );	
	});  
  }
  render () {
    return (
	  <ul className="list-group col-sm-4">
	    {this.renderList()}
	  </ul>
	);
  }
}
