import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Support extends Component {
    render() {
        return <p>TEST3</p>
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Support)