import { Component } from '@angular/core';
import { Coin } from './model/coin.model';
import { CoinService } from './coin.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coins: Coin[]

  constructor(private coinService:CoinService){
    this.coinService.obterCoins()
      .subscribe(coins => this.coins = coins)
  }

  filtrarCoins(busca):void {
    let filtrados =  this.coins.filter( coin =>
        coin.name.toLowerCase().includes(busca.toLowerCase()))
    this.coins = filtrados

    if(busca === ""){
      this.coinService.obterCoins()
      .subscribe(coins => this.coins = coins)
    }
  }

}
