import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Review from '../Review/Review.jsx';
// import { TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

export class Feeling extends Component {
  
    // state = {
    //     feelings: 0
    // }
  //handle change for feeling input
    handleChange = (event) => {
      this.props.dispatch({ type: 'SET_FEELINGS', payload: event.target.value, name: 'feelings' });
    } //end handleChangeFor
  
// handle submit. prevents reload of page logs click and feeling value, dispatches state to redux.
// moves to next page in feedback loop
    handleFeelingSubmit = (event) => {
      event.preventDefault(); 
        console.log('submit clicked. In handleFeelingSubmit with value of: ');
      //this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state, name: 'feelings' });
        this.props.history.push('/understandingIn')
    } //end handleFeelingSubmit
  
  
  
    render(){
      return (
        <div>
            <h2>How Are You Feeling Today?</h2>
            <br/>
            <TextField
              onChange={this.handleChange}
              type="number"
              id="outlined-number"
              label="Enter a number 1-5"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"/>
            <br></br>
            <Button
            onClick={this.handleFeelingSubmit}
              variant="outlined"
              color="primary">Next Section</Button>
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