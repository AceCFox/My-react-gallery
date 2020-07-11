import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../galleryList/galleryList';
import Form from '../form/form'



class App extends Component {

  state = {
    gallery: [],
  }

  componentDidMount() {
    //runs getGallery so we can load our page with images!
    this.getGallery();
  }//end did mount
  
  getGallery = () =>{
  console.log('in getGallery');
  axios({
    method: 'GET' ,
    url: '/gallery',
  }).then((response) => {
      this.setState({
        gallery: response.data,
      });
      console.log('got gallery list from server -', response.data.length, "photos");
  }).catch((error) => {
      alert('error on GET');
      console.log(error);
  }) //end axios GET
  }//end getGallery

  likeItem = ( id ) => {
    axios({
      method:'PUT',
      url: '/gallery/like/' + id,
    }).then( (response) =>{
      console.log('back from PUT with response:', response.statusText);
      this.getGallery();
    }).catch( ( error )=>{
      console.log('error on PUT:', error);
      alert('error on PUT!');
    } )//end axios PUT call
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <Form getGallery ={this.getGallery}/>
        <br/>
        <GalleryList gallery = {this.state.gallery} 
        likeItem = {this.likeItem}/>
      </div>
    );
  }
}

export default App;
