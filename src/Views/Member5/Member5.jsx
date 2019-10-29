import React from 'react';
// import './Jawwaad.css';
import { MediaComp } from '../../Components'
import { Jawwaad as jawwaad} from '../../Assets'
import { LoremIpsum } from '../../constants'

function Jawwaad() {
  return (
    <div className="Jawwaad">
      <MediaComp
        link="Jawwaad" 
        imgSrc={ jawwaad } 
        title="Jawwaad" 
        body={ LoremIpsum } 
      />
    </div>
  );
}

export default Jawwaad;