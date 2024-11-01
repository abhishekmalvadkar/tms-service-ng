import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

interface Task {
  title: string;
  summary: string;
  status: 'Pending' | 'Completed';
  dueDate: Date;
  showActions?: boolean
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CalendarModule, FormsModule, CommonModule, CardModule,ButtonModule, RouterModule,ConfirmDialogModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers:[ConfirmationService]
})
export class TaskListComponent {

  tasks: Task[] = [
    { title: 'Task 1', summary: 'This is a summary of task 1', status: 'Pending', dueDate: new Date('2024-10-31') },
    { title: 'Task 2', summary: 'This is a summary of task 2', status: 'Completed', dueDate: new Date('2024-10-25') },
    { title: 'Task 3', summary: 'This is a summary of task 3', status: 'Pending', dueDate: new Date('2024-11-05') },
    // Add more tasks as needed
  ];

  constructor(private confirmationService: ConfirmationService,
    private renderer: Renderer2, private el: ElementRef
  ) {}


  searchText: string = '';
  selectedStatus: string = '';
  dueDateFilter: Date | null = null; // for filtering based on due date
  display: boolean = false;

  markAsCompleted(task: Task) {
    task.status = 'Completed';
  }

  viewTask(task: Task) {
    console.log('Viewing task:', task);
    // Implement viewing logic here
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  filteredTasks() {
    return this.tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesStatus = this.selectedStatus ? task.status === this.selectedStatus : true;
      const matchesDueDate = this.dueDateFilter ? task.dueDate.toDateString() === this.dueDateFilter.toDateString() : true;
      return matchesSearch && matchesStatus && matchesDueDate;
    });
  }

  toggleActions(task: Task, event: MouseEvent) {
    event.stopPropagation(); // Prevent click from bubbling up
    this.tasks.forEach(t => {
      if (t !== task) {
        t.showActions = false; // Close others
      }
    });
    task.showActions = !task.showActions; // Toggle current
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.tasks.forEach(task => {
      task.showActions = false; // Close all when clicking outside
    });
  }

  // Example method to create a task
  createTask() {
    // Logic to create a new task (e.g., open a modal or navigate to a new route)
    console.log('New Task button clicked');
    // You can implement a modal or a redirect to a task creation page here
  }

  confirmMarkAsCompleted(task: Task) {
    this.applyOverlayStyles(true);
    this.confirmationService.confirm({
      message: 'Are you sure you want to mark this task as completed?',
      accept: () => {
        this.markAsCompleted(task);
        this.applyOverlayStyles(false);
      },
      reject: () => {
        // Optional: Logic if the user cancels the action
        this.applyOverlayStyles(false);
      }
    });
  }

  confirmRemoveTask(task: Task) {
    this.applyOverlayStyles(true);
    this.confirmationService.confirm({
      message: 'Are you sure you want to remove this task?',
      accept: () => {
        this.removeTask(task);
        this.applyOverlayStyles(false);
      },
      reject: () => {
        // Optional: Logic if the user cancels the action
        this.applyOverlayStyles(false);
      }
    });
  }

  private applyOverlayStyles(isVisible: boolean) {
    const overlay = this.el.nativeElement.querySelector('.p-dialog-mask');
    if(overlay){
    if (isVisible) {
      this.renderer.setStyle(overlay, 'visibility', 'visible');
    } else {
      this.renderer.setStyle(overlay, 'visibility', 'hidden');
    }
  }
  }




}
