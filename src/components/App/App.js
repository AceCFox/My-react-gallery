import React, { Component } from 'react';
import './App.css';
import GalleryList from '../galleryList/galleryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList/>
      </div>
    );
  }
}

export default App;
