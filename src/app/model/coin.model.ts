//modelo

export class Coin {
  id:string
  name:string
  current_price:number
  symbol:string
  market_cap:number
  total_volume:number
  image:string
  price_change_percentage_24h:number
}


/*
Objeto completo .>>>
[
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 11602.16,
    "market_cap": 214345219070,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 243623311833,
    "total_volume": 21042558981,
    "high_24h": 11762.59,
    "low_24h": 11563.0,
    "price_change_24h": -86.02377919,
    "price_change_percentage_24h": -0.73599,
    "market_cap_change_24h": -1968893843.0512087,
    "market_cap_change_percentage_24h": -0.9102,
    "circulating_supply": 18476268.0,
    "total_supply": 21000000.0,
    "max_supply": 21000000.0,
    "ath": 19665.39,
    "ath_change_percentage": -41.06093,
    "ath_date": "2017-12-16T00:00:00.000Z",
    "atl": 67.81,
    "atl_change_percentage": 16993.01221,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2020-09-01T00:56:00.477Z"
  },

*/
