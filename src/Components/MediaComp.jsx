import React from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MediaComp = (props) => (
  <Media style={{ paddingTop: 10, paddingBottom:10 }}>
    <img
      style={{borderRadius: '10%', paddingLeft: 10}}
      width={224}
      height={224}
      className="mr-3"
      src={props.imgSrc}
      alt="Profile Pic"
    />
    <Media.Body>
      <Link to={props.link}>
        <h5>{props.title}</h5>
      </Link>
      <p>
        {props.body}
      </p>
    </Media.Body>
  </Media>
)

export default MediaComp