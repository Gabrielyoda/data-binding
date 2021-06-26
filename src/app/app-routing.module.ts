import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.module')
            .then((m) => m.PagesModule), //lazy load
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module')
        .then((m) => m.LoginModule)
    }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export  class AppRoutingModule { }
