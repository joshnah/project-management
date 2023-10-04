import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { ProjectsAPIActions, ProjectsActions } from './projects.action';

@Injectable()
export class ProjectEffects {
  ngrxOnInitEffects() {
    return ProjectsActions.loadProjects();
  }
  constructor(
    private projectsService: ProjectsService,
    private store: Store,
    private actions$: Actions,
    private router: Router
  ) {}
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      exhaustMap(() =>
        this.projectsService.getAll().pipe(
          map((projects) =>
            ProjectsAPIActions.projectsLoadedSuccess({ projects })
          ),
          catchError((error) =>
            of(ProjectsAPIActions.projectsLoadedFail({ message: error }))
          )
        )
      )
    )
  );

  updateProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.updateProject),
      exhaustMap(({ project }) =>
        this.projectsService.update(project).pipe(
          map(() => ProjectsAPIActions.projectUpdatedSuccess({ project })),
          catchError((error) =>
            of(ProjectsAPIActions.projectUpdatedFail({ message: error }))
          )
        )
      )
    )
  );

  updateTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.updateTodoItem),
      exhaustMap(({ todoItem, project }) => {
        const updatedTodoList = project.todoList.map((todo) =>
          todo.id !== todoItem.id ? todo : todoItem
        );
        return of(
          ProjectsActions.updateProject({
            project: { ...project, todoList: updatedTodoList },
          })
        );
      })
    )
  );
}
