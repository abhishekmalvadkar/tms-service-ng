import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

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
  imports: [CalendarModule, FormsModule, CommonModule, CardModule,ButtonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[] = [
    { title: 'Task 1', summary: 'This is a summary of task 1', status: 'Pending', dueDate: new Date('2024-10-31') },
    { title: 'Task 2', summary: 'This is a summary of task 2', status: 'Completed', dueDate: new Date('2024-10-25') },
    { title: 'Task 3', summary: 'This is a summary of task 3', status: 'Pending', dueDate: new Date('2024-11-05') },
    // Add more tasks as needed
  ];

  searchText: string = '';
  selectedStatus: string = '';
  dueDateFilter: Date | null = null; // for filtering based on due date

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


}
