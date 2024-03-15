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

  choice = {
    like: false,
    dislike: false
  }

  constructor() {}


  ngOnInit(): void {

    this.matchFeed();

  }


  matchFeed(){
    this.match_feed_list = [
      {
        profileName: "John Doe",
        imageArray: ['../../assets/test-img.jpeg'],
        dateOfBirth:"12-10-1997",
        stateName:'Lagos'
      },
      {
        profileName: "Tobe Ekanem",
        imageArray: ['../../assets/test-img2.jpeg'],
        dateOfBirth:"12-10-1996",
        stateName:'Ogun'
      },
      {
        profileName: "Raphael",
        imageArray: ['../../assets/test-img3.jpeg'],
        dateOfBirth:"12-10-1999",
        stateName:'Abuja'
      }
    ]


    this.match_feed_list = this.randomizeFeed(this.match_feed_list);
    this.active_feed = this.match_feed_list[this.activeIndex];
  }

  splitImg(imageArrString:any){
    console.log(imageArrString);
    
    // let imgArr =  JSON.parse(imageArrString)
    // console.log(imgArr);
    // let img = imgArr[0];
    return imageArrString[0];
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
    this.choice.like = true
    let seconds = 1
    let timer = setInterval(() => {
      seconds--;
      if (seconds < 0) {
          clearInterval(timer);
          this.nextAgent();
      }
    }, 500);
  } 


  dislike_feed(){
    this.choice.dislike=true
    let seconds = 1
    let timer = setInterval(() => {
      seconds--;
      if (seconds < 0) {
          clearInterval(timer);
          this.nextAgent();
      }
    }, 500);
  }

  initiateChat(){
    
  }


  nextAgent(){
    this.choice.dislike = false;
    this.choice.like = false;
    this.activeIndex++
    if ((this.match_feed_list.length)>this.activeIndex) {
      this.active_feed = this.match_feed_list[this.activeIndex];  
    } else {
      this.activeIndex = 0;
      this.active_feed = this.match_feed_list[this.activeIndex];  

      // this.alertMessage.create('warn','Wait for 3 minutes')
    }
  }


  calculateAgeFromDOB(date_of_birth:any){
    // Parse the input date string into a Date object
   const dob: Date = new Date(date_of_birth);
   
   // Get the current date
   const currentDate: Date = new Date();

   // Calculate the difference in years between current date and birth year
   const age: number = currentDate.getFullYear() - dob.getFullYear();

   // Check if the birthday has occurred this year or not
   const hasBirthdayOccurred: boolean =
     currentDate.getMonth() > dob.getMonth() ||
     (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() >= dob.getDate());

   // If birthday hasn't occurred this year, subtract 1 from the age
   return hasBirthdayOccurred ? age : age - 1;
 }




}
