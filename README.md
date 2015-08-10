# Todo app

This exercise will teach you how to create a simple Todo app using React. You'll learn about components, state, props and also how to change the state based on user input.

To get started, clone this repo, and follow the instructions below:

## Break the UI into components

Facebook provides a good tutorial on how to break your UI into components in the official React [docs.](http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)  

It doesn't matter how you do it; in paint, photoshop, on paper or on a napkin. But make sure you've decided on a component structure before you start coding.

## Build a static version

Head over to the main.js file and start fleshing out your components. We've added the root component for you, and called React.render(), which renders this component into the DOM in the specified container.


	var TodoApp = React.createClass({
		render: function(){
			return(<div>Hello World</div>);
		},
	});

	React.render(<TodoApp />, document.getElementById('container'));



## 3. Fetch the users input



## Stretch goals:

* Enable the user to create multiple lists  
The user clicks *New list*, and a new list appears on the page, which he/her can add and delete items on.