import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export default class ProjectsComponent {
  currentIndex = 0; // Índice de la tarjeta actual
  isModalOpen: boolean = false;



  // Array de tarjetas
  projects = [
    {
      name: 'Needvox',
      role: 'Desarrollo Fullstack',
      image: 'Needvox.png',
      description: [
        { title: 'Dashboard', detail: 'Control de ventas, gastos y ganancias.' },
        { title: 'Productos', detail: 'CRUD para gestionar productos, precios y stock.' },
        { title: 'Historial', detail: 'Agregar productos al carrito y generar ventas.' },
        { title: 'Compras', detail: 'CRUD para gestionar compras y precios de productos.' },
        { title: 'Perfil', detail: 'Visualización y edición de la información del usuario.' },
        { title: 'Admin', detail: 'Gestión de usuarios y productos registrados.' },
        { title: 'Seguridad', detail: 'Guards, validaciones y alertas de sistema.' },
        { title: 'Búsqueda', detail: 'Buscar productos por código de barras o nombre.' },

      ],
      technologies: [
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
        { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
        { name: 'Typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg' },
      ],
      pageUrl: 'https://needvox.com',
      repoUrl: 'https://github.com/jaavispeed/Needvox',
    },
    {
      name: 'Sistema de Autenticacion',
      role: 'Desarrollo FullStack',
      image: 'LoginAndRegister.PNG',
      description: [
        { title: 'Sistema de Login', detail: 'Permite a los usuarios iniciar sesión de forma segura.' },
        { title: 'Sistema de Registro', detail: 'Los usuarios pueden registrarse en la plataforma.' },
        { title: 'Perfil de Usuario', detail: 'Visualización de los datos del usuario en su perfil.' },
        { title: 'Protección de Rutas', detail: 'Acceso restringido a ciertas secciones según autenticación.' },
        { title: 'Validación de Formularios', detail: 'Verificación de datos en formularios para asegurar su validez.' },
        { title: 'Manejo de Errores', detail: 'Gestión adecuada de errores en el sistema.' },


      ],
      technologies: [
        { name: 'Laravel 11.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
        { name: 'Vue 3.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        { name: 'TailwindCSS.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'SQLite.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
      ],
      pageUrl: '',
      repoUrl: 'https://github.com/jaavispeed/login-and-register',
    },
  ];


  // Cambiar la tarjeta actual
  changeCard(direction: 'prev' | 'next') {
    if (direction === 'prev') {
      this.currentIndex =
        (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    } else {
      this.currentIndex =
        (this.currentIndex + 1) % this.projects.length;
    }
  }





  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
