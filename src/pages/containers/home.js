import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List as list } from 'immutable';

import Categories from '../../categories/components/categories';
import Modal from '../../widgets/components/modal';
import ModalContainer from '../../widgets/containers/modal';
import HomeLayout from "../components/home-layout";
import Related from '../components/related';
import HandleError from '../../errors/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';
import * as actions from '../../actions/index';

class Home extends Component {

  handleCloseClick = () => {
    this.props.actions.closeModal()
  }

  handleOpenModal = (mediaId) => {
    this.props.actions.openModal(mediaId)
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
          ></Categories>
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal handleCloseClick={this.handleCloseClick}>
                <VideoPlayer 
                  autoPlay
                  mediaId={this.props.modal.get('mediaId')}
                ></VideoPlayer>
              </Modal>
            </ModalContainer>
          }
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
    search: searchResult,
    modal: state.get('modal'),
    isLoading: state.getIn(['isLoading', 'active'])
  }
}


function compareInsensitive(text, criteria) {
  const regexp = new RegExp(`${criteria}`, 'i');
  return regexp.test(text);
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);