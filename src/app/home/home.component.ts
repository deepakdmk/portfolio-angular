import { Component, OnInit } from '@angular/core';
import { HomecardComponent } from "../components/homecard/homecard.component";
import { TechstackComponent } from "../components/techstack/techstack.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomecardComponent, TechstackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
