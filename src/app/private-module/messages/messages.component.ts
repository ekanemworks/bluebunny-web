import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  chats_list: any[]=[];

  constructor(private router: Router){

  }

  ngOnInit(){
    this.chats_list = [
      {
        channelId: '1234',
        name: 'Ekanem',
        lastMsg: '',
        lastMsgTime:'',
        user_photo:''
      },
      {
        channelId: '4444',
        name: 'Emeka',
        lastMsg: '',
        lastMsgTime:'',
        user_photo:''
      },
      {
        channelId: '3333',
        name: 'Justin',
        lastMsg: '',
        lastMsgTime:'',
        user_photo:''
      },
      {
        channelId: '9999',
        name: 'Rachael',
        lastMsg: '',
        lastMsgTime:'',
        user_photo:''
      }
    ]
  }

  openMessgaPage(channelId:any){
    this.router.navigate(['/account/message-page'], { queryParams: {channelId: channelId} })
  }

}
