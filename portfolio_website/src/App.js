import React from 'react';
import logo from './logo.svg';
import GalleryGrid from './components/GalleryGrid/GalleryGrid.js';
import {Animated} from "react-animated-css";
import './App.css';

function App() {
  return (
    <div>
      <div className="homepage">
        <h1>Tian-Yuan Zhao</h1>
        <div className='homepage_button'>button</div>
        <Animated animationIn="bounceInLeft" animationInDuration='1500' animationOut="fadeOut" isVisible={true}>
          <p>
            hello world ;)
          </p>
        </Animated>
      </div>
      <GalleryGrid />
    </div>
  );
}

export default App;
