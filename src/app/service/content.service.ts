import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  //Home Content
  jobTitles: string[] = ["Software Developer", "Frontend Developer"]
  homeDescription = "Im a software developer blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blabllopoper blloper  blablloperper  blablloperper  blablloperper  blablloperper  blablloper blsadf";
  techstack = ([
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg",
    "../../../assets/images/profile.jpg"
  ])

  //Experience Content
  experienceTimeline = [
    {
      title: 'Alphabet',
      date: '2018-2022',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      image: '../../../assets/images/brand.svg'
    },
    {
      title: 'Beta',
      date: '2022-Present',
      description: 'Another description for the Beta period...',
      image: '../../../assets/images/brand.svg'
    },
    {
      title: 'Gamma',
      date: '2020-2021',
      description: 'Description for the Gamma period...',
      image: '../../../assets/images/brand.svg'
    },
  ];

  // Projects Content
  projectStack = [{
    title: 'Spring Boot Project',
    description: 'This is a project based on Spring Boot and other frameworks.',
    techStacks: ['Spring Boot', 'Angular', 'MySQL'],
    url: 'https://example.com/spring-boot-project'
  }, {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }
    , {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }
    , {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }, {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }, {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }, {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }, {
    title: 'Angulalololor Project',
    description: 'An application using Angular with a modern UI and backend integration.',
    techStacks: ['Angular', 'TypeScript', 'Firebase'],
    url: 'https://example.com/angular-project'
  }]

}
