import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from '../models/project.model';
import { ProjectsActions } from '../state/projects.action';
import { selectProjects } from '../state/projects.selector';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss'],
})
export class ProjetListComponent {
  projects$ = this.store.select(selectProjects);
  @Input() currentProject?: Project;
  constructor(private store: Store) {}
  isActive(id: number) {
    return this.currentProject?.id === id;
  }

  changeProject(id: number) {
    if (!this.isActive(id)) {
      this.store.dispatch(ProjectsActions.setCurrentProject({ id }));
    }
  }
}
