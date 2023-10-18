import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    disp:string='SUNIL';
    // display(eventData:Event){
    //   this.disp=(<HTMLInputElement>eventData.target).value;
    //   console.log(this.disp);
    // }
    products=[
      {id:"1",name:"Watch",price:"110",image:"assets/Computer pic.PNG",available:"Available"},
      {id:"2",name:"Watch",price:"110",image:"assets/Computer pic.PNG",available:"Not Available"},
      {id:"3",name:"Watch",price:"110",image:"assets/Computer pic.PNG",available:"Available"}
    ]
}
