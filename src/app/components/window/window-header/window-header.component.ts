import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.css']
})

export class WindowHeaderComponent implements OnInit {

  @Input() maximized:boolean

  constructor() { }

  ngOnInit() {
  }

  minimize(){
    this.maximized = false;
  }

  maximize(){
    this.maximized = true;
  }

  close(){

  }

  backward(){

  }

  forward(){

  }

  up(){
    // var elements = this.getElements(this.selectedRow);
    // if(elements){
    //   this.dataSource = new MatTableDataSource(elements);
    //   this.dataSource.sort = this.sort;
    // }    
  }
}
