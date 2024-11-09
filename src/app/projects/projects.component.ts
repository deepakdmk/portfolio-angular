import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectstacksComponent } from '../components/projectstacks/projectstacks.component';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectstacksComponent, MatCard],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {




}
