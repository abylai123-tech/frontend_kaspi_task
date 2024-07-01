<template>
  <div class="post-item">
    <div class="avatar"></div>
    <div class="post-content">
      <div class="post-header">
        <span class="header">{{ post.title }}</span>
        <span class="time">{{ post.time }}</span>
      </div>
      <div class="post-body">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Post {
  id: number;
  title: string;
  content: string;
  time: string;
}

export default defineComponent({
  name: 'PostItem',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.post-item {
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;

  .avatar {
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 20%;
    margin-right: 10px;
  }

  .post-content {
    flex: 1;

    .post-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      .header {
        font-weight: bold;
        font-size: 16px;
      }

      .time {
        color: #999;
        font-size: 14px;
      }
    }

    .post-body {
      font-size: 14px;
      color: #333;
    }
  }
}

/* Медиазапросы для мобильного приложения */
@media (max-width: 600px) {
  .avatar {
    width: 30px;
    height: 30px;
  }

  .post-content {
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
}
</style>
