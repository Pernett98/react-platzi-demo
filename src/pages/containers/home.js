import React, { Component } from "react";
import { connect } from 'react-redux';
import { List as list } from 'immutable';

import Categories from '../../categories/components/categories';
import Modal from '../../widgets/components/modal';
import ModalContainer from '../../widgets/containers/modal';
import HomeLayout from "../components/home-layout";
import Related from '../components/related';
import HandleError from '../../errors/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';

class Home extends Component {

  state = {
    modalVisible: false,
    media: {
      title: '',
      src: ''
    }
  }

  handleCloseClick = () => {
    this.setState({
      modalVisible: false
    })
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}></Categories>
          {this.state.modalVisible &&
            <ModalContainer>
              <Modal handleCloseClick={this.handleCloseClick}>
                <VideoPlayer autoPlay
                  title={this.state.media.title}
                  src={this.state.media.src}></VideoPlayer>
              </Modal>
            </ModalContainer>}
        </HomeLayout>
      </HandleError>
    );
  }

}

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map((categoryId) => {
    return state.getIn(['data', 'entities', 'category', categoryId]);
  });

  const search = state.getIn(['data', 'search']);
  let searchResult = list();

  if (search) {
    const mediaList = state.getIn(['data', 'entities', 'media']);
    searchResult = mediaList.filter((item) => {
      return compareInsensitive(item.get('author'), search) || compareInsensitive(item.get('title'), search)
    }).toList();
  }

  return {
    categories,
    search: searchResult
  }
}


function compareInsensitive(text, criteria) {
  const regexp = new RegExp(`${criteria}`, 'i');
  return regexp.test(text);
}

export default connect(mapStateToProps)(Home);