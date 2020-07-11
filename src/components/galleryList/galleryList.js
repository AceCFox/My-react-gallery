import React, { Component } from 'react';
import GalleryItem from '../galleryItem/galleryItem.js'

class GalleryList extends Component {
    render() {
      return (
        <div className="galleryList" >
            { this.props.gallery.map( ( item, index )=><GalleryItem 
            thisItem={ item } key={ index } getGallery = {this.props.getGallery}/>)}
        </div>
      );
    }
  }
  
  export default GalleryList;
  