import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router,  Switch, Route, Link } from 'react-router-dom'

import {BooksContainer} from "./bookscontainer"


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/about'>About Us</Link></li>
      </ul>
    </nav>
  </header>
)

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page</p>
    </div>
  );
}

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are here to attend ReactJS training. We are learning React</p>
    </div>
  );
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/books' component={BooksContainer}/>
      <Route path='/about' component={AboutUs}/>
    </Switch>
  </main>
)

const App = (props) => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
