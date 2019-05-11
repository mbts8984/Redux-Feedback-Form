import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';

export class Review extends Component {
    
    state = {
        allFilled: false
    }

    //if the opposite of the feeback is true, move to true
    checkAllFilled = () => {
        if (this.props.reduxState.feedbackReducer.feelings.feelings >= 1 && this.props.reduxState.feedbackReducer.feelings.feelings >= 5 &&
            this.props.reduxState.feedbackReducer.understanding.understanding &&  
            this.props.reduxState.feedbackReducer.support.support && 
            this.props.reduxState.feedbackReducer.comments.comments) 
        
            {
            this.setState({
               allFilled: true
           })
       }
       else {
           this.setState({
               allFilled: true
           })
       }
   };

// on click of submit, go to success page
    submitFeedback = () => {
        console.log('in submitFeedback');
        this.props.history.push('/success')
    }
    
    componentDidMount(){
        this.checkAllFilled();
    }
    
    render() {
        console.log(this.props.reduxState);
    
        return (
            <div>
                <ul>
                    <li>Feelings: {this.props.reduxState.feedbackReducer.feelings.feelings} </li> 
                    <li>Understanding: {this.props.reduxState.feedbackReducer.understanding.understanding}  </li>
                    <li>Support: {this.props.reduxState.feedbackReducer.support.support}</li>
                    <li>Comments: {this.props.reduxState.feedbackReducer.comments.comments}</li>
                </ul>
                <Button onClick={this.submitFeedback} variant="contained" color="primary">Submit </Button>
                <Button disabled={!this.state.allFilled} onClick={this.submitFeedback}>Real Submit</Button>
            </div>
        )
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(mapStateToProps)(Review));