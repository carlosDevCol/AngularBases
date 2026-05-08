import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [

    {
        path: '',
        component: CounterPage
    },
    {
        path: 'hero',
        component: HeroPage
    },
    {
        path: 'dragonball',
        component: Dragonball
    },
    {
        path: '**',
        redirectTo: ''
    }
];
