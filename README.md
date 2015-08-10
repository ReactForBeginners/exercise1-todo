# Todo app

This exercise will teach you how to create a simple Todo app using React. You'll learn about components, state, props and also how to change the state based on user input.

To get started, clone this repo, and follow the instructions below:

## Break the UI into components

Facebook provides a good tutorial on how to break your UI into components in the official React [docs.](http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)  

It doesn't matter how you do it; in paint, photoshop, on paper or on a napkin. But make sure you've decided on a component structure before you start coding.

## Build a static version

Head over to the *main.js* file and start fleshing out your components. We've added the root component for you, and called React.render(), which renders this component into the DOM in the specified container.   

As you see, we've hard coded the todo items into a variable named *todos*, and passed it to the TodoApp component as a props.

When you code a dynamic version, you'll discard this props variable and rather have the todo items in a state. 

	var todos = ["buy food", "make food", "eat food"];

	var TodoApp = React.createClass({
		render: function(){
			return(<div>Hello World</div>);
		},
	});

	React.render(<TodoApp todos={todos} />, document.getElementById('container'));


## Identify the state

Now, you'll need to figure out what the app's state will consist of, and where it should live. See the React docs [explanation](https://facebook.github.io/react/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) for more info on how to do this.

## Fetch the input

We recommend you to use [controlled components](https://facebook.github.io/react/docs/forms.html#controlled-components) in order to get the users input, setting the state on the onChange event.

Alternatively you can use *refs* and *findDOMNode*. However, this techinque will be covered in exercise 2, so use controlled components in order to learn as much as possible.

## Stretch goals:

* Enable the user to create multiple lists  
The user clicks *New list*, and a new list appears on the page, which he/her can add and delete items on.