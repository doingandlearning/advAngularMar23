import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products-routing.module').then(
        (d) => d.ProductRoutingModule
      ),
  },
  {
    path: '',
    component: TodoListComponent,
  },
  { path: 'hello', component: HelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
