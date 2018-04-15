import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NgMaterialModule } from './ng-material.module';
import { ZadatakService } from './services/zadatak.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NgMaterialModule
  ],
  providers: [ZadatakService],
  bootstrap: [AppComponent]
})
export class AppModule { }
