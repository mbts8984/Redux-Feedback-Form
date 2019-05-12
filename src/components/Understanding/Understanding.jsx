import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Review from '../Review/Review.jsx';

export class Understanding extends Component {
   
    // state = {
    //     understanding: 0
    // }
   
    //handle change for understanding input
    handleChange = (event) => {
        // this.setState({
        //     understanding: event.target.value
        // })
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value, name: 'understanding' });
    } //end handleChangeFor

    // handle submit. prevents reload of page logs click and understanding value, dispatches state to redux.
    // moves to next page in feedback loop
    handleUnderstandingSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked. In handleUnderstandingSubmit with value of: ');
        this.props.history.push('/supportIn')
    } //end handleFeelingSubmit

   
   
    render() {
        return (
            <div>
                <h2>How Well Are You Understanding The Content?</h2>
                <br />
                <TextField
                    onChange={this.handleChange}
                    type="number"
                    id="outlined-number"
                    label="Enter A Number 1-5"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined" />
                <br></br>
                <Button
                    onClick={this.handleUnderstandingSubmit}
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

export default connect(mapStateToProps)(Understanding)