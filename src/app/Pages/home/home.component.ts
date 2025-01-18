import { Component } from '@angular/core';
import LandingPageComponent from "../landing-page/landing-page.component";
import AboutMeComponent from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
