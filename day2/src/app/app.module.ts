import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // This is where get CommonModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
