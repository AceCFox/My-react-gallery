import React, { Component } from 'react';
import './galleryItem.css'

class GalleryItem extends Component {

    state = {
        clicked: true,
    }//end state

    handleLike = (event) => {
        console.log('you liked photo #', this.props.thisItem.id );
    }//end handleLike

    handleCLick = (event) => {
        console.log('in handleClick');
        this.setState({
            clicked:!this.state.clicked
        })//end setState
    }//end handleClick


    render() {
        let photo;
        if (this.state.clicked){
            photo = 
            <img src={this.props.thisItem.path} alt = {this.props.thisItem.description}
            onClick = {this.handleCLick}/>
        }else{
            photo = <h3 onClick = {this.handleCLick}>{this.props.thisItem.description}</h3>;
        }

      return (
        <div className='galleryItem'>
            
        {photo}
        <div className = "desc">
            <button onClick = {this.handleLike} >:
            
            like this photo</button>
             <p>Likes: {this.props.thisItem.likes}</p>
        </div>
        </div>
        
      );
    }
  }
  
  export default GalleryItem;
  