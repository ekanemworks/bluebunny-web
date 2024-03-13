import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;

  conversation: any[]=[];
  userData: any;

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private popMessage: NzMessageService,){

      this.newMessageForm.get('new_message')!.valueChanges.subscribe(selectedValue => {
        // this.getTerritories('territories',selectedValue);
      });

    this.userData={
      sid:1
    };

  }


  newMessageForm: FormGroup<{
    new_message: FormControl<string>;
  }> = this.fb.group({
    new_message: ['', [Validators.required]],
  });


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
      // {
      //   message: "So when do we star?",
      //   userId:  1
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
      // {
      //   message: "Now",
      //   userId:  2
      // },
    ]
    // throw new Error('Method not implemented.');
  }

  sendMsg(){    
    if(this.newMessageForm.valid){
      let msg = this.newMessageForm.value.new_message!;
      this.newMessageForm.setValue({new_message:''});
      let payload = {
        userId:1,
        message:msg,
        channel:''
      }
      this.conversation.push(payload)
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer!.nativeElement.scrollTop = this.myScrollContainer!.nativeElement.scrollHeight;
    } catch(err) { }
  }



}
