import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coin } from './model/coin.model';

const api ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'


@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http:HttpClient) { }

  obterCoins():Observable<any>{
    this.http.get(api).subscribe(e => console.log(e))
    return this.http.get<Coin[]>(api)
  }

}
