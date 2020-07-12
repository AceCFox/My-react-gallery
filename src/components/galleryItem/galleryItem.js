import React, { Component } from 'react';
import './galleryItem.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';


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
            />
        } else {
            photo = 
                 <div className = "description">
                    <h3 >{this.props.thisItem.description}</h3>
                    <br/>
                </div>
        }//end conditional

        //conditionally set loved statement to unliked/singular/plural messages
        let loved;
        if (this.props.thisItem.likes === 0 ){
            loved = <p>Be the first to send some love</p>;
        } else if (this.props.thisItem.likes === 1 ){
            loved = <p>Loved {this.props.thisItem.likes} time</p>;
        } else {
            loved = <p>Loved {this.props.thisItem.likes} times</p>;
        }//end conditional

      return (
        <Card className='galleryItem'>
            <CardActionArea onClick = {this.handleCLick}>
                {/*display either photo or description depedning on state
                handleClick function toggles state when this photo/description is clicked*/}
                {photo}
            </CardActionArea>
            <CardContent>
                {/*icon buttons below are sourced from MUI and will run the delete and like calls
                passed as props from grandparent app.js*/}
                <IconButton color="secondary" aria-label="like" onClick = {this.handleLike}>
                <FavoriteIcon  />
                </IconButton> 
                <IconButton aria-label="delete" onClick = {this.handleDeleteClick} >
                <DeleteIcon />
                </IconButton>
                {/*display loved message, conditionally dependant on number of likes*/}
                {loved}
            </CardContent>
        </Card>
      );
    }
  }
  
  export default GalleryItem;
  