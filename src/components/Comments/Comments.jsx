import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import Review from '../Review/Review.jsx';

export class Comments extends Component {
    
    state = {
        comments: ''
    }
    //handle change for comments input
    handleChangeFor = property => event => {
        this.setState({
            [property]: event.target.value
        })
    } //end handleChangeFor


    // handle submit. prevents reload of page logs click and comments value, dispatches state to redux.
    // moves to next page in feedback loop
    handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked. In handleFeelingSubmit with value of: ', this.state.comments);
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state, name: 'comments' });
        this.props.history.push('/review')
    } //end handleFeelingSubmit
    
    
    
    
    render() {
        return (
            <div>
                <h2>Any Comments You Want To Leave?</h2>
                <br />
                <h5>Comments?</h5>
                <form onSubmit={this.handleCommentsSubmit}>
                    <input type="text" placeholder="Comments" onChange={this.handleChangeFor('comments')}></input>
                    <Button type="submit" variant="contained" color="primary">Back To Feelings</Button>
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

export default connect(mapStateToProps)(Comments)