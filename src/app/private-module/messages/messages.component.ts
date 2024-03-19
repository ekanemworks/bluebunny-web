import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  chats_list: any[]=[];
  matched_list: any[]=[];

  constructor(private router: Router, protected webService: WebService){

  }

  ngOnInit(){
    this.resizeMain()

    this.matched_list = [

      {
        userCode: "123456789",
        profileName: "Raphael",
        imageArray: ['../../assets/test-img7.jpeg'],
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
      },
      {
        userCode: "123456789",
        profileName: "Raphael",
        imageArray: ['../../assets/test-img7.jpeg'],
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
      },
      // {
      //   userCode: "123456789",
      //   profileName: "Raphael",
      //   imageArray: ['../../assets/test-img7.jpeg'],
      //   dateOfBirth:"12-10-1999",
      //   school:'Bowen University',
      //   workPlace:'Interswitch',
      //   stateName:'Abuja'
      // },
      // {
      //   userCode: "123456789",
      //   profileName: "Raphael",
      //   imageArray: ['../../assets/test-img7.jpeg'],
      //   dateOfBirth:"12-10-1999",
      //   school:'Bowen University',
      //   workPlace:'Interswitch',
      //   stateName:'Abuja'
      // },
      // {
      //   userCode: "123456789",
      //   profileName: "Raphael",
      //   imageArray: ['../../assets/test-img7.jpeg'],
      //   dateOfBirth:"12-10-1999",
      //   school:'Bowen University',
      //   workPlace:'Interswitch',
      //   stateName:'Abuja'
      // },
      // {
      //   userCode: "123456789",
      //   profileName: "Raphael",
      //   imageArray: ['../../assets/test-img7.jpeg'],
      //   dateOfBirth:"12-10-1999",
      //   school:'Bowen University',
      //   workPlace:'Interswitch',
      //   stateName:'Abuja'
      // }
    ]
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

  splitImg(img:any){
    return this.webService.splitImg(img)
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
