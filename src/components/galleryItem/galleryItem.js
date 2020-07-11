import React, { Component } from 'react';
//import axios from 'axios';
import './galleryItem.css'
 
class GalleryItem extends Component {

    state = {
        clicked: true,
    }//end state

    handleLike = (event) => {
        event.preventDefault()
        const id = this.props.thisItem.id;
        //console.log(id)
        //likeItems is passed from app as props, and contains our PUT call
        this.props.likeItem (id);
        
    }//end handleLike

    handleCLick = (event) => {
      //  console.log('in handleClick');
        this.setState({
            clicked:!this.state.clicked
        })//end setState
    }//end handleClick

    handleDeleteClick = (event) =>{
        const id = this.props.thisItem.id;
        console.log('clicked to delete #', id);
        //deleteItem is passed from app as props and contains DELETE call
        this.props.deleteItem(id);
        
    }//end handleDeleteClick


    render() {
        //conditionally set variable to render either photo or description
        let photo;
        if (this.state.clicked){
            photo = 
            <img src={this.props.thisItem.path} alt = {this.props.thisItem.description}
            onClick = {this.handleCLick}/>
        } else {
            photo = 
                 <div className = "description">
                    <h3 onClick = {this.handleCLick}>{this.props.thisItem.description}</h3>
                    <button onClick = {this.handleDeleteClick}>delete this photo</button>
                    <br/>
                </div>
        }//end conditional

      return (
        <div className='galleryItem'>
            { photo }
            <div className = "desc">
                <button onClick = {this.handleLike}> 
                Like it</button>
                <p>Likes: {this.props.thisItem.likes}</p>
            </div>
        </div>
        
      );
    }
  }
  
  export default GalleryItem;
  