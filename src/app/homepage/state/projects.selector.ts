import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.reducer';

export const selectProjectsState =
  createFeatureSelector<ProjectsState>('projects');

export const selectProjects = createSelector(
  selectProjectsState,
  ({ projects }) => projects
);

export const selectCurrentProject = createSelector(
  selectProjectsState,
  ({ currentProject }) => currentProject
);
