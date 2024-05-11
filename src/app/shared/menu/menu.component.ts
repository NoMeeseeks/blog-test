import { Component } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public listaMenu: Menu[] = [
    {
      titulo: 'Sobre mi',
      ruta: ''
    },
    {
      titulo: 'Posts recientes',
      ruta: ''
    },
    {
      titulo: 'Sigueme',
      ruta: ''
    },
    {
      titulo: 'Categorias',
      ruta: ''
    }
  ]
}
