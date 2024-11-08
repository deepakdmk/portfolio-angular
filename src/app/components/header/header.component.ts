import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() simpleViewToggled = new EventEmitter<boolean>();
  isSimpleView: boolean = false; // Track simple view state

  toggleSimpleView() {
    this.isSimpleView = !this.isSimpleView; // Toggle the simple view state
    this.simpleViewToggled.emit(this.isSimpleView); // Emit the new state
  }

}