import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CardModule, FormsModule, ButtonModule, FloatLabelModule, InputTextModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  model = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Form Submitted!', this.model);
  }

}
