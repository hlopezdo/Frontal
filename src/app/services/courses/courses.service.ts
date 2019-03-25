import { Injectable } from '@angular/core';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private listOfCourses: ElementsOfFolder[];
  
  constructor() { 
    this.listOfCourses = [
      { name:'Angular 2', icon: "<span class='mif-folder fg-orange'>" }, 
      { name:'Angular 7', icon: "<span class='mif-folder fg-orange'>" },
      { name:'Bootstrap', icon: "<span class='mif-folder fg-orange'>" },
      { name:'Vue', icon: "<span class='mif-folder fg-orange'>" }
    ];
  }

  GetListOfCourses= function():ElementsOfFolder[] {
    return this.listOfCourses;
  }
}
