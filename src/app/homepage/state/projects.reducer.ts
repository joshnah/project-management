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
  on(ProjectsAPIActions.projectsLoadedSuccess, (state, { projects }) => ({
    ...state,
    loading: false,
    projects,
    // set current project
    currentProject: projects?.length > 0 ? projects[0] : undefined,
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
  on(ProjectsAPIActions.projectUpdatedSuccess, (state, { project }) => ({
    ...state,
    loading: false,
    projects: state.projects.map((existingProject) =>
      existingProject.id === project.id ? project : existingProject
    ),
    currentProject:
      state.currentProject!.id === project.id ? project : state.currentProject,
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
