import React from 'react';
// import './Member3.css';
import { MediaComp } from '../../Components'
import { placeholder } from '../../Assets'
import { LoremIpsum } from '../../constants'

function Member3() {
  return (
    <div className="Member3">
      <MediaComp
        link="Member3" 
        imgSrc={ placeholder } 
        title="Member 3" 
        body={ LoremIpsum } 
      />
    </div>
  );
}

export default Member3;