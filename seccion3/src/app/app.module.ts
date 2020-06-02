import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { HeroeService } from './servicios/heroes.service';

//componenetes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
