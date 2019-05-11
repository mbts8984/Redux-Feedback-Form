import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

export class Feeling extends Component {
  
    state = {
        feeling: ''
    }
  //handle change for feeling input
    handleChangeFor = property => event => {
        this.setState({
            [property] : event.target.value
        })
    } //end handleChangeFor
  
// handle submit. prevents reload of page logs click and feeling value, dispatches state to redux.
// moves to next page in feedback loop
    handleFeelingSubmit = (event) => {
      event.preventDefault(); 
        console.log('submit clicked. In handleFeelingSubmit with value of: ', this.state.feeling);
      this.props.dispatch({type: 'SET_FEELINGS', payload: this.state});
        this.props.history.push('/understandingIn')
    } //end handleFeelingSubmit
  
  
  
    render(){
      return (
        <div>
            <h2>How Are You Feeling Today?</h2>
            <br/>
            <h5>Feeling?</h5>
            <form onSubmit={this.handleFeelingSubmit}>
                <input type="number" placeholder="1-5" onChange={this.handleChangeFor('feeling')}></input>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
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