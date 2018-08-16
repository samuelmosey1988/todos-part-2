import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';

class TodoItem extends Component {
  render(){
    return (
    <li className={this.props.completed ? "completed": ""}>
						<div class="view">
              <input className="toggle" 
              type="checkbox" 
              checked = {this.props.completed} 
              onClick = {this.props.onClick}/>
							<label>{this.props.title}</label>
              <button className="destroy" 
              onClick={this.props.destroy}>
              </button>
						</div>
					</li>
					
          )
  }
}
class TodoList extends Component {
  state = {todos: todoList, idCount: 6}
  
  onClick = (id)=>(event)=>{
    const newTodoList = this.state.todos.slice()
    newTodoList.forEach(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }  
    });
    this.setState({todos: newTodoList})
  }
  
  onKeyPress = (event)=>{
    if(event.key === "Enter"){
   const title = event.target.value 
   event.target.value = ""
   const newToDo = {
     userID: 1,
     title: title,
     completed: false,
     id: this.state.idCount
   } 
   const newTodoList = this.state.todos.slice()
   newTodoList.push(newToDo)
   this.setState({idCount: this.state.idCount + 1, todos: newTodoList})  
  }
  }
  destroy = (id)=>(event)=>{
    const newTodoList = this.state.todos.filter(todo=>{if (todo.id === id){
      return false; 
      }else{
      return true; 
    }
  })
    //newTodoList.splice(0, 1)
    this.setState({todos: newTodoList})
  }
  
  handleDeletion = () => {
    const newTodoList = this.state.todos.filter(todo => {if (todo.completed === true){
      return false; 
      }else{
      return true; 
    }})
    this.setState({todos: newTodoList})
  }

  render(){
    return(<React.Fragment><section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" 
      placeholder="What needs to be done?" autofocus 
      onKeyPress = {this.onKeyPress}/>   
    </header>
    
    <section class="main">
      <ul class="todo-list">
      {this.state.todos.map( todo => 
      <TodoItem title = {todo.title} 
      completed={todo.completed} 
      onClick={this.onClick(todo.id)}
      destroy = {this.destroy(todo.id)}/> )}
      }
      </ul>
			</section>
			
			<footer class="footer">
		
				<span class="todo-count"><strong>0</strong> item(s) left</span>
			
        <button class="clear-completed" 
        onClick = {this.handleDeletion}>Clear completed</button>

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
