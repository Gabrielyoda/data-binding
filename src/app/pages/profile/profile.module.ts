import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HistoryComponent } from './components/history/history.component';
import { WishslistsComponent } from './components/wishslists/wishslists.component';



@NgModule({
  declarations: [
    MyProfileComponent,
    HistoryComponent,
    WishslistsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
