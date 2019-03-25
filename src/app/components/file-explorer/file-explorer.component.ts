import { Component, OnInit } from '@angular/core';
import { WindowConfig } from '../../models/window-config.model';
import { ProjectsService } from '../../services/projects/projects.service';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})

export class FileExplorerComponent implements OnInit {

  private listOfCourses: ElementsOfFolder[];
  private listOfProjects: ElementsOfFolder[];
  private windowConfig: WindowConfig;
  
  constructor(projectsService:ProjectsService, coursesService: CoursesService ) {
    this.windowConfig = {
      height: 400,
      width: 600,
      top: undefined,
      left: undefined,
      view: 'tiles'
    };

    this.listOfProjects = projectsService.GetListOfProjects();
    this.listOfCourses = coursesService.GetListOfCourses();
  }

  ngOnInit() {
  }

  changeView = function(){
  
  }
}
