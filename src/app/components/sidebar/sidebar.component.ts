import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  appResource = [
    {name: 'Matching', route: 'home', icon: 'ungroup'},
    {name: 'Interested', route: 'likedby', icon: 'heart'},
    {name: 'Messages', route: 'messages', icon: 'message'},
    {name: 'Bookmark', route: 'bookmark', icon: 'book'},
    {name: 'Profile', route: 'my-profile', icon: 'user'},
    // {name: 'Settings', route: 'account/home', icon: 'ungroup'},
  ]

}
