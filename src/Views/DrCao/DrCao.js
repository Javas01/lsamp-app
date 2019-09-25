import React from 'react';
// import './DrCao.css';
import { MediaComp } from '../../Components'
import { Cao } from '../../Assets'

function DrCao() {
  const caoBody = <div>
    Associate Professor of Computer Science <br />
    Henderson Hall Room 150A <br />
    (937) 376-6624  •  Fax: (937) 376-6384 <br />
    dcao@centralstate.edu <br />
    Education: <br />
    PhD in Computer Science, West Virginia University, 2013 <br />
    Interests: <br />
    Computer Vision, Advanced Biometrics, Pattern Recognition and Machine Learning. 
  </div>;
  return (
    <div className="DrCao">
      <MediaComp
        link="Cao" 
        imgSrc={Cao} 
        title="Dr. Cao" 
        body={caoBody} 
      />
    </div>
  );
}

export default DrCao;