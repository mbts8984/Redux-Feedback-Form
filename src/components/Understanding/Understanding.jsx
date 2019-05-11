import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Understanding extends Component {
    render() {
        return <p>TEST2</p>
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Understanding)