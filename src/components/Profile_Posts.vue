<template>
  <div class="profile-container">
    <header class="header">
      <button class="settings-btn">Settings</button>
      <h1 class="title">Profile</h1>
      <button class="logout-btn">Logout</button>
    </header>
    <div class="profile-info">
      <img src="../assets/profile.png" alt="Profile Picture" class="profile-picture" />
      <h2 class="name">Victoria Robertson</h2>
      <p class="mantra">A mantra goes here</p>
    </div>
    <div class="tabs">
      <button class="tab" :class="{ active: activeTab === 'posts' }" @click="activeTab = 'posts'">Posts</button>
      <button class="tab" :class="{ active: activeTab === 'photos' }" @click="activeTab = 'photos'">Photos</button>
    </div>
    <div class="posts-list" v-if="activeTab === 'posts'">
      <div class="post" v-for="(post, index) in posts" :key="index">
        <div class="post-header">
          <div class="post-image"></div>
          <div class="post-content">
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-text">{{ post.content }}</p>
          </div>
          <span class="post-time">{{ post.time }}</span>
        </div>
      </div>
    </div>
    <div class="photos-list" v-if="activeTab === 'photos'">
      <div class="photo-block" v-for="(photo, index) in photos" :key="index">
        <img :src="photo.src" alt="Photo" class="photo-image"/>
        <div class="photo-header">{{ photo.header }}</div>
      </div>
    </div>
    <nav class="bottom-nav">
      <button
        v-for="(dot, index) in dots"
        :key="index"
        :class="['nav-dot', { active: activeDot === index }]"
        @click="setActiveDot(index)"
      ></button>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useProfileStore } from '../store/useProfileStore';

export default defineComponent({
  name: 'ProfilePosts',
  setup() {
    const activeTab = ref('posts');
    const profileStore = useProfileStore();
    
    onMounted(() => {
      profileStore.setPosts([
        { id: 1, title: 'Header 1', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '8m ago' },
        { id: 2, title: 'Header 2', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '15m ago' },
        { id: 3, title: 'Header 3', content: 'He\'ll want to use your yacht, and I don\'t want this thing smelling like fish.', time: '22m ago' },
      ]);

      profileStore.setPhotos([
        { id: 1, src: 'https://via.placeholder.com/100', header: 'Photo 1' },
        { id: 2, src: 'https://via.placeholder.com/100', header: 'Photo 2' },
      ]);
    });

    const posts = profileStore.posts;
    const photos = profileStore.photos;

    const activeDot = ref(0);
    const dots = ref(new Array(5).fill(''));

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    return {
      activeTab,
      posts,
      photos,
      activeDot,
      dots,
      setActiveDot,
    };
  },
});
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  padding: 0;
  margin: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5DB075;
    padding: 16px;
    width: 100%;
    height: 250px;
    box-sizing: border-box;

    .settings-btn,
    .logout-btn {
      color: #ffffff;
      background: none;
      border: none;
      font-size: 18px;
    }

    .title {
      font-size: 28px;
      font-weight: bold;
      color: #ffffff;
    }
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: 60px;

    .profile-picture {
      width: 155px;
      height: 155px;
      margin-bottom: 16px;
    }

    .name {
      font-size: 24px;
      font-weight: bold;
      margin: 8px 0;
    }

    .mantra {
      font-size: 16px;
      color: #555;
    }
  }

  .tabs {
    display: flex;
    justify-content: center;
    background-color: #fff; 
    border-radius: 20px;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: 40px;

    .tab {
      flex: 1;
      padding: 10px 20px;
      text-align: center;
      border: none;
      background-color: #f1f1f1;
      color: #5DB075;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin: 0 auto;

      &.active {
        background-color: green;
        color: white;
      }
    }
  }

   .photos-list {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }

  .photo-block {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
    background-color: #e0e0e0;
    height: 200px; 
  }

  .photo-header {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 16px;
  }

  .posts-list {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }

  .post {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
  }

  .post-header {
    display: flex;
    align-items: center;

    .post-image {
      width: 40px;
      height: 40px;
      background-color: #e0e0e0;
      border-radius: 4px;
      margin-right: 16px;
    }

    .post-content {
      flex: 1;

      .post-title {
        font-size: 16px;
        font-weight: bold;
      }

      .post-text {
        font-size: 14px;
        color: #555;
      }
    }

    .post-time {
      font-size: 12px;
      color: #aaa;
    }
  }

  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background-color: #f9f9f9;
    padding: 10px;

    .nav-dot {
      width: 15px;
      height: 15px;
      background-color: #e0e0e0;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
      border: none;
    }

    .nav-dot.active {
      background-color: green;
    }
  }
}

@media (max-width: 768px) {
  .profile-info {
    .profile-picture {
      width: 80px;
      height: 80px;
    }
  }
}

@media (max-width: 480px) {
  .header {
    padding: 12px 8px;
    height: auto;
    position: relative;
    bottom: 10px;

    .title {
      font-size: 24px;
    }
  }

  .profile-info {
    margin-top: -40px;

    .profile-picture {
      position: relative;
      top: 40px;
      width: 80px;
      height: 80px;
    }

    .name {
      font-size: 20px;
    }

    .mantra {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }

  .tabs {
    display: flex;
    justify-content: center;
    background-color: #fff; 
    border-radius: 20px;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    position: relative;
    bottom: 40px;

    .tab {
      font-size: 14px;
      padding: 10px 20px;
    }
  }

  .photos-list {
    position: relative;
    bottom: 20px;

    .photo-block {
      padding: 12px;
      height: 200px; 
    }

    .photo_header {
      font-size: 14px;
      font-weight: bold;
      margin-top: 16px;
    }

    .post-header {
      .post-image {
        width: 30px;
        height: 30px;
      }

      .post-content {
        .post-title {
          font-size: 14px;
        }

        .post-text {
          font-size: 12px;
        }
      }

      .post-time {
        font-size: 10px;
      }
    }
  }

  .bottom-nav {
    padding: 4px 0;
    width: 100%;
    justify-content: space-around;

    .nav-dot {
      width: 30px;
      height: 30px;
      margin: 0 3px;
    }
  }
}
</style>
