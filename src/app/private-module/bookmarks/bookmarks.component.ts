import { Component } from '@angular/core';

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

}
