import { Component, inject, OnInit } from '@angular/core';
import { ContentService } from '../../service/content.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-homecard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './homecard.component.html',
  styleUrl: './homecard.component.css'
})
export class HomecardComponent implements OnInit{

  contentService = inject(ContentService);

  homeIntroduction = this.contentService.homeDescription;

  // Typing strings for the animation
  phrases: string[] = this.contentService.jobTitles;
  dynamicText: string = '';
  phraseIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100; // Speed for typing
  deletingSpeed: number = 75; // Speed for deleting
  pauseSpeed: number = 1000; // Pause after completing a phrase
  resetSpeed: number = 500; // Speed for reset

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      // Backspacing
      this.dynamicText = currentPhrase.substring(0, this.charIndex--);
    } else {
      // Typing
      this.dynamicText = currentPhrase.substring(0, this.charIndex++);
    }

    // Adjust typing speed
    let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    // When finished typing a phrase, pause before deleting
    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      speed = this.pauseSpeed; // Longer pause at the end of the phrase
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // After backspacing, move to the next phrase
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      speed = this.resetSpeed; // Reset speed for a smooth transition
    }

    // Use setTimeout to recursively call the type function for smooth animation
    setTimeout(() => this.type(), speed);
  }
}