import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  //Home Content
  jobTitles: string[] = ["Fullstack", "Back-end", "Front-end", "Spring Boot", "Angular"]
  homeDescription = "Welcome to my portfolio website. Developer based in Singapore with 3 years of experience as a Software Developer.";
  techstack = ([
    "../../../assets/images/spring-boot.png",
    "../../../assets/images/angular.svg",
    "../../../assets/images/gitlab.png",
    "../../../assets/images/aws.png",
    "../../../assets/images/java.svg",
  ])

  //Experience Content
  experienceTimeline = [
    {
      title: 'DXC',
      date: '2021-2024',
      description: 'Fullstack developer with experience in Spring Boot and Angular.',
      image: '../../../assets/images/dxc.svg'
    },
    {
      title: 'University of London/SIM',
      date: '2018-2021',
      description: 'Bachelors of Science in Computing and Information Systems',
      image: '../../../assets/images/uol.svg'
    },
    {
      title: 'Technoally',
      date: '2017-2018',
      description: 'System engineer with experience in networking and IT infrastructure.',
      image: '../../../assets/images/technoally.png'
    },
    {
      title: 'Singapore Armed Forces',
      date: '2015-2017',
      description: 'Company Quartermaster in SAF. Won awards and commended for time in service.',
      image: '../../../assets/images/saf.png'
    }
  ];

  // Projects Content
  projectStack = [{
    title: 'Job Portal System',
    description: 'This is spring boot project using thymeleaf as a frontend. It implements Spring Security for the account system with MySQL as the backend.',
    techStacks: ['Spring Boot', 'Hibernate', 'Thymeleaf', 'Spring Security', 'MySQL'],
    url: 'https://github.com/deepakdmk/JobPortalSystem-SpringBoot'
  }
    // , {
    //   title: '',
    //   description: '',
    //   techStacks: ['', '', ''],
    //   url: ''
    // }
  ]

}
