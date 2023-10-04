import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './homepage/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects: Project[] = [
      {
        todoList: [
          {
            title: 'This is a todo list',
            done: true,
            urgency: 3,
          },
          {
            title: 'This is a todo list',
            done: true,
            urgency: 1,
            progress: 0,
          },
          {
            title: 'This is a todo list',
            done: true,
            urgency: 2,
            progress: 60,
            deadline: new Date(),
          },
          {
            title: 'This is a todo list',
            done: true,
            urgency: 3,
          },
        ],
        id: 1,
      },
    ];
    return { projects };
  }
}
