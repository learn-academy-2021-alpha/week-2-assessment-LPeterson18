# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method super()?

  Your answer:
  super() is necessary in react when calling on classes.  It allows old constructors to be inherited.

  Researched answer:
  super() refers to the parent class constructor.  In order to use "this."" in a constructor, you must first call super().


2. What is a virtual DOM?

  Your answer:
  A virtual DOM is a DOM that checks the web page for changes from the user and then sends them to the main DOM, in order to keep from having to refresh the page.
  Researched answer:
  The virtual DOM is an ideal representation of the user interface that is kept in memory and synced with the actual DOM by a library.  It makes sure the DOM matches what the user inputs to the page.  The virtual DOM contains all the properties of the actual DOM without the actual DOM's power to change what's on screen.  Editing the virtual DOM is like editing the blueprints, instead of rearranging the actual house.


3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
  When creating a stateless class component in React, beyond the basic boilerplate code there are a few necessary elements.  You will need to import the component in the main App.js page.  You will need to establish the JSX section using tick marks like so: <> </>. Inside of the tick marks you can create a paragraph section using <p> </p> and inside put the text Hello World.  Then in the App.js file you can call on the component using { this.component } within the main body.

  Researched answer:
  This is the most basic form of a Hello World class in react.

  import React from 'react'
    class HelloWorld extends React.Component {
      render() {
        return <h1>Hello, World!</h1>
      }
    }
  export default HelloWorld

  The necessary elements include: importing React, creating a new class and extending it to the React.Component class, the render method, returning Hello, World! within heading ticks within the render method, and finally exporting the class.

4. What is JSX?

  Your answer:
  JSX is a hybrid language between JavaScript and HTML that allows you to use both within react.  There are unique differences between JSX and both JavaScript and HTML.

  Researched answer:
  JSX is a syntax extension to JavaScript. It has some of the appearances and uses of HTML, while also having the full functionality of JavaScript.  It is syntactic sugar that allows preprocessors to transform HTML-like text into JavaScript objects that can be parsed by a JavaScript engine.



5. What is state in React?

  Your answer:
  state is sort of an on/off value of components in react. A component can have state or not.

  Researched answer:
  state is a plain JavaScript object that is built-in to components. The state object allows the programmer to store property values that belong to the component. When the state object changes, the component re-renders.


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
  Hoisting in JavaScript is used in regards to testing.  Instead of simply reading the code straight through, hoisting reads the tests, recognizes that they are there, reads the rest of the program for the functions and code being tested, and then runs the tests last.

  Researched answer:
  Hoisting is JavaScript's behavior of moving all declarations to the top of the current scope.  This allows for a variable to be declared after it has been used.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
  Each component in React has a lifecycle that can be observed and manipulated.  There are three main phases including mounting, updating, and unmounting. Mounting consists of four built-in methods including constructor(), getDerivedStateFromProps(), render(), and componentDidMount(). updating consists of five built-in methods including getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate().  Unmounting consists of one built-in method componentWillUnmount().
- React props
  React props JavaScript objects like state, but instead of being built-in to the component they are passed into components externally.  They are passed to components through HTML attributes.
- event.preventDefault()
  Stops the default action of an element from happening.
- DOM events
  Actions that occur as a result of the user action or as a result of state change of the elements of the DOM tree.
- MVC
  MVC stands for model-view-controller and is a software design pattern used for creating user interfaces. Program logic is divided into three interconnected elements model, view, and controller.  The user uses the controller, the controller manipulates the model, the model updates the view, and the view is seen by the user.
