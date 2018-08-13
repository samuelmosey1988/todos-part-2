import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';
class TodoItem extends Component {
  render(){
    return (
    <li className={this.props.completed ? "completed": ""}>
						<div class="view">
							<input className="toggle" type="checkbox" checked = {this.props.completed}/>
							<label>{this.props.title}</label>
							<button className="destroy"></button>
						</div>
					</li>
					
          )
  }
}
class TodoList extends Component {
  state = {todos: todoList}
  render(){
    return(<React.Fragment><section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus/>
    </header>
    
    <section class="main">
      <ul class="todo-list">
      {this.state.todos.map( todo => <TodoItem title = {todo.title} completed = {todo.completed}/> )}
      }
      </ul>
			</section>
			
			<footer class="footer">
		
				<span class="todo-count"><strong>0</strong> item(s) left</span>
			
				<button class="clear-completed">Clear completed</button>
			</footer>
		</section>
    </React.Fragment>)

  }
}


class App extends Component {
  render() {
    return (<TodoList>

    </TodoList>
      
    );
  }
}

export default App;
