import { Component } from '@angular/core';
import {EtherumServiceService} from "./etherum-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metamaskweb';
  receiverAddress:string|undefined
  value:number|undefined
  messages:string[] = [];
  constructor(private etherumService:EtherumServiceService) {
    this.etherumService.subject.subscribe(data=>{
      this.messages.push(data)
    })
  }
  async sendPayment(){
    this.messages = [];
    if(this.receiverAddress && this.value) {
      await this.etherumService.sendPayment(this.receiverAddress, this.value);
      this.receiverAddress = undefined
      this.value = undefined
    }
  }
}
