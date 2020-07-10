import React, { Component } from 'react';
import GalleryItem from '../galleryItem/galleryItem.js'

class GalleryList extends Component {
    render() {
      return (
        <div className="galleryList">
            <GalleryItem/>
        </div>
      );
    }
  }
  
  export default GalleryList;
  