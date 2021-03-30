import { Component,Input, Output,EventEmitter, OnInit,OnDestroy } from '@angular/core';
import { CommunicationserService } from '../communicationser.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {
  
  a:number=10;
  @Input() uname:string;
  @Output() notify =new EventEmitter<string>();
  passData(){
    this.notify.emit("message is coming from child component...")
  }
  
  @Output() addNum=new EventEmitter();
      sum(){
        this.addNum.emit(this.a)
      }
      @Output() subNum=new EventEmitter();
      subtract(){
        this.subNum.emit(this.a)
      }
      public customers=[]
       
       constructor(private custser:CommunicationserService){}

    ngOnInit(){
        this.custser.getCustomers()
            .subscribe(data => this.customers=data);
    }
    @Input() masterArray1: string[];
    
    @Output() data: EventEmitter<string[]> = new EventEmitter<string[]>();


sendingArray() {
   this.data.emit(['name1', 'name2', 'name3']);
}
ngOnDestroy(): void {
  this.customers.unsubscribe();
}


   
  }