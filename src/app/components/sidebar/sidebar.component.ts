import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  appResource = [
    {name: 'Matching', route: 'account/home', icon: 'ungroup'},
    {name: 'Search', route: 'account/home', icon: 'search'},
    {name: 'Messages', route: 'account/home', icon: 'message'},
    {name: 'Subscription', route: 'account/home', icon: 'thunderbolt'},
    {name: 'Profile', route: 'account/home', icon: 'user'},
    // {name: 'Settings', route: 'account/home', icon: 'ungroup'},
  ]

}
