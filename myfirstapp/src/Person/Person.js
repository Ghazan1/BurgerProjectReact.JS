import React from 'react';
<<<<<<< HEAD
import personclasses from './Person.module.css'
=======
import Radium from 'radium';
import './Person.css'
>>>>>>> 3de14a8a95bc7b4b115ea9faf523afaf9e9b9573
const person = (props) => {

    return(
        <div className={personclasses.Person}>
        <p onClick={props.click}> I'm {props.name} and I'm {props.age} year old</p>
        <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
};

export default person;