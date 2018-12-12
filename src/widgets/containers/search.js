import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/search';


class SearchContainer extends Component {

  state = {
    value: ''
  }

  setInputRef = ref => {
    this.input = ref;
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('HI');
    console.log('👵📸', this.input.value);
    console.log(this)
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Search setRef={this.setInputRef}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleInputChange}
              value={this.state.value}></Search>
    )
  }

}

export default connect()(SearchContainer);