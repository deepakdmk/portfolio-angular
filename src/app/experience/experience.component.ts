import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  // Sample job data
  jobs = [
    {
      startYear: '2021',
      endYear: '2023',
      jobTitle: 'Software Developer',
      company: 'Tech Corp',
      description: 'Developed and maintained applications using Angular, Firebase, and more.'
    },
    {
      startYear: '2019',
      endYear: '2021',
      jobTitle: 'Junior Developer',
      company: 'Web Solutions',
      description: 'Worked on frontend development and user interface design.'
    },
    // Add more job data as needed
  ];

  // Variable to hold selected job data
  selectedJob: any = null;

  // Method to handle job selection
  selectJob(index: number) {
    this.selectedJob = this.jobs[index];
  }
}
