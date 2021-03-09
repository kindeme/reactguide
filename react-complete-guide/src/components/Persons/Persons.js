import React from "react";

import Person from "./Person/Person";

const persons = (props) => {
  console.log("[Persons.js] rendering...");
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
};

export default persons;

// import Teact from "react";
// import Person from "./Person/Person";

// const persons = (props) =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         key={person.id}
//         age={person.age}
//         changed={(event) => props.changed(event, person.id)}
//       />
//     );
//   });
// export default persons;
