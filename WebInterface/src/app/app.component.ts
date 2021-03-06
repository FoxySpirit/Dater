import { Component } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public drawer!: MatDrawer;
  public sideNavControll(drawer: MatDrawer){
    this.drawer = drawer;
  };
}
