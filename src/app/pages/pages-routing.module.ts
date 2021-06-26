import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RouteGuard } from '../shared/guards/route.guard';
//import { RouteGuard } from '../shared/guards/route.guard';
import { PagesComponent } from './pages.component';

const routes : Routes = [
    {

        path: '',
        component: PagesComponent,
        canActivate: [RouteGuard],      
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => import('./home/home.module')
                .then((m) => m.HomeModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module')
                .then((m) => m.DashboardModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module')
                .then((m) => m.ProfileModule)
            },

            
        ]
    },

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}