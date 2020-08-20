import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo:Todo[]
  constructor() { 
    this.todo = [
      {
        id:'111',
        title:'learn c++',
        isCompleted:true,
        date:new Date()
      },
      {
        id:'222',
        title:'Learn React',
        isCompleted:true,
        date:new Date()
      },
      {
        id:'333',
        title:'Learn Angular',
        isCompleted:false,
        date:new Date()
      }
    ]
  }
  getTodo(){
    return of(this.todo)
  }
  addTodo(todo:Todo){
    this.todo.push(todo)
  }
  changeTodo(todo:Todo){
    this.todo.map((changeStatus)=>{
       if(changeStatus.id === todo.id){
         todo.isCompleted=!todo.isCompleted
       }
    })
  }
  deleteTodo(todo: Todo) {
    const indexofTodo = this.todo.findIndex(
      (currentObj) => currentObj.id === todo.id,
    );
    this.todo.splice(indexofTodo, 1);
  }
}
