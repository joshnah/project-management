import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  private URL = 'api/projects/';

  getAll() {
    return this.http
      .get<Project[]>(this.URL)
      .pipe(catchError(this.handleError));
  }

  update(product: Project): Observable<Project> {
    return this.http
      .put<Project>(this.URL, product)
      .pipe(catchError(this.handleError));
  }

  private handleError({ status }: HttpErrorResponse) {
    return throwError(() => `${status}: Something bad happened.`);
  }
}
