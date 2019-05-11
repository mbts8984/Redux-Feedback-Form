import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Comments extends Component {
    render() {
        return <p>TEST4</p>
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Comments)