import React from "react";
import './category.css';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist playlist={props.playlist} ></Playlist>
    </div>
  );
}

export default Category;