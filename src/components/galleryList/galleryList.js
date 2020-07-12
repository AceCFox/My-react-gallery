import React, { Component } from 'react';
import GalleryItem from '../galleryItem/galleryItem.js';
import  './galleryList.css';
import Grid from '@material-ui/core/Grid';

class GalleryList extends Component {


    render() {
      return (
        <Grid
        container
        direction="row-reverse"
        justify="space-evenly"
        alignItems="flex-start"
        id = "rainbow"
      >
      {/*map through gallery array to iterate a new Gallery Item component for each one,
            pass props likeItem and deleteItem function from app.js to GalleryItem, so each iteration can call these*/}
            { this.props.gallery.map( ( item, index )=><GalleryItem 
            thisItem={ item } key={ index } 
            likeItem = {this.props.likeItem}
            deleteItem = {this.props.deleteItem}/>)}
        </Grid>
      );
    }
  }
  
  export default GalleryList;
  