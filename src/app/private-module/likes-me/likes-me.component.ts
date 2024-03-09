import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-me',
  templateUrl: './likes-me.component.html',
  styleUrls: ['./likes-me.component.scss']
})
export class LikesMeComponent implements OnInit{

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
