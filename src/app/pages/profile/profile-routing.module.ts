import { NgModule } from '@angular/core'
import { from } from 'rxjs'
import { RouterModule, Routes } from '@angular/router'
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HistoryComponent } from './components/history/history.component';
import { WishslistsComponent } from './components/wishslists/wishslists.component';



const routes: Routes = [
    {
        path: '',
        component: MyProfileComponent
    },
    {
        path: 'history',
        component: HistoryComponent 
      },
      {
        path: 'wishslist',
        component: WishslistsComponent
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule {}