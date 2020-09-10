import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public sideNav!: MatDrawer;
  public openMenu(): void{
    this.sideNav?.toggle();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
