import { Component, Input } from '@angular/core';
import { TodoItem } from '../models/project.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
}
