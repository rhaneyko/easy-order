import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PedidosComponent } from './features/pedidos/pedidos.component';
import { MesasComponent } from './features/mesas/mesas.component';
import { CardapioComponent } from './features/cardapio/cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PedidosComponent,
    MesasComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
