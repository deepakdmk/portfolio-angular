import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.css'
})
export class TechstackComponent {

  techStack: string[];

  constructor(private contentService: ContentService) {
    this.techStack = this.contentService.techstack;
  }
}