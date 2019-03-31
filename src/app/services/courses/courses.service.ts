import { Injectable } from '@angular/core';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private listOfCourses: ElementsOfFolder[] = [
    { name:'Angular', date: new Date("12/08/2017"), type:"Folder", category:'course', parent:'' }, 
    { name:'Bootstrap', date: new Date("02/14/2016"), type:"Folder", size:"", category:'course', parent:'' },
    { name:'Vue', date: new Date("05/19/2017"), type:"Folder", size:"" , category:'course', parent:''}
  ];

  private listOfAngular: ElementsOfFolder[] = [
    { name:'Experto en Angular UA', date: new Date("10/23/2016"), type:"Folder", category:'course', parent:'Angular' }, 
    { name:'Angular 2', date: new Date("12/08/2017"), type:"Folder", category:'course', parent:'Angular' }, 
    { name:'Angular 7', date: new Date("03/08/2019"), type:"Folder", category:'course', parent:'Angular' }
  ];

  GetListOfCourses= function(filter?:string):ElementsOfFolder[] {
    return filter ? this.listOfAngular : this.listOfCourses;
  }
}
