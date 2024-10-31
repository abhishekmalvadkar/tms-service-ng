import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isOpen: boolean = false; // Input property to control visibility
  @Output() close = new EventEmitter<void>(); // Emit close event

  username: string = 'John Doe';
  role: string = 'Admin';
  lastLoggedIn: Date = new Date();

  toggleSubMenu(menu: string) {
    // Your submenu logic here
  }

  // Add a method to close the sidebar when clicking outside or on the close button
  closeSidebar() {
    this.close.emit(); // Emit close event to parent
  }

   // Listen for clicks outside the sidebar
   @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
     const target = event.target as HTMLElement;
     const sidebarElement = document.querySelector('.sidebar'); // Get the sidebar element

     // Check if the clicked target is outside the sidebar
     if (this.isOpen && sidebarElement && !sidebarElement.contains(target)) {
       this.closeSidebar();
     }
   }

}
