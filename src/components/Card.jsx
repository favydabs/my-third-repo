import React from "react";
import Avater from './Avater';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avater img={props.img}/>
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
