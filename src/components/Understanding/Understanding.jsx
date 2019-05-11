import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


export class Understanding extends Component {
   
    state = {
        understanding: 0
    }
   
    //handle change for understanding input
    handleChangeFor = (event) => {
        this.setState({
            understanding: event.target.value
        })
    } //end handleChangeFor

    // handle submit. prevents reload of page logs click and understanding value, dispatches state to redux.
    // moves to next page in feedback loop
    handleUnderstandingSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked. In handleUnderstandingSubmit with value of: ', this.state.understanding);
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state, name: 'understanding' });
        this.props.history.push('/supportIn')
    } //end handleFeelingSubmit

   
   
    render() {
        return (
            <div>
                <h2>How Well Are You Understanding The Content?</h2>
                <br />
                <h5>Understanding?</h5>
                <form onSubmit={this.handleUnderstandingSubmit}>
                    <input type="number" placeholder="1-5" onChange={this.handleChangeFor}></input>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Understanding)