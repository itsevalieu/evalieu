import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  appTitle: string = 'EVA LIEU';
  navVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    if( !this.navVisible) {
      this.navVisible = true;
    } else {
      this.navVisible = false
    }
    console.log(this.navVisible);
  }

}
