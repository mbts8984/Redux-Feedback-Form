import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Review extends Component {
    render() {
        return <p>REVIEW HERE</p>
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review)