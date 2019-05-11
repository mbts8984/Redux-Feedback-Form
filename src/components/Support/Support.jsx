import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import Review from '../Review/Review.jsx';

export class Support extends Component {
    
    state = {
        support: 0
    }
    
    //handle change for support input
    handleChangeFor = property => event => {
        this.setState({
            [property]: event.target.value
        })
    } //end handleChangeFor

// handle submit. prevents reload of page logs click and understanding value, dispatches state to redux.
// moves to next page in feedback loop
    handleSupportSubmit = (event) => {
      event.preventDefault(); 
        console.log('submit clicked. In handleSupportSubmit with value of: ', this.state.support);
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state, name: 'support'});
        this.props.history.push('/commentsIn')
    } //end handleSupportSubmit
    
    render() {
        return (
            <div>
                <h2>How Well Are You Feeling Supported?</h2>
                <br />
                <h5>Support?</h5>
                <form onSubmit={this.handleSupportSubmit}>
                    <input type="number" placeholder="1-5" onChange={this.handleChangeFor('support')}></input>
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

export default connect(mapStateToProps)(Support)