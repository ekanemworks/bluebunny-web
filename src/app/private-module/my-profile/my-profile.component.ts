import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  interests_list: any[]=[];
  gallery_list: any[]=[];
  isMobileView: boolean = false

  constructor(private router: Router){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.interests_list = ["Sports", "Reading","Travelling"];
    this.gallery_list = [1,2,3,4,5];
    this.resizeMain()
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resizeMain()
  }


  resizeMain(){
    if (window.innerWidth < 760) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  logout(){
    this.router.navigate(["welcome"])
  }

}
