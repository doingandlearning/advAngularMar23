import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useFactory: () => new LoggerService(true),
    },
    RestService,
  ],
  changeDetection:
})
export class TodoListComponent {
  todos: any[] = [];
  // Token
  constructor(
    private restService: RestService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.restService.getTodos().subscribe({
      next: (response) => (this.todos = response),
      error: (error) => console.error(error),
    });
  }
}
