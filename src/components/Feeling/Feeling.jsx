import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import Review from '../Review/Review.jsx';
// import { TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

export class Feeling extends Component {
  
    state = {
        feelings: 0
    }
  //handle change for feeling input
    handleChangeFor = (event) => {
        this.setState({
            feelings : event.target.value
        })
    } //end handleChangeFor
  
// handle submit. prevents reload of page logs click and feeling value, dispatches state to redux.
// moves to next page in feedback loop
    handleFeelingSubmit = (event) => {
      event.preventDefault(); 
        console.log('submit clicked. In handleFeelingSubmit with value of: ', this.state.feelings);
      this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state, name: 'feelings' });
        this.props.history.push('/understandingIn')
    } //end handleFeelingSubmit
  
  
  
    render(){
      return (
        <div>
            <h2>How Are You Feeling Today?</h2>
            <br/>
            <h5>Feeling?</h5>
            <form onSubmit={this.handleFeelingSubmit}>
                <input type="number" placeholder="1-5" onChange={this.handleChangeFor}></input>
                  <Button type="submit" variant="contained" color="primary">Next</Button>
            </form>
          <Review />
        </div>
      )
  }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling)