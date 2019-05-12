import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Review from '../Review/Review.jsx';

export class Support extends Component {
    
    // state = {
    //     support: 0
    // }
    
    //handle change for support input
    handleChange = (event) => {
        // this.setState({
        //     [property]: event.target.value
        // })
        this.props.dispatch({ type: 'SET_SUPPORT', payload: event.target.value, name: 'support' });
    } //end handleChangeFor

// handle submit. prevents reload of page logs click and understanding value, dispatches state to redux.
// moves to next page in feedback loop
    handleSupportSubmit = (event) => {
     // event.preventDefault(); 
        console.log('submit clicked. In handleSupportSubmit with value of: ');
        
        this.props.history.push('/commentsIn')
    } //end handleSupportSubmit
    
    render() {
        return (
            <div>
                <h2>How Well Are You Feeling Supported?</h2>
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
                    onClick={this.handleSupportSubmit}
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

export default connect(mapStateToProps)(Support)