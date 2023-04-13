import { Component } from '@angular/core';
import { convertDate } from './core/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    let date =new Date();
    // dd-mm-yyyy
    console.log(convertDate(date))

  }

}
