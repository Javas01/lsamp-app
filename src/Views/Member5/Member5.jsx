import React from 'react';
// import './Member5.css';
import { MediaComp } from '../../Components'
import { placeholder } from '../../Assets'
import { LoremIpsum } from '../../constants'

function Member5() {
  return (
    <div className="Member5">
      <MediaComp
        link="Member5" 
        imgSrc={ placeholder } 
        title="Jawwaad" 
        body={ LoremIpsum } 
      />
    </div>
  );
}

export default Member5;