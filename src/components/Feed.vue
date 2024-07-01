<template>
  <div class="feed-container">
    <header>
      <button class="back-button">Back</button>
      <h1>Feed</h1>
      <button class="filter-button">Filter</button>
    </header>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search" />
    </div>
    <div class="feed">
      <PostItem v-for="post in filteredPosts" :key="post.id" :post="post" />
      <div class="gray-block"></div>
    </div>
    <nav class="navigation">
      <button
        v-for="(dot, index) in dots"
        :key="index"
        :class="['nav-button', { active: activeDot === index }]"
        @click="setActiveDot(index)"
      ></button>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { usePostStore } from '../store/usePostStore';
import PostItem from '../pages/PostItem.vue';

export default defineComponent({
  name: 'Feed',
  components: {
    PostItem,
  },
  setup() {
    const postStore = usePostStore();
    const searchQuery = ref('');

    onMounted(() => {
      postStore.setPosts([
        { id: 1, title: 'Header 1', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '8m ago' },
        { id: 2, title: 'Header 2', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '15m ago' },
        { id: 3, title: 'Header 3', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '22m ago' },
        { id: 4, title: 'Header 4', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '30m ago' },
        { id: 5, title: 'Header 5', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '45m ago' },
      ]);
    });

    const posts = computed(() => postStore.posts);
    const filteredPosts = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return posts.value.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query)
      );
    });
    const dots = ref([0, 1, 2, 3]);
    const activeDot = ref(0);

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    return {
      searchQuery,
      filteredPosts,
      dots,
      activeDot,
      setActiveDot,
    };
  },
});
</script>

<style scoped lang="scss">
.feed-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

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
    margin-bottom: 10px;
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 25px;
      font-size: 16px;
      background-color: white;
    }
  }

  .feed {
    flex: 1;
    overflow-y: auto;
    background-color: white;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .gray-block {
      height: 150px;
      background-color: #e0e0e0;
      border-radius: 12px;
      margin-top: 10px;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    background-color: white;
    border-top: 1px solid #eee;
    border-radius: 0 0 12px 12px;

    .nav-button {
      width: 15px;
      height: 15px;
      background-color: #ccc;
      border: none;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: #4CAF50;
      }
    }
  }
}

/* Медиазапросы для адаптивного дизайна */
@media (max-width: 600px) {
  .feed-container {
    padding: 10px;
  }

  header {
    h1 {
      font-size: 20px;
    }
    .back-button, .filter-button {
      font-size: 14px;
    }
  }

  .search-bar input {
    font-size: 14px;
    padding: 8px;
  }

  .post-item {
    .post-header {
      .header {
        font-size: 14px;
      }

      .time {
        font-size: 12px;
      }
    }

    .post-body {
      font-size: 12px;
    }
  }

  .navigation {
    .nav-button {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
