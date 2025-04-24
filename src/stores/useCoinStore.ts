import { create } from "zustand";

const DEFAULT_DATA_STATE = [];
const BASE_URL = "https://api.coingecko.com/api/v3";
const FETCH_HEADER = {
  accept: "application/json",
  "x-cg-demo-api-key": "CG-c7WmWDGxgBsFBma9zh72TkTC",
};

const MOCK_USER_COINS = [
  {
    name: "bitcoin",
    owned: 1,
  },
  {
    name: "ethereum",
    owned: 10,
  },
  { name: "dogecoin", owned: 25000 },
];

const fetchCoinData = async (coinName: string) => {
  const res = await fetch(`${BASE_URL}/coins/${coinName}`, {
    method: "GET",
    headers: FETCH_HEADER,
  });

  if (!res.ok) throw Error(res?.error || "Oh no, shit broke.");
  const data = await res.json();

  return data || {};
};

export const useCoinStore = create((set) => ({
  data: DEFAULT_DATA_STATE,
  userCoins: MOCK_USER_COINS,
  loading: false,
  error: null,
  fetchData: async () => {
    const userCoins = MOCK_USER_COINS;
    set({ loading: true, error: null });
    try {
      const promisesArray = userCoins.map((res) => fetchCoinData(res.name));

      await Promise.all(promisesArray)
        .then((responses) => {
          return Promise.all(
            responses.map(async (response) => {
              const cData = await response;

              return {
                name: cData.id || null,
                last_updated: cData?.last_updated || null,
                marketData: {
                  allTimeHigh: {
                    ath: cData?.market_data?.ath?.usd || null,
                    ath_cp:
                      cData?.market_data?.ath_change_percentage?.usd || null,
                    ath_date: cData?.market_data?.ath_date?.usd || null,
                  },

                  allTimeLow: {
                    atl: cData?.market_data?.atl?.usd || null,
                    atl_cp:
                      cData?.market_data?.atl_change_percentage?.usd || null,
                    atl_date: cData?.market_data?.atl_date?.usd || null,
                  },
                  pricing: {
                    currentPrice:
                      cData?.market_data?.current_price?.usd || null,
                    high_24h: cData?.market_data?.high_24h?.usd || null,
                    low_24h: cData?.market_data?.low_24h?.usd || null,
                    change_24h:
                      cData?.market_data?.price_change_24h_in_currency?.usd ||
                      null,
                    pcp_1h:
                      cData?.market_data?.price_change_percentage_1h_in_currency
                        ?.usd || null,
                    pcp_24h:
                      cData?.market_data?.price_change_percentage_24h || null,
                    pcp_7day:
                      cData?.market_data?.price_change_percentage_7d || null,
                    pcp_14day:
                      cData?.market_data?.price_change_percentage_14d || null,
                    pcp_30day:
                      cData?.market_data?.price_change_percentage_30d || null,
                    pcp_60day:
                      cData?.market_data?.price_change_percentage_60d || null,
                    pcp_200day:
                      cData?.market_data?.price_change_percentage_200d || null,
                    pcp_1year:
                      cData?.market_data?.price_change_percentage_1y || null,
                  },
                },
              };
            })
          );
        })
        .then((d) => {
          set({ data: d, loading: false, userCoins });
        });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
