<template>
  <div class="content-container">
    <header class="content-header">
      <button class="back-button">Back</button>
      <h1>Content</h1>
      <button class="filter-button">Filter</button>
    </header>
    <input type="text" class="search-bar" v-model="searchQuery" placeholder="Search" />
    <div v-for="item in filteredContent" :key="item.id" class="content-block">
      <div class="content-image"></div>
      <div class="content-details">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <div class="details-footer">
          <span class="time-ago">{{ item.time }}</span>
          <div class="pagination">
            <div
              v-for="(dot, index) in dots"
              :key="index"
              :class="['pagination-dot', { active: activeDot === index }]"
              @click="setActiveDot(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="gray-block"></div>
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
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Content',
  setup() {
    const searchQuery = ref('');
    const content = ref([
      { id: 1, title: 'Content 1', description: 'Description for content 1', time: '8m ago' },
      { id: 2, title: 'Content 2', description: 'Description for content 2', time: '15m ago' },
      { id: 3, title: 'Content 3', description: 'Description for content 3', time: '22m ago' },
      { id: 4, title: 'Content 4', description: 'Description for content 4', time: '30m ago' },
      { id: 5, title: 'Content 5', description: 'Description for content 5', time: '45m ago' },
    ]);

    const dots = ref([0, 1, 2, 3]);
    const activeDot = ref(0);

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    const filteredContent = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return content.value.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    });

    return {
      searchQuery,
      filteredContent,
      dots,
      activeDot,
      setActiveDot
    };
  }
});
</script>

<style scoped lang="scss">
.content-container {
  padding: 20px;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-header {
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
  width: 50%;
}

.content-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .content-image {
    background-color: #F6F6F6;
    border-radius: 8px;
    height: 200px;
    margin-bottom: 10px;
  }

  .content-details {
    h2 {
      margin: 0;
      font-size: 18px;
    }

    p {
      margin: 5px 0;
      font-size: 16px;
      color: #757575;
    }

    .details-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .time-ago {
        font-size: 14px;
        color: #B0B0B0;
      }

      .pagination {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 16px;

        .pagination-dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #E0E0E0;
          margin: 0 5px;
          cursor: pointer;

          &.active {
            background-color: #4CAF50;
          }
        }
      }
    }
  }
}

.gray-block {
  flex-grow: 1;
  background-color: #F6F6F6;
  border-radius: 8px;
  margin: 20px 0;
}

.bottom-nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  background-color: #F6F6F6;
  border-radius: 12px;
 
  width: 100%;


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

/* Адаптивные стили */
@media (max-width: 600px) {
  .content-container {
    padding: 15px;
  }

  .content-header {
    h1 {
      font-size: 20px;
    }

    .back-button, .filter-button {
      font-size: 14px;
    }
  }

  .search-bar {
    padding: 8px;
    font-size: 14px;
  }

  .content-block {
    .content-image {
      height: 150px;
    }

    .content-details {
      h2 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }

      .details-footer {
        .time-ago {
          font-size: 12px;
        }

        .pagination {
          .pagination-dot {
            width: 8px;
            height: 8px;
            margin: 0 3px;
          }
        }
      }
    }
  }

  .bottom-nav {
    position: absolute;
    bottom: -50px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;

    button.nav-item {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
