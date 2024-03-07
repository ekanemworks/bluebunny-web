import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  @Input()
  title!: string;

  @Input()
  showFilterBtn!: boolean;
  
  @Input()
  showUpdateProfileBtn!: boolean
  
  @Output() btnClick = new EventEmitter();

  onClick() {
		this.btnClick.emit();
	}
  
}
