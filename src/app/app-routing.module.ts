import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EdittodoComponent } from './components/edittodo/edittodo.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'edit', component: EdittodoComponent },
  { path: 'edit/:id', component: EdittodoComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
