import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

export class Success extends Component {

    restartFeedback = (event) => {
        console.log('in restartFeedback');
        this.props.history.push('/')
    } 




    render() {
        return (
            <div>
                <h2>Thank You For Your Thoughtful Feedback!</h2>

                <Button onClick={this.restartFeedback}variant="contained" color="primary">Leave New Feedback</Button>

            </div>
        )

    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Success)