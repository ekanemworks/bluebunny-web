import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  conversation: any[]=[];
  userData: any;

  constructor(){

    this.userData={
      sid:1
    };

  }

  ngOnInit(): void {
    this.conversation = [
      {
        message: "Hello! How can I help you?",
        userId:  1
      },
      {
        message: "Are you there ?",
        userId:  1
      },
      {
        message: "Yes i am",
        userId:  2
      },
      {
        message: "So when do we star?",
        userId:  1
      },
      {
        message: "Now",
        userId:  2
      },
    ]
    // throw new Error('Method not implemented.');
  }

}
