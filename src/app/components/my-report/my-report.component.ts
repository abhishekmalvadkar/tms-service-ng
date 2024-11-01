import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Chart, registerables } from 'chart.js';
import 'chartjs-plugin-datalabels';

Chart.register(...registerables);

@Component({
  selector: 'app-my-report',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './my-report.component.html',
  styleUrl: './my-report.component.css'
})
export class MyReportComponent {

  data: any;
  completedTasks: number = 50;
  pendingTasks: number = 30;


  constructor() {
    this.data = {
      labels: ['Completed', 'Pending'],
      datasets: [
        {
          data: [this.completedTasks, this.pendingTasks],
          backgroundColor: ['#42A5F5', '#FFA726'],
        }
      ]
    };
  }


  options: any = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true // Disable tooltips
      },
      datalabels: {
        color: '#000000', // Set text color
        anchor: 'end', // Anchor the label at the end of the segment
        align: 'start', // Align the label to start, so it appears outside
        formatter: (value: number, context: any) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`; // Format label with value
        },
      }
    },
    layout: {
      padding: {
        right: 20 // Add padding for better positioning
      }
    }
  };

}
