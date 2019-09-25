import React from 'react';
// import './Member4.css';
import { MediaComp } from '../../Components'
import { placeholder } from '../../Assets'

function Member4() {
  const LoremIpsum = <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
    sed do eiusmod tempor incididunt ut labore et dolore magna <br />
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
    ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
    Duis aute irure dolor in reprehenderit in voluptate velit <br /> 
    esse cillum dolore eu fugiat nulla pariatur. <br />
  </div>
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