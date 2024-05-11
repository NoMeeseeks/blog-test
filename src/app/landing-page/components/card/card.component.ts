import { Component } from '@angular/core';
import { Publicacion } from '../../interfaces/publicacion.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public publicaciones: Publicacion[] =
    [
      {
        titulo: 'Discurso de opera',
        descripcionPromo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        descripcion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi doloribus nam, aspernatur impedit deserunt obcaecati! Saepe commodi ipsum quis temporibus, excepturi maxime dolores quod optio adipisci velit facilis vitae.',
        visualizaciones: 234,
        comentarios: 12,
      },
      {
        titulo: 'Discurso de graduacion',
        descripcionPromo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        descripcion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi doloribus nam, aspernatur impedit deserunt obcaecati! Saepe commodi ipsum quis temporibus, excepturi maxime dolores quod optio adipisci velit facilis vitae.',
        visualizaciones: 90,
        comentarios: 80,
      },
      {
        titulo: 'Discurso de 15 años',
        descripcionPromo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        descripcion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi doloribus nam, aspernatur impedit deserunt obcaecati! Saepe commodi ipsum quis temporibus, excepturi maxime dolores quod optio adipisci velit facilis vitae.',
        visualizaciones: 36,
        comentarios: 23,
      },
      {
        titulo: 'Discurso de Canto',
        descripcionPromo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        descripcion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi doloribus nam, aspernatur impedit deserunt obcaecati! Saepe commodi ipsum quis temporibus, excepturi maxime dolores quod optio adipisci velit facilis vitae.',
        visualizaciones: 89,
        comentarios: 56,
      },
    ]
}
