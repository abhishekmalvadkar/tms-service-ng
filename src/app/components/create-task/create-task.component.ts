import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CardModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    EditorModule, FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  title: string = '';
  description: string = '';
  dueDate: Date | null = null;

  createTask() {
    // Logic to handle task creation
    console.log('Task created:', { title: this.title, description: this.description, dueDate: this.dueDate });
  }

}
