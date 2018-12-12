import React from 'react';
import MediaContainer from '../containers/media';
import './playlist.css';
import PropTypes from 'prop-types';


function Playlist(props) {
  const { playlist } = props;
  return (
    <div className="Playlist">
      {playlist.map((mediaId) => {
        return <MediaContainer key={mediaId}
          openModal={props.handleOpenModal}
          id={mediaId} />
      })}
    </div>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired
};

export default Playlist;