var TODOS = ["buy food", "make food", "eat food"];

var TodoApp = React.createClass({
    render: function(){
        return(<div>Todo app: {this.props.todos}</div>);
    },
});

React.render(<TodoApp todos={TODOS} />, document.getElementById('container'));
