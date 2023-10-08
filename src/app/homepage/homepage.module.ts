import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { LinksListComponent } from './links-list/links-list.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { ProjectEffects } from './state/projects.effect';
import { projectsReducer } from './state/projects.reducer';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    HomepageComponent,
    TodoListComponent,
    TodoItemComponent,
    ProjetListComponent,
    LinksListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomepageRoutingModule,
    MatIconModule,
    MatSliderModule,
    StoreModule.forFeature('projects', projectsReducer),
    EffectsModule.forFeature([ProjectEffects]),
    AngularFireDatabaseModule,
  ],
})
export class HomepageModule {}
