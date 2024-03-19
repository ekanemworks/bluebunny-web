import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {

  loading: boolean = false;
  interested_list: any[]=[];

  ngOnInit(): void {
    this.getInterestedList();
    this.resizeMain();
  }

  getInterestedList(){
    // this.loading=true;
    this.interested_list=[
      {
      profile_name:'Michael',
      date_of_birth:'23-07-1997',
      profile_pic:'23-07-1997',
      state_location:'Lagos',
      profession:'Doctor',
      },{
        profile_name:'Michael',
        date_of_birth:'23-07-1997',
        profile_pic:'23-07-1997',
        state_location:'Lagos',
        profession:'Doctor',
      },{
        profile_name:'Michael',
        date_of_birth:'23-07-1997',
        profile_pic:'23-07-1997',
        state_location:'Lagos',
        profession:'Doctor',
      },{
        profile_name:'Michael',
        date_of_birth:'23-07-1997',
        profile_pic:'23-07-1997',
        state_location:'Lagos',
        profession:'Doctor',
      }
    ]

    console.log(this.interested_list.length);
    
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
