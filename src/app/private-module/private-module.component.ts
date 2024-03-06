import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-private-module',
  templateUrl: './private-module.component.html',
  styleUrls: ['./private-module.component.scss']
})
export class PrivateModuleComponent {

  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resizeMain()
  }

  ngOnInit(): void {}

  resizeMain(){
    if (window.innerWidth < 760) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  

}
