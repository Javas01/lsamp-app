import React from 'react';
// import './Member4.css';
import { MediaComp } from '../../Components'
import { placeholder } from '../../Assets'
import { LoremIpsum } from '../../constants'

function Member4() {
  return (
    <div className="Member4">
      <MediaComp
        link="Member4" 
        imgSrc={ placeholder } 
        title="Member 4" 
        body={ LoremIpsum } 
      />
    </div>
  );
}

export default Member4;