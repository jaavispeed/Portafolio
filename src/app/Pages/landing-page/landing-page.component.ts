import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import SpinnerComponent from "../../shared/pages/spinner/spinner.component";
import { RouterModule } from '@angular/router';
import ProjectsComponent from '../projects/projects.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, RouterModule, ProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export default class LandingPageComponent {

  loading: boolean = false;
  menuOpen: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  // Después de 3 segundos, ocultamos el spinner
    }, 3000);
  }

  toggleMenu():void{
    this.menuOpen = !this.menuOpen;
  }

    // Controlamos el tamaño de la ventana para restaurar el menú
    @HostListener('window:resize')
    onResize() {
      if (window.innerWidth >= 768) {  // El umbral puede ser el de 'md' o cualquier tamaño que decidas
        this.menuOpen = false; // Restauramos el menú al tamaño grande
      }
    }

  scrollToAboutMe() {
    const aboutMeElement = document.getElementById('projects');
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
