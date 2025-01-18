import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import SpinnerComponent from "../../shared/pages/spinner/spinner.component";
import { RouterModule } from '@angular/router';
import ProjectsComponent from '../projects/projects.component';
import SkillsComponent from '../skills/skills.component';
import ContactoComponent from "../contacto/contacto.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, RouterModule, ProjectsComponent, SkillsComponent, ContactoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export default class LandingPageComponent {

  loading: boolean = true;
  menuOpen: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Esta función verifica el tamaño de la pantalla y ajusta el estado del menú
  checkScreenSize(): void {
    if (window.innerWidth < 768) {
      this.menuOpen = false;  // Cierra el menú por defecto en pantallas pequeñas
    } else {
      this.menuOpen = true;   // Mantén el menú abierto en pantallas grandes
    }
  }

  // Detecta el cambio de tamaño de la ventana y cierra el menú si es necesario
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize(); // Llama al método para comprobar el tamaño de la ventana
  }

  scrollToHome() {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }


  scrollToProjects() {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  scrollToSkills() {
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      skillsElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
