import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-private-module',
  templateUrl: './private-module.component.html',
  styleUrls: ['./private-module.component.scss']
})
export class PrivateModuleComponent {

  isMobileView: boolean = false;
  pri_style = 'padding-top: 40px; padding-left: 40px; padding-right: 40px;';

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resizeMain()
  }

  ngOnInit(): void {
    this.resizeMain();
  }

  resizeMain(){
    if (window.innerWidth < 760) {
      this.isMobileView = true;
      this.pri_style = 'padding:0px';
    } else {
      this.isMobileView = false;
      this.pri_style = 'padding-top: 40px; padding-left: 40px; padding-right: 40px;';
    }
  }

  

}
