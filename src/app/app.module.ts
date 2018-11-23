import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosService } from './usuarios.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'pedidos', component: PedidosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    LoginComponent,
    PedidosComponent,
    NavbarComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
