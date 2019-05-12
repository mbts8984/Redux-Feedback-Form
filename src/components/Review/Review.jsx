import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Tooltip } from '@material-ui/core';
import { withRouter } from 'react-router';
import axios from 'axios';


export class Review extends Component {


// on click of submit, go to success page
    submitFeedback = () => {
        console.log('in submitFeedback');
        axios({
            method: 'POST',
            url: `/feedback`,
            data: this.props.reduxState.feedbackReducer
        }).then((response) => {
            console.log('in POST request with: ', response);
            this.props.history.push('/success')
        }).catch((error) => {
            console.log('error in POST request', error);
        })
    }

    
    
    render() {
        console.log('looking FOR ME:', this.props.reduxState.feedbackReducer.comments);
        console.log('support stuff you asked for: ', this.props.reduxState.feedbackReducer.support );
        console.log('feelings stuff you asked for: ', this.props.reduxState.feedbackReducer.feelings)
        
        let submitButton;

        if (
            this.props.reduxState.feedbackReducer.feelings > 0
            && this.props.reduxState.feedbackReducer.feelings <= 5
            && this.props.reduxState.feedbackReducer.understanding > 0
            && this.props.reduxState.feedbackReducer.understanding <= 5
            && this.props.reduxState.feedbackReducer.support > 0
            && this.props.reduxState.feedbackReducer.support <= 5
            && this.props.reduxState.feedbackReducer.comments !== ''
        ) {
            submitButton = <Button onClick={this.submitFeedback} variant="contained" color="primary">Submit My Feedback</Button>
        } else {
            submitButton = <Tooltip title="Please make sure all sections are complete before submitting!" placement="bottom">
                <span><Button variant="contained" color="primary"
                    disabled >Incomplete</Button></span>
                </Tooltip>
        }

        


        return (

            <div>
                <ul>
                    <li>Feelings: {this.props.reduxState.feedbackReducer.feelings} </li> 
                    <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}  </li>
                    <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
                    <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
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