import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from "./projects/projects.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent ,ExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showAllComponents = false; // Control visibility of components
  isSimpleView = false; // Control simple view state

  // Method to toggle simple view
  onSimpleViewToggled(simpleView: boolean) {
    this.isSimpleView = simpleView;
    this.showAllComponents = simpleView; // Show all components if in simple view
  }
}