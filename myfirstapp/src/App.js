import React,{Component} from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons: [
      {ID: '01',name: 'Ghazan',age: 22},
      {ID: '02',name: 'Ali', age: 26},
      {ID: '03',name: 'Shah',age: 28},
      {ID:'04',name: 'Saad',age:27},
  ],
   showPerson: false
  }

   toggleHandler = () => {
     const doesShow = this.state.showPerson;
     this.setState({
       showPerson: !doesShow
     })
   }

   nameChangeHandler = (event,ID) => {
       const personIndex = this.state.persons.findIndex(p => {
         return p.ID == ID;
       });
       const person = {
         ...this.state.persons[personIndex]
       };
       
       person.name = event.target.value;

       const persons = [...this.state.persons];
       persons[personIndex] = person;

     this.setState({
      persons: persons});

   }

   deletePersonHandler = (personIndex) => {
       const persons = [...this.state.persons];
       persons.splice(personIndex,1);
       this.setState({persons: persons});
   }

  render(){
     let person = null;

     const style = {
     backgroundColor: 'green',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer',
     ':hover': {
       backgroundColor: 'white',
       color: 'black',
     }
     };

     if (this.state.showPerson){
      person = (
      <div>
        {this.state.persons.map((person,index) => {
          return <Person
           click={() => this.deletePersonHandler(index)}
           name={person.name}
           age={person.age}
           key={person.ID}
           change={(event) => this.nameChangeHandler(event,person.ID)}>
           </Person>
        })}
      </div>);

      style.backgroundColor = 'red';
     }

     
    const classes = [];
    if (this.state.persons.length <= 2)
    classes.push('red');
    if (this.state.persons.length <=1)
    classes.push('bold');

    return(
      <div className="App">
       <h1>This is App!</h1>
       <p className={classes.join(" ")}>And its working!</p>
       <button
        onClick={this.toggleHandler}
        style = {style}
        >Lets Switch</button>
      {person}
      </div>
    );
  }
}
export default App;
