import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LayoutComponent,
        loadChildren: (() => import('./landing-page/landing-page.routes').then(m => m.routes))
    },
    {
        path: 'auth',
        loadChildren: (() => import('./admin/admin.routes').then(m => m.routes))
    },
    {
        path: 'admin',
        loadChildren: (() => import('./auth/auth.routes').then(m => m.routes))
    }

];
