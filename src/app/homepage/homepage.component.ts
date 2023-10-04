import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from './models/project.model';
import { selectCurrentProject } from './state/projects.selector';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  currentProject?: Project;
  constructor(private store: Store) {
    this.store.subscribe((s) => console.log(s));
    this.store.select(selectCurrentProject).subscribe((currentProject) => {
      if (currentProject) {
        this.currentProject = currentProject;
      }
    });
  }
}
