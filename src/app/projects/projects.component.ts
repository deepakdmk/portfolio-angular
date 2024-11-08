import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatChipsModule,
    CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      techstack: 'JavaScript, HTML, CSS'
    },
    {
      title: 'Weather App',
      subtitle: 'Web Application',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'A weather application that provides real-time weather updates for any location.',
      techstack: 'Angular, OpenWeather API'
    },
    {
      title: 'Fitness Tracker',
      subtitle: 'Mobile App',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'A mobile app that helps users track their fitness goals and activities.',
      techstack: 'React Native, Firebase'
    },
    {
      title: 'E-commerce Platform',
      subtitle: 'Web Application',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'An e-commerce platform that connects buyers and sellers efficiently.',
      techstack: 'Node.js, Express, MongoDB'
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Website',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'A personal portfolio website to showcase skills and projects.',
      techstack: 'Angular, Bootstrap'
    },
    {
      title: 'Chat Application',
      subtitle: 'Web Application',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'A real-time chat application for effective communication.',
      techstack: 'Socket.IO, Node.js'
    }
  ];

  
}
