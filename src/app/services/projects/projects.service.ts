import { Injectable } from '@angular/core';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  private listOfProjects: ElementsOfFolder[] = [
    { name:'Frontal', date : new Date("03/27/2019"), type:'Folder', category:'project', parent:'' }, 
    { name:'MueveOjos', date: new Date("11/15/2018"), type:'Folder', category:'project', parent:'' },
    { name:'Gymapp', date: new Date("11/14/2018"), type:'Folder', category:'project', parent:'' },
    { name:'MemoryGame', date: new Date("03/26/2018"), type:'Folder', category:'project', parent:'' }
  ];

  GetListOfProjects = function(filter?:string):ElementsOfFolder[] {
    return this.listOfProjects;
  }
}
