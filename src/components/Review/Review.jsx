import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Tooltip } from '@material-ui/core';
import { withRouter } from 'react-router';

export class Review extends Component {


// on click of submit, go to success page
    submitFeedback = () => {
        console.log('in submitFeedback');
        this.props.history.push('/success')
    }

    
    
    render() {
        console.log('looking FOR ME:', this.props.reduxState.feedbackReducer.comments);
        console.log('support stuff you asked for: ', this.props.reduxState.feedbackReducer.support.support );
        let submitButton;

        if (
            this.props.reduxState.feedbackReducer.feelings.feelings > 0
            && this.props.reduxState.feedbackReducer.feelings.feelings <= 5
            && this.props.reduxState.feedbackReducer.understanding.understanding > 0
            && this.props.reduxState.feedbackReducer.understanding.understanding <= 5
            && this.props.reduxState.feedbackReducer.support.support > 0
            && this.props.reduxState.feedbackReducer.support.support <= 5
            && this.props.reduxState.feedbackReducer.comments.comments !== ''
        ) {
            submitButton = <Button onClick={this.submitFeedback} variant="contained" color="primary">SUBMIT</Button>
        } else {
            submitButton = <Tooltip title="Please make sure all sections are complete before submitting!" placement="bottom">
                <span><Button variant="contained" color="primary"
                    disabled >Incomplete</Button></span>
                </Tooltip>
        }

        


        return (

            <div>
                <ul>
                    <li>Feelings: {this.props.reduxState.feedbackReducer.feelings.feelings} </li> 
                    <li>Understanding: {this.props.reduxState.feedbackReducer.understanding.understanding}  </li>
                    <li>Support: {this.props.reduxState.feedbackReducer.support.support}</li>
                    <li>Comments: {this.props.reduxState.feedbackReducer.comments.comments}</li>
                </ul>
                {submitButton}
                
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