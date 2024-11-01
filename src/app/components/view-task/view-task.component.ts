import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [CardModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    EditorModule, FormsModule, CommonModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css'
})
export class ViewTaskComponent {

  title: string = 'Sample Task';
  description: string = 'This is a sample description.';
  dueDate: Date = new Date();
  status: string = 'Pending'; // Possible values: 'Pending', 'In Progress', 'Completed'

  editingField: string | null = null; // Track which field is being edited
  tempValue: any; // Temporary value to hold input during editing

  statuses: { label: string; value: string }[] = [
    { label: 'Pending', value: 'Pending' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Completed', value: 'Completed' }
  ];

  editField(field: string) {
    this.editingField = field;
    // this.tempValue = this[field]; // Store current value for editing
  }

  saveField(field: string) {
    // this[field] = this.tempValue; // Save the new value
    this.editingField = null; // Exit editing mode
    // Call your API here with the field name and value
    // console.log(`Updated ${field}:`, this[field]);
  }

  cancelEdit() {
    this.editingField = null; // Exit editing mode
  }

}
