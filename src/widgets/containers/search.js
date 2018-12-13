import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/search';
import * as actions from '../../actions/index';

class SearchContainer extends Component {

  state = {
    value: ''
  }

  setInputRef = ref => {
    this.input = ref;
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.searchAsyncEntities(this.input.value)
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);