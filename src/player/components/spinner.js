import React from 'react';
import './spinner.css';

export default function Spinner(props) {
  if (!props.active) return null;
  return (
    <div className="Spinner">
      <span>Loading ...</span>
    </div>
  )
}