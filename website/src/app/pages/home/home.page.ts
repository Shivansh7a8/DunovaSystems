import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
  
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {

}