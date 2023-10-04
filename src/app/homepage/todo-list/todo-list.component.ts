import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from '../models/project.model';
import { ProjectsActions } from '../state/projects.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() project!: Project;
  constructor(private store: Store) {}
  updateItem(event: any) {
    this.store.dispatch(
      ProjectsActions.updateTodoItem({
        todoItem: event,
        project: this.project!,
      })
    );
  }
}
