export const structuredCoinData(data) {
  const coin = data

  return {
    coin: {
      name: coin.name || null,
      last_updated: coin.last_updated || null,
      marketData: {
        allTimeHigh: {
          ath: coin.market_data.ath.usd || null,
          ath_cp: coin.market_data.ath_change_percentage.usd || null,
          ath_date: coin.market_data.ath_date.usd || null,
        },

        allTimeLow: {
          atl: coin.market_data.atl.usd || null,
          atl_cp: coin.market_data.atl_change_percentage.usd || null,
          atl_date: coin.market_data.atl_date.usd || null,
        },
        pricing: {
          currentPrice: coin.market_data.current_price.usd || null,
          high_24h: coin.market_data.high_24h.usd || null,
          low_24h: coin.market_data.low_24h.usd || null,
          change_24h: coin.market_data.price_change_24h_in_currency.usd || null,
          pcp_1h:
            coin.market_data.price_change_percentage_1h_in_currency.usd || null,
          pcp_24h: coin.market_data.price_change_percentage_24h || null,
          pcp_7day: coin.market_data.price_change_percentage_7d || null,
          pcp_14day: coin.market_data.price_change_percentage_14d || null,
          pcp_30day: coin.market_data.price_change_percentage_30d || null,
          pcp_60day: coin.market_data.price_change_percentage_60d || null,
          pcp_200day: coin.market_data.price_change_percentage_200d || null,
          pcp_1year: coin.market_data.price_change_percentage_1y || null,
        },
      },
    },
  };
}
