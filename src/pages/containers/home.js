import React, { Component } from "react";
import Categories from '../../categories/components/categories';
import Modal from '../../widgets/components/modal';
import ModalContainer from '../../widgets/containers/modal';
import HomeLayout from "../components/home-layout";
import Related from '../components/related';
import HandleError from '../../errors/containers/handle-error';

class Home extends Component {

  state = {
    modalVisible: false
  }

  handleCloseClick = () => {
    this.setState({
      modalVisible: false
    })
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}></Categories>
          {this.state.modalVisible &&
            <ModalContainer>
              <Modal handleCloseClick={this.handleCloseClick}>
                <h1>hi</h1>
              </Modal>
            </ModalContainer>}
        </HomeLayout>
      </HandleError>
    );
  }

}

export default Home;