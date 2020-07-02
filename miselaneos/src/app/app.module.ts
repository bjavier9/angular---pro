import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './componets/ng-style/ng-style.component';
import { CssComponent } from './componets/css/css.component';
import { ClasesComponent } from './componets/clases/clases.component';

@NgModule({
  declarations: [AppComponent, NgStyleComponent, CssComponent, ClasesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
