import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatSort, MatTableDataSource } from '@angular/material';
import { ElementsOfFolder } from 'src/app/models/elementsOfFolder.model';

@Component({
  selector: 'window-body',
  templateUrl: './window-body.component.html',
  styleUrls: ['./window-body.component.css']
})
export class WindowBodyComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @Input() elements: ElementsOfFolder[];

  dataSource = null;
  selectedRow: ElementsOfFolder = null;
  displayedColumns: string[] = ['name', 'date', 'type', 'size'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.elements);
    this.dataSource.sort = this.sort;
  }

  highlight(row){
    this.selectedRow = row;
  }

  open(row:ElementsOfFolder){
    // var elements = this.getElements(row);
    // if(elements){
    //   this.dataSource = new MatTableDataSource(elements);
    //   this.dataSource.sort = this.sort;
    // }    
  }
}
