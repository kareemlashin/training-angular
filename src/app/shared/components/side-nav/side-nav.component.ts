import { Component } from '@angular/core';
import { convertDate } from 'src/app/core/helpers';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor(){
    let date =new Date();
    // dd-mm-yyyy
    console.log(convertDate(date))
  }

}
