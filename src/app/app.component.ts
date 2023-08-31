import { Component } from '@angular/core';
import { IArticulo } from './articulo/IArticulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    articulos: IArticulo[] = [
      {
        titulo: 'Angular',
        tituloSeccion: 'Aprendiendo Angular',
        contenido: 'Angular es un framework para desarrollo de aplicaciones web',
        enlace: {
          href: 'https://angular.io',
          texto: 'Angular'
        }
      },
      {
        titulo: 'React',
        tituloSeccion: 'Aprendiendo React',
        contenido: 'React es una libreria para desarrollo de aplicaciones web',
        enlace: {
          href: 'https://reactjs.org/',
          texto: 'React'
        }
      },
      {
        titulo: 'Vue',
        tituloSeccion: 'Aprendiendo Vue',
        contenido: 'Vue es un framework para desarrollo de aplicaciones web',
        enlace: {
          href: 'https://vuejs.org',
          texto: 'Vue'
        }
      },
      {
        titulo: 'Angular',
        tituloSeccion: 'Aprendiendo Angular',
        contenido: 'Angular es un framework para desarrollo de aplicaciones web',
        enlace: {
          href: 'https://angular.io',
          texto: 'Angular'
        }
      },
      {
        titulo: 'React',
        tituloSeccion: 'Aprendiendo React',
        contenido: 'React es una libreria para desarrollo de aplicaciones web',
        enlace: {
          href: 'https://reactjs.org/',
          texto: 'React'
        }
      },
      {
        titulo: 'Vue',
        tituloSeccion: 'Aprendiendo Vue',
        contenido: 'Vue es un framework para desarrollo de aplicaciones web',
        enlace: {
          href: 'https://vuejs.org',
          texto: 'Vue'
        }
      }
    ]
}
