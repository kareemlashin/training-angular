import { Component } from '@angular/core';
import { convertDate } from 'src/app/core/helpers';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(){
    let date =new Date();
    // dd-mm-yyyy
    console.log(convertDate(date))
  }

}
