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
  menuOpen: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }


  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) {
      this.menuOpen = false;
    }
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
