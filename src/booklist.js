import React, { Component } from 'react';

export class BookList extends Component {
  renderList() {
	return this.props.books.map( (book) => {	  
	  return(
	    <li 
		  key={book.title}
		  className="list-group-item"
			onClick={() => this.props.selectBook(book)}
			style={this.getStyle(book, this.props.selectedBook)}
		>
		  {book.title}
		</li>
	  );	
	});  
	}
	getStyle(book, selectedBook){
		if(selectedBook && book && book.title === selectedBook.title) {
			return {background: "green"};
		}
		return {color:"red"};
	}
  render () {
    return (
	  <ul className="list-group col-sm-4">
	    {this.renderList()}
	  </ul>
	);
  }
}
