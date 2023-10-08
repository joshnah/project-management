import { createReducer, on } from '@ngrx/store';
import { Project } from '../models/project.model';
import { ProjectsAPIActions, ProjectsActions } from './projects.action';

export interface ProjectsState {
  loading: boolean;
  errorMessage: string;
  projects: Project[];
  currentProject?: Project;
}
const initialState: ProjectsState = {
  projects: [],
  loading: false,
  errorMessage: '',
};
export const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.loadProjects, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
    projects: [],
  })),
  // for each project update

  on(ProjectsAPIActions.projectsLoadedSuccess, (state, { projects }) => ({
    ...state,
    loading: false,
    projects,
    // set current project
    currentProject:
      projects.find((project) => project.id === state.currentProject?.id) ||
      projects[0],
  })),
  on(ProjectsAPIActions.projectsLoadedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProjectsActions.addProject, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProjectsAPIActions.projectAddedSuccess, (state, { project }) => ({
    ...state,
    loading: false,
    projects: [...state.projects, project],
  })),
  on(ProjectsAPIActions.projectAddedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProjectsActions.updateProject, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProjectsAPIActions.projectUpdatedSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(ProjectsAPIActions.projectUpdatedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProjectsActions.deleteProject, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProjectsAPIActions.projectDeletedSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    projects: state.projects.filter(
      (existingProject) => existingProject.id !== id
    ),
  })),
  on(ProjectsAPIActions.projectDeletedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProjectsActions.setCurrentProject, (state, { id }) => ({
    ...state,
    currentProject: state.projects.find((p) => p.id === id),
  }))
);
