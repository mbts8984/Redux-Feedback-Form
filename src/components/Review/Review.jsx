import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Review extends Component {
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
            </div>
        )
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review)