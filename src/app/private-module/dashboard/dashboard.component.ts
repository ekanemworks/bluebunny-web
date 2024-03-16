import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalSubscriptionInformationComponent } from 'src/app/components/modals/modal-subscription-information/modal-subscription-information.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  match_feed_list: any[]=[];
  active_feed: any;
  activeIndex: number = 0;
  isViewMatch: boolean = true;
  isMobileView: boolean = false;

  choice = {
    like: false,
    dislike: false
  }

  constructor(private router: Router, 
    private modalService:NzModalService,
    private popMessage: NzMessageService,) {}


  ngOnInit(): void {

    this.matchFeed();
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


  matchFeed(){
    this.match_feed_list = [
      {
        userCode: "123456789",
        profileName: "John Doe",
        imageArray: ['../../assets/test-img.jpeg'],
        dateOfBirth:"12-10-1997",
        school:'Unilag',
        workPlace:'Zenith Bank',
        stateName:'Lagos'
      },
      {
        userCode: "123456789",
        profileName: "Tobe Ekanem",
        imageArray: ['../../assets/test-img3.jpeg'],
        dateOfBirth:"12-10-1996",
        school:'Covenant University',
        workPlace:'Paystack',
        stateName:'Ogun State'
      },
      {
        userCode: "123456789",
        profileName: "Raphael",
        imageArray: ['../../assets/test-img4.jpeg'],
        dateOfBirth:"12-10-1999",
        school:'Bowen University',
        workPlace:'Interswitch',
        stateName:'Abuja'
      },
      {
        userCode: "123456789",
        profileName: "Tobe Ekanem",
        imageArray: ['../../assets/test-img5.jpeg'],
        dateOfBirth:"12-10-1996",
        school:'Covenant University',
        workPlace:'Paystack',
        stateName:'Ogun'
      },
      {
        userCode: "123456789",
        profileName: "Raphael",
        imageArray: ['../../assets/test-img6.jpeg'],
        dateOfBirth:"12-10-1999",
        school:'Bowen University',
        workPlace:'Interswitch',
        stateName:'Abuja'
      },
      {
        userCode: "123456789",
        profileName: "Raphael",
        imageArray: ['../../assets/test-img7.jpeg'],
        dateOfBirth:"12-10-1999",
        school:'Bowen University',
        workPlace:'Interswitch',
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
    }, 200);
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
    }, 200);
  }

  bookmark(){

    this.popMessage.success("Bookmarked!");
    
  }

  initiateChat(){
    const modal = this.modalService.create({
      nzTitle: 'Activate DM',
      nzContent: ModalSubscriptionInformationComponent,
      nzFooter: null, // If you want to customize the footer, provide a template or component here
    });
  
    modal.afterClose.subscribe((result: any) => {

      // if (result) {
      //   this.fetchFiltedFeed(result)
      //   this.filterParameters = result;
      // }
      
    });
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


 viewProfile(userCode: any){
  this.isViewMatch = false;
  // this.router.navigate(['/account/view-profile'], { queryParams: {userCode: userCode} })
 }

 closeViewProfile(){
  this.isViewMatch = true;
 }



}
