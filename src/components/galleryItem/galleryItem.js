import React, { Component } from 'react';
import './galleryItem.css'

class GalleryItem extends Component {

    handleLike = (event) => {
        console.log('you liked photo #', this.props.thisItem.id );
    }


    render() {
      return (
        <div className='galleryItem'>
            
        <img src={this.props.thisItem.path} alt = {this.props.thisItem.description}/>
        <div className = "desc">
            <button onClick = {this.handleLike} >like this photo</button>
             <p>Likes: {this.props.thisItem.likes}</p>
        </div>
        </div>
        
      );
    }
  }
  
  export default GalleryItem;
  