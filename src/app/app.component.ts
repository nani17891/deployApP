import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="getsure Infotech";
  childData:string;
  childData1:string[];
  masterArray:string[]=['raju','kali','koramandal'];
  parentMethod(data){
    this.childData=data;
  }
  x:number;
  increment(data1){
    this.x=data1;
    this.x++;
  }
  decrement(data1){
    this.x=data1;
    this.x--;
  }
  eventHandler(event:string[]){
    this.childData1=event;
  }

}
