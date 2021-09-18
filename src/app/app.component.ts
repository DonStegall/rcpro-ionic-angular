import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'warning' },
    { title: 'Rules', url: '/rules', icon: 'warning' },
    { title: 'Home One', url: '/folder/RCPRO Home', icon: 'mail' },
    { title: 'Forums', url: '/folder/RCPRO Forums', icon: 'paper-plane' },
    { title: 'Rules', url: '/folder/RCPRO Rules', icon: 'heart' },
    { title: 'Standings', url: '/folder/RCPRO Standings', icon: 'archive' },
    { title: 'Officers', url: '/folder/RCPRO Officers', icon: 'trash' },
    { title: 'Contact Us', url: '/folder/RCPRO Contact Us', icon: 'warning' },
  ];

  constructor() {}

}
