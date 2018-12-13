import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Media from '../components/media';
import * as actions from '../../actions/index'

class MediaContainer extends Component {

  openModal = (mediaId) => {
    this.props.actions.openModal(mediaId)
  }

  render() {
    
    return <Media
      id={this.props.data.get('id')} 
      title={this.props.data.get('title')}
      author={this.props.data.get('author')}
      cover={this.props.data.get('cover')}
      type={this.props.data.get('type')}
      openModal={this.openModal}></Media>
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);