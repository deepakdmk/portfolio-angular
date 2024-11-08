import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from "../components/timeline/timeline.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
