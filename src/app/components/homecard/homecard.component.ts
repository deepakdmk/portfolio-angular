import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { ContentService } from '../../service/content.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-homecard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './homecard.component.html',
  styleUrl: './homecard.component.css'
})
export class HomecardComponent implements OnInit {

  contentService = inject(ContentService);

  homeIntroduction = this.contentService.homeDescription;

  constructor(private renderer: Renderer2) {
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