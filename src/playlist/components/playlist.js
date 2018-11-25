import React from 'react';
import Media from './media';
import './playlist.css';
import PropTypes from 'prop-types';


function Playlist(props) {
  const { playlist } = props;
  return (
    <div className="Playlist">
      {playlist.map((item) => {
        return <Media key={item.id}
          {...item} />
      })}
    </div>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired
};

export default Playlist;