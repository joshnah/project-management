import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoListComponent } from './homepage/todo-list/todo-list.component';
import { TodoItemComponent } from './homepage/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
