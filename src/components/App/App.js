import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import {Button} from '@material-ui/core';

//Redux stuff
import {connect} from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';


//Import components
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Success from '../Success/Success.jsx';
import Review from '../Review/Review.jsx';

class App extends Component {

  // State to hold feedback before passing to DB
  // state = {
  //   feedback: {
  //     feelings: '',
  //     understanding: '',
  //     support: '',
  //     comments: ''
  //   }
  // }

  render() {
    return (
      <div className="App">
       <HashRouter>
        <header className="App-header">
         <ul>
           <li><Link to='/'>Feelings</Link></li>
           <li><Link to='/understandingIn'>Understanding</Link></li>
           <li><Link to='/supportIn'>Support</Link></li>
           <li><Link to='/commentsIn'>Comments</Link></li>
           <li><Link to='/review'>Review</Link></li>
           <li><Link to='/success'>ThankYou</Link></li>
         </ul>
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        
        <Route exact path='/' component={ Feeling } />
        <Route path='/understandingIn' component={ Understanding } />
        <Route path='/supportIn' component={ Support } />
        <Route path='/commentsIn' component={ Comments } />
        <Route path='/review' component={ Review }/>
        <Route path='/success' component={ Success } />
        <Review />
        
       </HashRouter>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(App);
