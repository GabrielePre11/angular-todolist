import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  imports: [Header, Todo],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'angular-todo';
}
