import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";
import "./Person/Person.css";

const StyleButton = styled.button`
      background-color: green;
      font: inherit;
      color:white
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover: {
        background-color: lightgreen;
        color: black;`;

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    //this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: "Manu", age: 29 },
        { id: 3, name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id == id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = (personIndex) => {
    // always create a copy ofthe state array
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer",
      boxShadow: "0 1px 3px black",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "green";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes =['red'];
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red','bold]
    }
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyleButton onClick={this.togglePersonHandler}>
          Toggle Person
        </StyleButton>
        {persons}
      </div>
    );
  }
}

export default App;
