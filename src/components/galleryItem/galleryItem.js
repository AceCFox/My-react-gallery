import React, { Component } from 'react';
import axios from 'axios';
import './galleryItem.css'

class GalleryItem extends Component {

    state = {
        clicked: true,
        likes: 0
    }//end state

    handleLike = (event) => {
        event.preventDefault()
        let id = this.props.thisItem.id;
        //console.log(id)

        axios.put('/gallery/like/' + id)
        .then( (response) =>{
            console.log('back from PUT with', response);
            this.setState({
                ...this.state.clicked,
                likes: this.state.likes+1,
            })

           // this.props.getGallery();
        }).catch( ( error )=>{
            console.log('error on PUT:', error);
            alert('error on PUT!');
        } )//end axios PUT call
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
             <p>Likes: {this.state.likes}</p>
        </div>
        </div>
        
      );
    }
  }
  
  export default GalleryItem;
  