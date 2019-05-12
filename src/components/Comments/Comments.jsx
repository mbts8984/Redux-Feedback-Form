import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Review from '../Review/Review.jsx';

export class Comments extends Component {
    
    state = {
       // comments: '',
        isFilled: false
    }
    //handle change for comments input
    handleChange = (event) => {
        console.log('in handleChange in Comments');
        this.props.dispatch({ type: 'SET_COMMENTS', payload: event.target.value, name: 'comments' });
        
    } //end handleChangeFor


    // checkIfComplete = () => {
    //     if (!this.props.feedback.comments || !this.props.feedback.feelings || !this.props.feedback.understanding || !this.props.feedback.support) {
    //         this.setState({
    //             isFilled: false
    //         })
    //     }
    //     else {
    //         this.setState({
    //             isFilled: true
    //         })

    //     }
    //     console.log('checkIfComplete', this.state.isFilled)
    // };



    // handle submit. prevents reload of page logs click and comments value, dispatches state to redux.
    // moves to next page in feedback loop
    handleNext = (event) => {
       // event.preventDefault();
        console.log('submit clicked. In handleNext with value of: ');
        
        this.props.history.push('/')
    } //end handleFeelingSubmit
    
    
    
    
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <TextField
                    onChange={this.handleChange}
                    type="text"
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline rows="4"
                    margin="normal"
                    variant="outlined" />
                <br></br>
                <Button
                    onClick={this.handleNext}
                    variant="outlined"
                    color="primary">Back to Feelings Section</Button>
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

export default connect(mapStateToProps)(Comments)