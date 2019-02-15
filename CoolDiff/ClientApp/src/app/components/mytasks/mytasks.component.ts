import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';


@Component({
  selector: 'mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css'],
    animations: [fadeInOut]
})
export class MyTasksComponent {

}
