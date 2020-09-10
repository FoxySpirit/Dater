import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'SideNav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

@Output()
public sideNav: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>();

@ViewChild('drawer',{static: true})
public drawer!:MatDrawer;

  ngOnInit(): void {
    this.sideNav.emit(this.drawer);
  }

}
