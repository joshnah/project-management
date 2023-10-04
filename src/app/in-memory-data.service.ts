import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './homepage/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const project1: Project = {
      id: 1,
      todoList: [
        {
          description: 'Complete project proposal',
          done: false,
          importance: 5,
          urgency: 4,
          progress: 20,
          deadline: new Date('2023-11-15'),
          id: 1,
        },
        {
          description: 'Research market trends',
          done: true,
          importance: 3,
          urgency: 5,
          progress: 100,
          deadline: new Date('2023-10-10'),
          id: 2,
        },
      ],
      links: [
        { title: 'Project Overview', url: 'https://example.com/project1' },
        { title: 'Documentation', url: 'https://example.com/project1/docs' },
      ],
      title: 'project 1',
    };

    const project2: Project = {
      id: 2,
      todoList: [
        {
          description: 'Design user interface',
          done: false,
          importance: 4,
          urgency: 3,
          progress: 40,
          deadline: new Date('2023-11-30'),
          id: 3,
        },
        {
          description: 'Backend development',
          done: false,
          importance: 5,
          urgency: 4,
          progress: 15,
          deadline: new Date('2023-12-15'),
          id: 4,
        },
      ],
      links: [
        { title: 'Project Overview', url: 'https://example.com/project2' },
        { title: 'GitHub Repository', url: 'https://github.com/project2' },
      ],
      title: 'project 2',
    };

    const project3: Project = {
      title: 'project 3',
      id: 3,
      todoList: [
        {
          description: 'Marketing strategy',
          done: true,
          importance: 4,
          urgency: 5,
          progress: 100,
          deadline: new Date('2023-09-30'),
          id: 5,
        },
        {
          description: 'Client meetings',
          done: true,
          importance: 3,
          urgency: 4,
          progress: 100,
          deadline: new Date('2023-09-25'),
          id: 6,
        },
        {
          description: 'Financial projections',
          done: true,
          importance: 4,
          urgency: 3,
          progress: 100,
          deadline: new Date('2023-09-28'),
          id: 7,
        },
      ],
      links: [
        { title: 'Project Overview', url: 'https://example.com/project3' },
        { title: 'Sales Report', url: 'https://example.com/project3/sales' },
      ],
    };

    const projects: Project[] = [project1, project2, project3];

    return { projects };
  }
}
