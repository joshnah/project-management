import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { catchError, from, map, throwError } from 'rxjs';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private db: AngularFireDatabase) {
    this.projectsRef = this.db.list('/projects');
  }
  projectsRef: AngularFireList<Project>;

  getAll() {
    return this.projectsRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((project) => ({
          key: project.payload.key,
          ...project.payload.val(),
        }))
      ),
      catchError(this.handleError)
    );
  }

  update(project: Project) {
    return from(this.projectsRef.set(project.key, project)).pipe(
      catchError(this.handleError)
    );
  }

  delete(key: string) {
    return from(this.projectsRef.remove(key)).pipe(
      catchError(this.handleError)
    );
  }

  add(project: Project) {
    return from(this.projectsRef.push(project)).pipe(
      catchError(this.handleError)
    );
  }

  private handleError({ status }: HttpErrorResponse) {
    return throwError(() => `${status}: Something bad happened.`);
  }
}
