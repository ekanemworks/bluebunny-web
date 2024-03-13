import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  match_feed: any[]=[];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }

}
