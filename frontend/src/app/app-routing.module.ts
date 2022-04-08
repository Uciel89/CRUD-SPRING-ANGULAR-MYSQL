import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { ListarComponent } from './components/listar/listar.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path:'listar',
    component: ListarComponent
  },
  {
    path:'nuevo',
    component:AddComponent
  },
  {
    path:'editar',
    component:EditComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'crud',
    component: NavComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path:'',
    component:IndexComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
