'use strict';

var TodoItem = React.createClass({
	render: function(){
		console.log('this.props.todo:', this.props.todo);
		console.log('this.props.index:', this.props.index);
		return(
			<li>
				{this.props.todo}
				<span onClick={this.props.handleRemove.bind(null, this.props.index)} > ✗ </span>
			</li>
		);
	}
});

var TodoList = React.createClass({
	render: function(){

		var todos = this.props.todos.map(function(todo,index){
			return <TodoItem 
						key={index} 
						todo={todo} 
						index={index} 
						handleRemove={this.props.handleRemove} />
		}.bind(this));
		
		return (
			<ul>
				{todos}
			</ul>
		);
	}
});

var InputField = React.createClass({
	render: function(){
		return(
			<div>
				<input 
					type="text"
					value={this.props.text}
					onChange={this.props.handleChange} />
				<input 
					type="submit"
					value="Add to list!" 
					onClick={this.props.handleClick} />
			</div>
		);
	}
});

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			text: '',
			todos: []
		}
	},

	handleChange: function(event){
		this.setState({
			text: event.target.value
		});
	},

	handleClick: function(){
		this.setState({
			todos: this.state.todos.concat(this.state.text),
			text: ''
		});
	},

	handleRemove: function(index){
		var newTodos = this.state.todos;
		newTodos.splice(index,1);
		this.setState({
			todos: newTodos
		});
	},

	render: function(){
		return (
			<div>
				<h1>Todo app</h1>
				<InputField 
					text={this.state.text} 
					handleClick={this.handleClick} 
					handleChange={this.handleChange} />
				<TodoList 
					todos={this.state.todos}
					handleRemove={this.handleRemove} />
			</div>
		);
	}
});

React.render(<TodoApp />,  document.getElementById("content"));

