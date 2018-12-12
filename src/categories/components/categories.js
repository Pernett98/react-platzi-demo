import React from "react";
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media'

function Categories(props) {
  return (
    <div className="Categories">
      <Search></Search>
      {
        props.search.map((item) => {
          return <Media
            key={item.get('id')}
            title={item.get('title')}
            author={item.get('author')}
            cover={item.get('cover')}
            type={item.get('type')} ></Media>
        })
      }
      {
        props.categories.map((item) => {
          return (<Category
            handleOpenModal={props.handleOpenModal}
            key={item.get('id')} 
            title={item.get('title')}
            description={item.get('description')}
            playlist={item.get('playlist')}>
          </Category>)
        })
      }
    </div>
  );
}

export default Categories;