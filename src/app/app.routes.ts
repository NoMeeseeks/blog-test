import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: (() => import('./landing-page/landing-page.routes').then(m => m.routes))
    }

];
