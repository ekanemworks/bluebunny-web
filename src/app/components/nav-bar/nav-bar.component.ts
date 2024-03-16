import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  appResource = [
    {name: 'Matching', route: 'home', icon: 'ungroup'},
    {name: 'Interested', route: 'likedby', icon: 'heart'},
    {name: 'Messages', route: 'messages', icon: 'message'},
    {name: 'Bookmark', route: 'bookmark', icon: 'book'},
  ]

}
