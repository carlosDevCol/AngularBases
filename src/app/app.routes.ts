import { Routes } from '@angular/router';
import { count } from 'rxjs';
import { CounterPage } from './pages/counter/counter';

export const routes: Routes = [

    {
        path: '',
        component: CounterPage
    }
];
