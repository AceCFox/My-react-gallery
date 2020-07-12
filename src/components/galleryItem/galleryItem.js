import React, { Component } from 'react';
import './galleryItem.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


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
                    <br/>
                </div>
        }//end conditional

      return (
        <div className='galleryItem'>
            { photo }
            <div className = "desc">
            <IconButton color="secondary" aria-label="like" onClick = {this.handleLike}>
            <FavoriteIcon  />
            </IconButton> 
            <IconButton aria-label="delete" onClick = {this.handleDeleteClick} >
             <DeleteIcon />
                </IconButton>
                <p>Loved {this.props.thisItem.likes} times</p>
            </div>
        </div>
        
      );
    }
  }
  
  export default GalleryItem;
  