import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../shared/configuration.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-on-site-load',
  standalone: true,
  imports: [CardModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './on-site-load.component.html',
  styleUrl: './on-site-load.component.css'
})
export class OnSiteLoadComponent implements OnInit {

  configData: any;
  loading = true;

  constructor(private configService: ConfigurationService) {}

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig(): void {
    this.configService.getConfig('GENERAL').subscribe(
      (response) => {
        if (response.success) {
          this.configData = response.data;
          this.loading = false;
        } else {
          console.error('Failed to fetch configuration:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching configuration:', error);
      }
    );
  }

   // Methods for button actions
   onSignIn() {
    console.log('Sign In clicked');
  }

  onSignUp() {
    console.log('Sign Up clicked');
  }

}
