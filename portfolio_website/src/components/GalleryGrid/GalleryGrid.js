import React, {Component} from 'react';
import etherisc from '../../images/etherisc.png';
import emerge from '../../images/emerge.png';
import hivewire from '../../images/hivewire.png';
import dccper from '../../images/dccper.png';

import './GalleryGrid.css';

const GalleryGrid = () => {
  return (
<div>
  <div className='gallery'>
    <div className='item-a'><img src={etherisc} /></div>
    <div className='item-b'><img src={emerge} /></div>
    <div className='item-c'><img src={hivewire} /></div>

    <div className='item-d'><img src={dccper} /></div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
  </div>
</div>
  );
};

export default GalleryGrid;
