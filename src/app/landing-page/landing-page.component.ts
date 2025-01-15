import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import SpinnerComponent from "../shared/pages/spinner/spinner.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export default class LandingPageComponent {

  loading: boolean = true;
  menuOpen: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  // Después de 5 segundos, ocultamos el spinner
    }, 5000);
  }

  toggleMenu():void{
    this.menuOpen = !this.menuOpen;
  }

}
