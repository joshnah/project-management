import { Update } from '@ngrx/entity';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Project } from '../models/project.model';

export const ProjectsActions = createActionGroup({
  source: 'Project Page',
  events: {
    'Load Projects': emptyProps(),
    'Add Project': props<{ project: Project }>(),
    'Update Project': props<{ project: Project }>(),
    'Delete Project': props<{ id: number }>(),
    'Set Current Project': props<{ id: number }>(),
  },
});

export const ProjectsAPIActions = createActionGroup({
  source: 'Projects API',
  events: {
    'Load Projects': emptyProps(),
    'Projects Loaded Success': props<{ projects: Project[] }>(),
    'Projects Loaded Fail': props<{ message: string }>(),
    'Project Added Success': props<{ project: Project }>(),
    'Project Added Fail': props<{ message: string }>(),
    'Project Updated Success': props<{ update: Update<Project> }>(),
    'Project Updated Fail': props<{ message: string }>(),
    'Project Deleted Success': props<{ id: number }>(),
    'Project Deleted Fail': props<{ message: string }>(),
  },
});
