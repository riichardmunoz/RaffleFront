import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaffleModule } from '@feature/raffle/raffle.module';
import { MAT_DATE_LOCALE} from '@angular/material/core';
import { RaffleRoutingModule } from '@feature/raffle/raffle-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    RaffleModule,
    RaffleRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
