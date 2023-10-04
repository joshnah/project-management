import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../models/project.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
  @Output() updateItem = new EventEmitter<TodoItem>();

  update() {
    this.updateItem.emit(this.item);
  }

  toggleCheckBox() {
    this.updateItem.emit({ ...this.item, done: !this.item.done });
  }

  updateProgressBar(value: any) {
    this.updateItem.emit({ ...this.item, progress: value });
  }
}
