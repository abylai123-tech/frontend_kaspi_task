<template>
  <div class="market-container">
    <header class="market-header">
      <button class="back-button">Back</button>
      <h1>Market</h1>
      <button class="filter-button">Filter</button>
    </header>
    <input type="text" class="search-bar" v-model="searchQuery" placeholder="Search" />
    <section class="section">
      <h2>Hot deals</h2>
      <div class="grid-container">
        <div class="item" v-for="item in filteredHotDeals" :key="'hot-' + item.id">
          <div class="item-image"></div>
          <div class="item-name">{{ item.name }}</div>
          <span class="item-price">{{ item.price }}</span>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>Trending</h2>
      <div class="grid-container">
        <div class="item" v-for="item in filteredTrending" :key="'trend-' + item.id">
          <div class="item-image"></div>
          <div class="item-name">{{ item.name }}</div>
          <span class="item-price">{{ item.price }}</span>
        </div>
      </div>
    </section>
    <div class="bottom-nav">
      <button
        v-for="(dot, index) in dots"
        :key="index"
        :class="['nav-item', { active: activeDot === index }]"
        @click="setActiveDot(index)"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useMarketStore } from '../store/useMarketStore';

export default defineComponent({
  name: 'Market',
  setup() {
    const searchQuery = ref('');
    const marketStore = useMarketStore();

    onMounted(() => {
      marketStore.setHotDeals([
        { id: 1, name: 'Item #1 Name Goes Here', price: '$19.99' },
        { id: 2, name: 'Item #2 Name Goes Here', price: '$29.99' },
        { id: 3, name: 'Item #3 Name Goes Here', price: '$39.99' },
        { id: 4, name: 'Item #4 Name Goes Here', price: '$49.99' }
      ]);
      marketStore.setTrendingItems([
        { id: 1, name: 'Item #1 Name Goes Here', price: '$19.99' },
        { id: 2, name: 'Item #2 Name Goes Here', price: '$29.99' },
        { id: 3, name: 'Item #3 Name Goes Here', price: '$39.99' },
        { id: 4, name: 'Item #4 Name Goes Here', price: '$49.99' }
      ]);
    });

    const filteredHotDeals = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return marketStore.hotDeals.filter(item =>
        item.name.toLowerCase().includes(query) || item.price.toLowerCase().includes(query)
      );
    });

    const filteredTrending = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return marketStore.trendingItems.filter(item =>
        item.name.toLowerCase().includes(query) || item.price.toLowerCase().includes(query)
      );
    });

    const dots = ref([0, 1, 2, 3]);
    const activeDot = ref(0);

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    return {
      searchQuery,
      filteredHotDeals,
      filteredTrending,
      dots,
      activeDot,
      setActiveDot
    };
  }
});
</script>

<style scoped lang="scss">
.market-container {
  padding: 20px;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.market-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .back-button, .filter-button {
    background: none;
    border: none;
    color: #4CAF50;
    font-size: 16px;
    cursor: pointer;
  }

  h1 {
    font-size: 24px;
    margin: 0;
  }
}

.search-bar {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background-color: #F6F6F6;
}

.section {
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .item-image {
        width: 100%;
        padding-bottom: 100%;
        background-color: #F6F6F6;
        border-radius: 8px;
        margin-bottom: 10px;
      }

      .item-name {
        font-size: 14px;
        margin-bottom: 5px;
      }

      .item-price {
        font-size: 14px;
        color: #757575;
      }
    }
  }
}

.bottom-nav {
  display: flex;
  justify-content: space-evenly;
  padding: 16px;
  background-color: #F6F6F6;
  border-radius: 12px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);
  
  button.nav-item {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #E0E0E0;
    border: none;
    cursor: pointer;

    &.active {
      background-color: #4CAF50;
    }
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .bottom-nav {
    padding: 4px 0;
    position: absolute;
    bottom: 8px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    justify-content: space-around;
  }

  button.nav-item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #E0E0E0;
    border: none;
    cursor: pointer;

    &.active {
      background-color: #4CAF50;
    }
  }
}
</style>
