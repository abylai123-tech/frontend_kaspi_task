<template>
  <div class="search-container">
    <header class="header">
      <button class="back-btn">Back</button>
      <h1 class="title">Content</h1>
      <button class="filter-btn">Filter</button>
    </header>
    <div class="search-bar">
      <input type="text" placeholder="Search" v-model="query" />
    </div>
    <ul class="search-results">
      <li v-for="result in filteredResults" :key="result">{{ result }}</li>
    </ul>
    <nav class="bottom-nav">
      <span
        v-for="(dot, index) in dots"
        :key="index"
        :class="['nav-dot', { active: activeDot === index }]"
        @click="setActiveDot(index)"
      ></span>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  name: 'Search',
  setup() {
    const query = ref('');
    const results = ref([
      'Search result 1',
      'Search result 2',
      'Search result 3',
      'Search result 4',
      'Search result 5',
    ]);
    const activeDot = ref(0);
    const dots = ref(new Array(5).fill(null));

    const filteredResults = computed(() => {
      if (!query.value) return results.value;
      const lowerQuery = query.value.toLowerCase();
      return results.value.filter(result =>
        result.toLowerCase().includes(lowerQuery)
      );
    });

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    return {
      query,
      filteredResults,
      activeDot,
      dots,
      setActiveDot,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-color: #fff;
  padding: 16px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .back-btn,
    .filter-btn {
      color: green;
      background: none;
      border: none;
      font-size: 16px;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 20px;
      font-size: 16px;
    }
  }

  .search-results {
    flex: 1;
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      font-size: 16px;
    }
  }

  .bottom-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px 0px;
    background: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);

    .nav-dot {
      width: 15px;
      height: 15px;
      background-color: #e0e0e0;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
    }

    .nav-dot.active {
      background-color: green;
    }
  }
}

@media (max-width: 480px) {
  .header {
    .title {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }

  .search-bar {
    input {
      padding: 8px;
      font-size: 12px;
    }
  }

  .search-results {
    li {
      padding: 8px;
      font-size: 12px;
    }
  }

  .bottom-nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 4px 0;
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);

    .nav-dot {
      width: 30px;
      height: 30px;
      margin: 0 2px;
    }
  }
}
</style>
