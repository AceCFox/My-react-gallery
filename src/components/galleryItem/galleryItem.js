import React, { Component } from 'react';
import axios from 'axios';
import './galleryItem.css'

class GalleryItem extends Component {

    state = {
        clicked: true,
    }//end state

    handleLike = (event) => {
        event.preventDefault()
        let id = this.props.thisItem.id;
        //console.log(id)
        this.props.likeItem (id);
        
    }//end handleLike

    handleCLick = (event) => {
        console.log('in handleClick');
        this.setState({
            clicked:!this.state.clicked
        })//end setState
    }//end handleClick


    render() {
        //conditionally set variable to render either photo or description
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
            <button onClick = {this.handleLike}> 
            like this photo</button>
             <p>Likes: {this.props.thisItem.likes}</p>
        </div>
        </div>
        
      );
    }
  }
  
  export default GalleryItem;
  