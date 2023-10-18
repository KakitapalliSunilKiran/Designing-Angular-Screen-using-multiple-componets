import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    header:string='We Offer all kind of Tech courses 123';
    image:string='assets/Computer pic.PNG';
    check:boolean=false
}
