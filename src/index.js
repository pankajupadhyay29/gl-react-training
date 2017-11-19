import React from 'react';
import ReactDOM from 'react-dom';

import {BooksContainer} from "./bookscontainer"

const Welcome = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Welcome</h1>
      <p>This is a simple functional component</p>
    </div>
  );
}

ReactDOM.render(<BooksContainer/>, document.getElementById('app'));
