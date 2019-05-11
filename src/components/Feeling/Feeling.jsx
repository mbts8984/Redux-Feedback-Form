import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Feeling extends Component {
  render(){
      return <p>TEST</p>
  }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling)