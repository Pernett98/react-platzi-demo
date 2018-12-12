import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component {

  openModal(mediaId) {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId
      }
    })
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

export default connect(mapStateToProps)(MediaContainer);