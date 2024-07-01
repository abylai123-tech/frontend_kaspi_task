<template>
  <div class="blog-post-container">
    <header class="header">
      <button class="back-btn">Back</button>
      <h1 class="title">Blog Post</h1>
      <button class="filter-btn">Filter</button>
    </header>
    <div class="content">
      <div class="grey-block"></div>
      <h2 class="post-title">Post Title Here...</h2>
      <p class="author">Author</p>
      <p class="post-content">
        Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. Dolore exercitation nulla tempor consequat aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure quis nulla eu consequat fugiat Lorem sunt magna et consequat labore. Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod culpa exercitation consectetur.
      </p>
      <p class="post-content">
        Fugiat do aliqua laboris cillum sint dolor officia adipisicing excepteur fugiat officia. Cupidatat ut elit consequat ea laborum occaecat laborum aute consectetur Lorem exercitation. Lorem anim minim officia aliquip commodo deserunt mollit. Duis deserunt quis cillum voluptate duis ipsum quis incididunt elit excepteur excepteur labore duis cillum. Voluptate sint nulla minim.
      </p>
    </div>
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BlogPost',
  setup() {
    const activeDot = ref(0);
    const dots = ref(new Array(5).fill(null));

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    return {
      activeDot,
      dots,
      setActiveDot,
    };
  },
});
</script>

<style lang="scss" scoped>
.blog-post-container {
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

  .content {
    flex: 1;
    overflow-y: auto;

    .post-title {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .grey-block {
      height: 200px;
      background-color: #f1f1f1;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    .author {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .post-content {
      font-size: 16px;
      color: #555;
      line-height: 1.5;
      margin-bottom: 16px;
    }
  }

  .bottom-nav {
    display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 16px;
      background: white;
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);

    .nav-dot {
      width: 30px;
      height: 30px;
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

@media (max-width: 768px) {
  .blog-post-container {
    padding: 8px;
  }

  .header {
    .title {
      font-size: 20px;
    }
  }

  .content {
    .post-title {
      font-size: 20px;
    }

    .author {
      font-size: 14px;
    }

    .post-content {
      font-size: 14px;
    }
  }

  .bottom-nav {
        padding: 8px 0;
        position: absolute;
        bottom: 8px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        justify-content: space-around;
    .nav-dot {
      width: 30px;
      height: 30px;
      margin: 0 3px;
    }
  }
}

@media (max-width: 480px) {
  .blog-post-container {
    padding-bottom: 16px;
  }

  .header {

    .title {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }

  .content {
    .grey-block {
      height: 120px;
    }

    .post-title {
      font-size: 18px;
    }

    .author {
      font-size: 12px;
    }

    .post-content {
      font-size: 12px;
    }
  }

  .bottom-nav {
    padding: 4px 0;
    position: absolute;
    bottom: 8px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);

    .nav-dot {
      width: 6px;
      height: 6px;
      margin: 0 2px;
    }
  }
}
</style>
