import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-projectstacks',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './projectstacks.component.html',
  styleUrl: './projectstacks.component.css'
})
export class ProjectstacksComponent implements OnInit, AfterViewInit {



  projectCards: any[];

  constructor(private renderer: Renderer2, private contentService: ContentService) {
    this.projectCards = contentService.projectStack;
  }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    // Dynamically load Vanilla Tilt
    const tiltScript = this.renderer.createElement('script');
    tiltScript.src = '../../../assets/scripts/vanilla-tilt.min.js';
    tiltScript.onload = () => {
      const cardElements = document.querySelectorAll('.card');
      cardElements.forEach(cardElement => {
        // @ts-ignore - VanillaTilt is declared globally by the loaded script
        VanillaTilt.init(cardElement, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5
        });
      });
    };
    this.renderer.appendChild(document.body, tiltScript);
  }
}