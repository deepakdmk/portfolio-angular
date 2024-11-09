import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {


  timelineItems: TimelineItem[] = [];

  constructor(private contentService: ContentService) {
    this.timelineItems = contentService.experienceTimeline;
  }
}

interface TimelineItem {
  title: string;
  date: string;
  description: string;
  image: string;
}