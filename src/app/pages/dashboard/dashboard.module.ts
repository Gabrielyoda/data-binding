import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ProductAmountComponent } from './components/product-amount/product-amount.component';
import { PocketComponent } from './components/pocket/pocket.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductAmountComponent,
    PocketComponent,
    NewTransactionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
