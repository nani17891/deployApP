import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from  '@angular/common/http'
import { CommunicationserService } from './communicationser.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CommunicationserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
