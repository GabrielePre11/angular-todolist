import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../todo-item/todo-item';

interface Task {
  id: number;
  label: string;
  isCompleted: boolean;
}

type Filter = 'All' | 'Completed';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, TodoItem],
  standalone: true,
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class Todo {
  tasks: Task[] = [];
  userTask: string = '';

  //============ FILTER TASKS ============//
  activeCategory: Filter = 'All'; // By default it's set to "All".

  // Get: Dynamic values that depend on other values
  get filteredTasks(): Task[] {
    if (this.activeCategory === 'Completed') {
      return this.tasks.filter((task) => task.isCompleted);
    }
    return this.tasks;
  }

  //============ COMPLETED TASKS ============//
  // Get: Dynamic values that depend on other values
  get completedTasks(): number {
    return this.tasks.filter((task) => task.isCompleted).length;
  }

  //============ METHODS ============//

  //============ ADDTASK ============//
  addTask() {
    if (!this.userTask.trim()) return;

    const newTask = {
      id: Date.now(),
      label: this.userTask,
      isCompleted: false,
    };

    this.tasks = [...this.tasks, newTask];
    this.userTask = '';
  }

  //============ COMPLETETASK ============//
  completeTask(id: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
  }

  //============ REMOVETASK ============//
  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
