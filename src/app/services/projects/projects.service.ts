import { Injectable } from '@angular/core';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private listOfProjects: ElementsOfFolder[];

  constructor() { 
    this.listOfProjects = [
      { name:'Frontal', icon: "<span class='mif-folder fg-orange'>" }, 
      { name:'MueveOjos', icon: "<span class='mif-folder fg-orange'>" },
      { name:'Gymapp', icon: "<span class='mif-folder fg-orange'>" }
    ];
  }

  GetListOfProjects = function():ElementsOfFolder[] {
    return this.listOfProjects;
  }
}
