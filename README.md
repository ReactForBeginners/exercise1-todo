# Todo app

This exercise will teach you how to create a simple Todo app using React, like [this one.](http://reactforbeginners.github.io/exercise1-todo/) You'll learn about components, state, props and also how to change the state based on user input.

To get started, clone this repo. We've linked to the React CDN for you in the HTML file, plus the JSX transformer. Your React components ought to be added in main.js.

## Running the app  

Simply open the index.html file in the browser to run the app. We're coding everything in that file, so there's no need to run a server.


## Break the UI into components

Facebook provides a good tutorial on how to break your UI into components in the official React [docs.](http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)  

It doesn't matter how you do it; in paint, photoshop, on paper or on a napkin. But make sure you've decided on a component structure before you start coding.

![image](https://github.com/ReactForBeginners/exercise1-todo/blob/gh-pages/todo.png?raw=true)

## Building a static version

Head over to the *main.js* file and start coding your components, withut worrying about user input and state changes. We've added the root component for you, and called React.render(), which renders this component into the DOM in the specified container.   

We've also hard coded the todo items into a variable named *TODOS*, and passed it to the TodoApp component as a props, so that you have some data to populate your static app with.

When you code a dynamic version, you'll discard this props variable and rather place your todo items in a state. 

	var TODOS = ["buy food", "make food", "eat food"];

	var TodoApp = React.createClass({
		render: function(){
			return(<div>{this.props.todos}</div>);
		},
	});

	React.render(<TodoApp todos={TODOS} />, document.getElementById('content'));


## Identifying the state

Now, you'll need to figure out what the app's state will consist of, and where it should live. See the React docs [explanation](https://facebook.github.io/react/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) for more info on how to do this. Outtake:  

*To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don't Repeat Yourself. Figure out what the absolute minimal representation of the state of your application needs to be and compute everything else you need on-demand.*   

## Fetching user input

We recommend that you use [controlled components](https://facebook.github.io/react/docs/forms.html#controlled-components) when working with the input field, and setting the state with the [onChange](https://facebook.github.io/react/docs/forms.html#interactive-props) event.

Alternatively you can use *refs* and *findDOMNode*. However, this techinque will be covered in exercise 2, so use controlled components in order to learn as much as possible.

## Stretch goals:

If you finish up before the deadline, use the remaining time to add extra features to the app.

* **Multiple lists**  
The user clicks *New list*, and a new list appears on the page, which he/her can add and delete items on.  

* **Edit existing items**  
The user clicks on an item, enabling it to be modified. 