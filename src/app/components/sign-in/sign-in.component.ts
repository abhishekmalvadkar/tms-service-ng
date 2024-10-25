import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CardModule, FloatLabelModule, FormsModule, RouterModule, ButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  model = {
    email: '',
    password: '',
  };

  onSignIn() {
    console.log('Form Submitted!', this.model);
  }

}
