import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent {

  @Input()
  profileData!: any;
    
  @Output() btnClick = new EventEmitter();

  closeScreen(){
		this.btnClick.emit();
  }

}
