import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {

  static propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'image'])
  }

  constructor (props) {
    super(props);
    this.state = {
      author: props.author,
      cover: props.cover,
      title: props.title
    }
  }

  render() {
    const { title, author, cover } = this.state;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image"
            src={cover}
            width={260} 
            height={160}></img>
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }

  handleClick = (event) => {
    console.log(event);
    console.log(this);
  }

}

export default Media;