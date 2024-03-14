import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  match_feed_list: any[]=[];
  active_feed: any;
  activeIndex: number = 0;

  constructor() {}


  ngOnInit(): void {

    this.matchFeed();

  }


  matchFeed(){
    this.match_feed_list = [
      {
        profileName: "John Doe",
        imageArray: "['../../assets/test-img.jpeg']",
        dateOfBirth:"12-10-1999"
      },
      {
        profileName: "John Doe",
        imageArray: "['../../assets/test-img2.jpeg']",
        dateOfBirth:"12-10-1999"
      },
      {
        profileName: "John Doe",
        imageArray: "['../../assets/test-img3.png']",
        dateOfBirth:"12-10-1999"
      }
    ]


    this.match_feed_list = this.randomizeFeed(this.match_feed_list);
    this.active_feed = this.match_feed_list[this.activeIndex];
  }

  // Randomizes the order of images in  each feed item
  randomizeFeed<T>(array: T[]): T[] {
      let currentIndex = array.length;
      let temporaryValue: T;
      let randomIndex: number;
  
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
  
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
  
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
  
      return array;
    
  }


  like_feed(){

  }


  dislike_feed(){

  }

  initiateChat(){
    
  }




}
