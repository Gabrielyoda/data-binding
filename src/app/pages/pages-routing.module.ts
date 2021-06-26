import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//import { RouteGuard } from '../shared/guards/route.guard';
import { PagesComponent } from './pages.component';

const routes : Routes = [
    {

        path: '',
        component: PagesComponent,      
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module')
                .then((m) => m.HomeModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module')
                .then((m) => m.DashboardModule)
            }

            
        ]
    },

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}