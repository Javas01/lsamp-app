import React from 'react';
// import './Member2.css';
import { MediaComp } from '../../Components'
import { placeholder } from '../../Assets'
import { LoremIpsum } from '../../constants'

function Member2() {
  return (
    <div className="Member2">
      <MediaComp
        link="Member2" 
        imgSrc={ placeholder } 
        title="Member 2" 
        body={ LoremIpsum } 
      />
    </div>
  );
}

export default Member2;