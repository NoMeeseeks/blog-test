import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {
        path: 'main',
        component: CardComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: '**',
        redirectTo: 'main'
    }


];
