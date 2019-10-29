import React from 'react';
import './Home.css';
import {MediaComp} from '../../Components'
import {Lsamp} from '../../Assets'

function Home() {
  const lsampBody = <div>
    The LSAMP program assists universities and colleges in their efforts to significantly increase the<br />
    numbers of students matriculating into and successfully completing degree programs in science, <br />
    technology, engineering and mathematics (STEM) disciplines to diversify the STEM workforce. <br />
    Particular emphasis is placed on transforming undergraduate STEM education through innovative, <br />
    evidence-based recruitment and retention strategies, and relevant educational experiences in <br />
    support of racial and ethnic groups historically underrepresented in STEM disciplines: <br />
    African Americans, Hispanic Americans, American Indians, Alaska Natives, Native Hawaiians, <br />
    and Native Pacific Islanders. These strategies facilitate the development of well-prepared <br />
    students highly-qualified and motivated to pursue graduate education or careers in STEM.
  </div>
  return (
    <div className="Home">
      <MediaComp 
        link="LSAMP"
        imgSrc={Lsamp} 
        title="LSAMP" 
        body={lsampBody}
      />
    </div>
  );
}

export default Home;