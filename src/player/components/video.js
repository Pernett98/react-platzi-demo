import React, { Component } from 'react';
import './video.css';
import { throws } from 'assert';

class Video extends Component {

  setRef = element => {
    this.video = element;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  togglePlay() {
    if (this.props.pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  render() {
    const { 
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSought,
      handleReady
    } = this.props;
    return (
      <div className="Video">
        <video autoPlay={this.props.autoPlay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSought}
          onCanPlay={handleReady}></video>
      </div>
    )
  }
}

export default Video;