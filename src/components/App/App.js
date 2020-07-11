import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../galleryList/galleryList';



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
      console.log('got gallery list from server', response.data);
  }).catch((error) => {
      alert('error on GET');
      console.log(error);
  }) //end axios GET
  }//end getGallery



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery = {this.state.gallery} />
      </div>
    );
  }
}

export default App;
