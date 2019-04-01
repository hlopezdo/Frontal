import {Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})

export class WindowComponent implements OnInit {
  
  projectsService:ProjectsService;
  coursesService:CoursesService;

  backwardList: string[];
  fordwardList: string[];
  elements: ElementsOfFolder[] = null;
  selectedRow: ElementsOfFolder = null;
    
  maximized = true;

  constructor(projectsService:ProjectsService, coursesService:CoursesService){
    this.projectsService = projectsService;    
    this.coursesService = coursesService;
  }

  ngOnInit() {    
    this.elements = this.getElements();
  }

  private getElements(filter?:ElementsOfFolder):ElementsOfFolder[]{
    if(filter){
      if(filter.category === 'project'){
        return this.projectsService.GetListOfProjects(filter.name);
      }else if(filter.category === 'course'){
        return this.coursesService.GetListOfCourses(filter.name);
      }
    }
    else{      
      var projects = this.projectsService.GetListOfProjects();
      var courses = this.coursesService.GetListOfCourses();
      return courses.concat(projects);
    }    
  }
}
