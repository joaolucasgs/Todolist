import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import Todoitem from '../components/Todoitem'
import Form from '../components/form';


export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);

  }
  const deleteTodo = (id) => {
  var filtered = todos.filter((todo) => todo.id !== id);
   setTodos(filtered);


  };

  const editTodo = (id, editedText) => {
    var todosArray = [...todos];
    for (var i in todosArray){
     if(todosArray[i].id == id){
      todosArray[i].text = editedText;
     }


    }
    setTodos(todosArray);
  }


  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
    <Form todoHandler={todoHandler} />
    <List sx={{marginTop:"1em" }}>
      {todos.map(  (todo)=> (
        <div key={todo.id} style = {{marginTop: '1em'}}>
         <Todoitem editTodo = {editTodo} todo = {todo} deleteTodo={deleteTodo} />  
        </div>
     
      ))}
     
    </List>
    
   </Container>
  );
}
