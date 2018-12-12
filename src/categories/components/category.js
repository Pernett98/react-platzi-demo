import React from "react";
import PropTypes from 'prop-types';

import './category.css';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist playlist={props.playlist} handleOpenModal={props.handleOpenModal} ></Playlist>
    </div>
  );
}

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  playlist: PropTypes.object,
};

Category.propTypes = propTypes;

export default Category;