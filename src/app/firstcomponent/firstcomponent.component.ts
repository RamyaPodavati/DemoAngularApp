import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent{

      ngModel: any;
      data = "";
      rating: any;
      value: any;
      temp: any;
      result: string[] = [];
      
      Add(){
        this.value++;
      }
      Delete(){
        this.value--;
      }

      onAddTitle(){
        this.result.push(this.data);
        this.temp = this.result;
      }
}
