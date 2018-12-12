import React from 'react';
import './video-player-layout.css';

export default function VideoPlayerLayout(props) {
  return (
    <div className="VideoPlayer" ref={props.setRef}>
      {props.children}
    </div>
  );
}
