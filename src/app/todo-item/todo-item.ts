import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

//============ ICONS ============//
// Complete Task
import { heroCheckBadgeSolid } from '@ng-icons/heroicons/solid';
// Remove Task
import { heroTrashSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-todo-item',
  imports: [NgIcon],
  templateUrl: './todo-item.html',
  viewProviders: [provideIcons({ heroCheckBadgeSolid, heroTrashSolid })],
  styleUrls: ['./todo-item.css'],
})
export class TodoItem {
  //============ @INPUT ELEMENTS ============//

  /**
   * I am currently using the classic @Input and @Output decorators,
   * instead of the newer input/output properties and signals,
   * because I want to first learn/master how Angular worked before version 17.
   * Many agencies in Italy could still use these traditional APIs,
   * so it’s important to be familiar with them.
   */

  @Input() userTask!: string;
  @Input() taskId!: number;
  @Input() isCompleted!: boolean;

  //============ @OUTPUT ELEMENTS ============//
  @Output() complete = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  /**
   * Emits the taskId to the parent component indicating
   * that this task has been completed (onCompleteTask) or removed (onRemoveTask).
   *
   * In React, you typically just pass the callback prop directly,
   * but in Angular we need to declare an @Output EventEmitter
   * and explicitly call emit() to notify the parent.
   */
  onCompleteTask() {
    this.complete.emit(this.taskId);
  }

  onRemoveTask() {
    this.remove.emit(this.taskId);
  }
}
