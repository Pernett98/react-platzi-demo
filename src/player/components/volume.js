import React from 'react';
import './volume.css';
import VolumeIcon from '../../icons/components/volume';

export default function Volume(props) {
  return (
    <button className="Volume" onClick={props.handleMute}>
      <div>
        <VolumeIcon color="white" size={25} ></VolumeIcon>
      </div>
      <div className="Volume-range">
        <input type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}></input>
      </div>
    </button>
  )
}