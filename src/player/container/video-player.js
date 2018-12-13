import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import TimeUtils from '../../utils/time-utils';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import * as Utils from '../../utils/utils'

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    durationFormatted: '00',
    currentTimeFormatted: '00',
    loading: false,
    volume: 1,
    lastVolume: 1
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: !this.props.autoPlay
    })
  }

  handleMetadata = event => {
    this.video = event.target;
    const durationFormatted = TimeUtils.formattedTime(this.video.duration)
    this.setState({
      duration: this.video.duration,
      durationFormatted
    })
  }

  handleTimeUpdate = event => {
    const currentTimeFormatted = TimeUtils.formattedTime(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime,
      currentTimeFormatted
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSought = event => {
    this.setState({
      loading: false
    })
  }

  handleReady = event => {

  }

  handleVolumeChange = event => {
    const volume = event.target.value;
    this.setState({
      volume,
      lastVolume: volume
    })
    this.video.volume = volume;
  }

  handleMute = event => {
    const newVolume = this.state.volume === 0 ? this.state.lastVolume : 0;
    this.setState({
      volume: newVolume
    })
    this.video.volume = newVolume;
  }

  handleFullScreen = event => {
    console.log('fulling')
    if (!Utils.isFullScreen()) {
      Utils.requestFullScreen(this.player);
    } else {
      Utils.exitFullScreen()
    }
  }

  setRef = element => {
    this.player = element;
  }

  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.media.get('title')}></Title>
        <Controls>
          <PlayPause pause={this.state.pause}
            handleClick={this.togglePlay}></PlayPause>
          <Timer duration={this.state.durationFormatted}
            currentTime={this.state.currentTimeFormatted}></Timer>
          <ProgressBar duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}></ProgressBar>
          <Volume handleVolumeChange={this.handleVolumeChange}
            handleMute={this.handleMute}></Volume>
          <FullScreen handleFullScreen={this.handleFullScreen}></FullScreen>
        </Controls>
        <Spinner active={this.state.loading}></Spinner>
        <Video src={this.props.media.get('src')}
          handleLoadedMetadata={this.handleMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSought={this.handleSought}
          handleReady={this.handleReady}
          pause={this.state.pause}
          autoPlay={this.props.autoPlay}></Video>
      </VideoPlayerLayout>)
  }
}

function mapStateToProps(state, props) {
  const { mediaId } = props;
  return {
    media: state.getIn(['data', 'entities', 'media', mediaId])
  }
}

export default connect(mapStateToProps)(VideoPlayer);