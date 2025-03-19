import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PedidosComponent } from './features/pedidos/pedidos.component';
import { MesasComponent } from './features/mesas/mesas.component';
import { CardapioComponent } from './features/cardapio/cardapio.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'cardapio', component: CardapioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
