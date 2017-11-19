import React, { Component } from 'react';

export class BookDetail extends Component {
  
  render () {
	if(!this.props.book){
		return <div> Select a book to get started. </div>;
	}
    return (
	  <div>
	    <h3> Book Detail</h3>
	    <div>
	      {this.props.book.title}
	    </div>
	  </div>
	);
  }
}
