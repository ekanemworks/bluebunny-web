import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-me',
  templateUrl: './likes-me.component.html',
  styleUrls: ['./likes-me.component.scss']
})
export class LikesMeComponent implements OnInit{

  loading: boolean = false;
  interested_list: any[]=[];

  exposed_List: any[]=[];

  active_feed: any;
  activeIndex: number = 0;
  isViewMatch: boolean = true;
  
  ngOnInit(): void {
    this.getInterestedList();
    this.resizeMain();
  }

  getInterestedList(){
    // this.loading=true;
    this.interested_list=[
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

 splitImg(imageArrString:any){
    console.log(imageArrString);
    
    // let imgArr =  JSON.parse(imageArrString)
    // console.log(imgArr);
    // let img = imgArr[0];
    return imageArrString[0];
  }


 viewProfile(profileData: any){
  this.isViewMatch = false;
  // this.router.navigate(['/account/view-profile'], { queryParams: {userCode: userCode} })
 }

  closeViewProfile(){
    this.isViewMatch = true;
   }
  
   isMobileView: boolean = false;

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

}
