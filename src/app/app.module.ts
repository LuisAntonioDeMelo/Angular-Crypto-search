import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
//components
import { AppComponent } from './app.component';
import { CoinComponent } from './coin/coin.component';
import { CoinService } from './coin.service';

@NgModule({
  declarations: [
    AppComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    CoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
