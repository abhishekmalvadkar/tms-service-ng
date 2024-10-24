import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-verify-account',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.css'
})
export class VerifyAccountComponent implements OnInit {
  verifyMessage = '';
  isVerified =  false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.isVerified = params.get('isVerified') === 'true'; // Convert string to boolean
      if (this.isVerified) {
        this.verifyMessage = `
          <h2>Customer Verification</h2>
          <p class="text-success fw-bold">Congratulations! Your account has been verified.</p>
        `;
      } else {
        this.verifyMessage = `
          <h2>Customer Verification</h2>
          <p class="text-danger fw-bold">Your account was already verified, or the verification code is invalid.</p>
        `;
      }
    });
  }




}
