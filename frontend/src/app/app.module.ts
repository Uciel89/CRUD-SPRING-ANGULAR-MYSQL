/*===/ Modules /===*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*===/ Components /===*/
import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

/*===/ Services /===*/
import { ServiceService } from './services/service.service';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IndexComponent } from './components/index/index.component';
import { NavComponent } from './components/nav/nav.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
