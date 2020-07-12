import React, { Component } from 'react';
import GalleryItem from '../galleryItem/galleryItem.js';
import  './galleryList.css';

class GalleryList extends Component {


    render() {
      return (
        <div className="galleryList"  id ="rainbow">
            { this.props.gallery.map( ( item, index )=><GalleryItem 
            thisItem={ item } key={ index } 
            likeItem = {this.props.likeItem}
            deleteItem = {this.props.deleteItem}/>)}
        </div>
      );
    }
  }
  
  export default GalleryList;
  