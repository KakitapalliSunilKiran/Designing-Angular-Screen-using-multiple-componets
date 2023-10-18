import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `<div class="alert alert-danger" [hidden]="hide">
              <h1>This is Notification component for STS1</h1>
              <button (click)=closebar()>btn</button>
            </div>`,
  styles: ['div{text-align:center}','h1{color:red}']
})
export class NotificationsComponent {
     hide:boolean=false;
      closebar(){
        this.hide=true;
      }

     


}
