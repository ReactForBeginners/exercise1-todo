# Todo app

This exercise will teach you how to create a simple Todo app using React, like [this one.](http://reactforbeginners.github.io/exercise1-todo/) You'll learn about components, state, props and also how to change the state based on user input.  

To get started, clone this repo. We've linked to the jQuery CDN for you in the HTML file. Your React components ought to be added in main.js.

## Running the app

With some browsers (Safari, Firefox) you can run the app by simply dragging *index.html* into the browser. If you're using Chrome, you'll most likely have to start a simple server. If so, head over to the directory with your Command Line Interface and type the following:

	python -m SimpleHTTPServer

## Running the app

With some browsers (e.g. Safari, Firefox) you can run the app by simply dragging *index.html* into the browser. If you're using Chrome, you'll most likely have to start a simple server. Head over to the projects directory with your Command Line Interface and type the following:

	python -m SimpleHTTPServer

## Breaking the UI into components

Facebook provides a good tutorial on how to break your UI into components in the official React [docs.](http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)  

It doesn't matter how you do it; in paint, photoshop, on paper or on a napkin. But make sure you've decided on a component structure before you start coding.

## Building a static version

Head over to the *main.js* file and start fleshing out your components. We've added the root component for you, and called React.render(), which renders this component into the DOM in the specified container.   

We've also hard coded the todo items into a variable named *todos*, and passed it to the TodoApp component as a props, so that you have some data to populate your static app with.

When you code a dynamic version, you'll discard this props variable and rather have the todo items in a state. 

	var todos = ["buy food", "make food", "eat food"];

	var TodoApp = React.createClass({
		render: function(){
			return(<div>Hello World</div>);
		},
	});

	React.render(<TodoApp todos={todos} />, document.getElementById('container'));


## Identifying the state

Now, you'll need to figure out what the app's state will consist of, and where it should live. See the React docs [explanation](https://facebook.github.io/react/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) for more info on how to do this. Outtake:  

*To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don't Repeat Yourself. Figure out what the absolute minimal representation of the state of your application needs to be and compute everything else you need on-demand.*   

## Fetching user input

We recommend you to use [controlled components](https://facebook.github.io/react/docs/forms.html#controlled-components) in order to get the users input, and setting the state on the [onChange](https://facebook.github.io/react/docs/forms.html#interactive-props) event.

Alternatively you can use *refs* and *findDOMNode*. However, this techinque will be covered in exercise 2, so use controlled components in order to learn as much as possible.

## key

When you're creating components dynamically, each of them need a unique "key" attribute. See an example of this in the [lecture 1 notes](https://github.com/ReactForBeginners/course-overview/tree/master/lecture1) or [here.](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children)


## Stretch goals:

* Enable the user to create multiple lists  
The user clicks *New list*, and a new list appears on the page, which he/her can add and delete items on.