import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Button } from '@material-ui/core';
import Review from '../Review/Review.jsx';

export class Comments extends Component {
    
    state = {
        comments: '',
       // isFilled: false
    }
    //handle change for comments input
    handleChangeFor = property => event => {
        console.log('in handleChange in Comments');
        this.setState({
            comments: event.target.value
        })
        this.handleCommentsSubmit();
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
                    <input type="text" placeholder="Comments" onChange={this.handleChangeFor}></input>
                    {/* <Button type="submit" variant="contained" color="primary">Review Feedback</Button> */}
                
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