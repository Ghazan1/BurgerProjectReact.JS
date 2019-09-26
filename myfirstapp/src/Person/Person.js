import React from 'react';
import Radium from 'radium';
import './Person.css'
const person = (props) => {

    return(
        <div className="Person">
        <p onClick={props.click}> I'm {props.name} and I'm {props.age} year old</p>
        <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
};

export default person;