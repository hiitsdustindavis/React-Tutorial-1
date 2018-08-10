/*
  ==========================
    General Notes
  ==========================
  ### WHAT IS REACT: ###
  React is a Javascript library that is used to produce HTML that is shown to a user in a web browser.
  We are writing individual components, AKA "views"
  Components: Nippits of code that produce HTML. So when you think "Component" or "View," think "Something that produces HTML"
  When we write react code we write mulitple different components and we nest components within each other to make really complex applications relatively simple
*/
/*
  ==========================
    Application Notes
  ==========================
  1. What will this component do?
     Create a component. This component should produce some HTML
*/

// Line below basically says go find React library from our Node Package installed in the folder called 'react'
// This makes the react library available in this file.
// 'React' is a variable representing the library
import React, { Component } from 'react';

// To actually render something to the DOM we don't use the React Library.
// We use the ReactDOM library instead
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

// Here we import the SearchBar const from the search_bar.js file
// When we include a file that we write ourselves we need to include a relative path for React to find it
// We don't need to include a file path when importing packages like React and ReactDOM because the are namespaced (there is only one package for each)
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// import APIKey from './config';


// "const" is an ES6 (ES2016) piece of syntax - It's declaring a variable, but this is the final unchanging value. App will always have the same value.
// const App = function() { -- We can use the "fat arrow" ES6 syntax to define a function. It seems that brevity is a possible theme of ES6? ¯\_(ツ)_/¯

class App extends Component {

// REFACTORED ABOVE to be class based component instead of a functional one so we can access State. Also class based components always need a render function within so we added that around the return() below.
// const App = () => {

constructor(props) {
  super(props);

  // When App is started the list of videos is an empty array. The instant that the component is rendered the YTSearch function kicks off a search and when the search is complete it will update the value this.state.videos with a new list of videos
  this.state = { videos: [] };

  // We are going to make a call to the Youtube API and we are going to spread that info all around our application. What we search for in the API needs to flow throughout all of our components.
  // Which compononent should actually be responsible for fetching that list of videos? The answer to this is in a React concept called "DOWNWARDS DATA FLOW" which means that the parent-most component should be responsible for fetching data. In this case index.js is the component heighest in the family tree of our app.
  // Apparently this is similar to jQuery's get() function wher the first argument is a configuration and the second argument is a call back function to return the response data?
  // In the this.setState functions we are creating an object where the key and the value are the same, "videos" When this is the case we can use some ES6 syntax and change { videos: videos } to just { videos }
  // We are also using another ES6 syntax in changing the function keyword to the "fat arrow" syntax. "function(videos)" becomes "(videos) =>"
  YTSearch({key: youtubeAPI_key, term: 'satisfying'}, (videos) => {
    this.setState({ videos });
  })
}

// The "HTML" below is actually JSX which is a subset, or dialect of Javascript. It looks like HTML, but really behind the scenes it is just Javascript. JSX cannot be read by the browser. It represents the HTML that will be transpiled by Webpack and Babel before being compiled into a single JS file for the browser.
// When we write <div>Hi!</div> in JSX React calls createElement for us. Specifically it produces:
  //  "React.createElement("div", null, "Hi!");"
// return <div>Hi!</div>;
// We can pass properties from App to the VideoList Component by defining a property on the JSX tag
// Passing data like this is referred to as "Passing Props" In this case we are passing prop "videos" to VideoList. Anytime the App re-renders VideoList will get the new list of videos because we use "this.setState()" in the YTSearch function.
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

/*
  2. Take this component's generated HTML and  put it into the DOM
*/
// - Learning Troubleshooting
//  -- Attempt 1
    // React.render(App);
    // Result: "React is not defined" WE CANT USE React.render(); to render to the DOM

    // We added the React import statment above which produced other errors
    // After adding the React import statements above we get and error that says "Instead of passing a component class, make sure  to instantiate it by passing it to React. createElement."
      // const App = function(){ return <div>Hi!</div>; } is actually a class. Think of it as a factory that produces instances that actually get rendered to the DOM. We must instantiate our compononents before we try to render them to the DOM
    // When we write JSX and we put a component name like "div" in JSX as "<div></div>" the component name is actually a Component Class but using it inside of JSX it becomes a component instance.

    // ReactDOM.render(App);
    // Result: "React is not defined"

    // By passing ReactDOM.render() "<App />" as an argument we are passing an instance of our component class App
    // "<App />" is the short-hand self-closed version of "<App></App>"
    // ReactDOM.render(<App />);
    // This is almost right but you will get a console error of "Target container is not a DOM element"

    // As you can tell from the error message above App does not know where to render. We need to tell React which element to render the component within. Often the Root Node of the application will be a div with the class '.container'
    ReactDOM.render(<App />, document.querySelector('.container'));
