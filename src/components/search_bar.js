import React, { Component } from 'react';

// The following function being stored in SearchBar is what's known as a Function Component in React. It's simple. It could even take in an argument and will return some JSX. For broader functionality we will use a Class Component.
// const SearchBar = () => {
//   return <input />;
// };

// The following is a Class Component refactoring of the Function Component above:
// 'class' === Create a new class
// 'SearchBar' === Name of new class
// 'extends React.Component' === Make all of the React.Component Class functionalities available to the SearchBar Class

// Every Class must have a render() function to return JSX to the DOM. Is render() a part of React.Component?

// Handling Events in React has two steps:
// 1. Declare Event Handler, which is a function/method that should he ran whenever the event occurs.
// 2. Pass the Event Handler to the element that we want to monitor for events.
// In this case we want to know whenever the input has its text changed.

// <input onChange={this.onInputChange}/> is using the standard HTML input change event and passing it our function onInputChange. In other words when a user types into the input it will emit a change event that will trigger our function.

// We will pass onInputChange one argument of 'event' which is standard Javascript event handling. Event is an object which carries very specific information about what changed. We can tap into (aka find its current value of) this object with dot notation.

// STATE!
// It is a plain Javascript Object that is used to record and react to user events
// Each class based component that we define has its own state object. Whenever the components state is changed it immediately re-renders and also forces all of its children to re-render as well.
// Before we ever use STATE inside of a class-based component we need to initialize the State Object. Function based components do not have state.

// Constructor!
// All Javascript Classes have a special function called "Constructor" The constructor function is the first and only one called automatically when a new instance of the class is created.
// The constructor function is reserved for doing some setup inside of our Class like initializing variables, state, etc.
// Each instance of a class-based compenent has it's own copy of state

// Controlled component has its value set by state instead of its value telling state what to be. Example is the input value telling state to update.

// We could write "class SearchBar extends React.Component" for our class based SearchBar Componen, but because we included the component call in our import call at the beginning of this file we can just write "class SearchBar extends Component"
class SearchBar extends Component {
  constructor(props) {
    super(props);
    //super() is allows us to call a parent method on the parent class. In this case the parent class is React.Component which has its own constructor function among many other functions.

    this.state = { term: '' };
    //Whenever we use state we initialize it by creating a new object and assigning it to "this.state" The object we pass will also contain properties that we want to record on the state. In this case we want to record the property "term"
    // Everywhere else inside our components we will use the method this.setState() instead of this.state = 'something'
  }

  render() {
    // return <input onChange={this.onInputChange}/>; REFACTOR below
    return (
      // So we pass the function this.setState and object that will set the term with the value of the input when the onChange event is triggered
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
      /* The value of the input is: {this.state.term}
      We use "this.state.term" to reference the input value. It's ok here, becase we are not modifying it.
      Also we wrap Javascript variables within JSX in {curly braces}.
      */
    );
  }

  // Code below was consolidated in the expression above
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
