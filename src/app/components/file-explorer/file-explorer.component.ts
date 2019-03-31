import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {
  
  @ViewChild(MatSort) sort: MatSort;
  
  projectsService:ProjectsService;
  coursesService:CoursesService;

  backwardList: string[];
  fordwardList: string[];
  selectedRow: ElementsOfFolder = null;
  displayedColumns: string[] = ['name', 'date', 'type', 'size'];
    
  dataSource = null;
  maximized = true;

  constructor(projectsService:ProjectsService, coursesService:CoursesService){
    this.projectsService = projectsService;    
    this.coursesService = coursesService;
  }

  ngOnInit() {    
    var elements = this.getElements();
    this.dataSource = new MatTableDataSource(elements);
    this.dataSource.sort = this.sort;
  }

  highlight(row){
    this.selectedRow = row;
  }

  minimize(){
    this.maximized = false;
  }

  maximize(){
    this.maximized = true;
  }

  close(){

  }

  open(row:ElementsOfFolder){
    var elements = this.getElements(row);
    if(elements){
      this.dataSource = new MatTableDataSource(elements);
      this.dataSource.sort = this.sort;
    }    
  }

  backward(){

  }

  forward(){

  }

  up(){
    var elements = this.getElements(this.selectedRow);
    if(elements){
      this.dataSource = new MatTableDataSource(elements);
      this.dataSource.sort = this.sort;
    }    
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
