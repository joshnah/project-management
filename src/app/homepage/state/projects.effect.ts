import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
}
