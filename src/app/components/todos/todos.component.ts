import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[]
faTrashAlt= faTrashAlt
  constructor(private todoSerrvice:TodoService) { }

  ngOnInit(): void {
    this.todoSerrvice.getTodo().subscribe((data)=> this.todos =data)
    
  }
  changeTodoStatus(todo:Todo){
    this.todoSerrvice.changeTodo(todo)
  }
  deleteTodo(todo:Todo){
    this.todoSerrvice.deleteTodo(todo)
  }


}
