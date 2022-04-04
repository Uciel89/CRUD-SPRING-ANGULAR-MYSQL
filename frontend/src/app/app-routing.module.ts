import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListarComponent } from './components/listar/listar.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
