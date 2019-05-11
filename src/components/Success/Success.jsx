import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Success extends Component {
    render() {
        return <p>TEST5</p>
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Success)