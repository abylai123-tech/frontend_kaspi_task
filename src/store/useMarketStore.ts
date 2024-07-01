import { defineStore } from 'pinia';

interface MarketItem {
  id: number;
  name: string;
  price: string;
}

export const useMarketStore = defineStore('market', {
  state: () => ({
    hotDeals: [] as MarketItem[],
    trendingItems: [] as MarketItem[],
  }),
  actions: {
    setHotDeals(items: MarketItem[]) {
      this.hotDeals = items;
    },
    setTrendingItems(items: MarketItem[]) {
      this.trendingItems = items;
    },
  },
});
