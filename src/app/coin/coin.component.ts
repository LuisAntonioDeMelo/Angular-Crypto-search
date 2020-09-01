import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../model/coin.model'

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() coin:Coin

  constructor() { }

  ngOnInit(): void {
  }

}
