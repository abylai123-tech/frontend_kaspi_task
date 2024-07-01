<template>
    <div class="burger-menu" :class="{ open: isOpen }">
      <button @click="toggleMenu" class="burger-button">
        <span class="burger-icon"></span>
      </button>
      <nav v-if="isOpen" class="menu-items">
        <router-link to="/signin" @click.native="closeMenu">Sign In</router-link>
        <router-link to="/signup" @click.native="closeMenu">Sign Up</router-link>
        <router-link to="/feed" @click.native="closeMenu">Feed</router-link>
        <router-link to="/content" @click.native="closeMenu">Content</router-link>
        <router-link to="/profile_posts" @click.native="closeMenu">Profile Posts</router-link>
        <router-link to="/market" @click.native="closeMenu">Market</router-link>
        <router-link to="/congratulations" @click.native="closeMenu">Congratulations</router-link>
        <router-link to="/search" @click.native="closeMenu">Search</router-link>
        <router-link to="/blogpost" @click.native="closeMenu">Blog Post</router-link>
        <router-link to="/expenses" @click.native="closeMenu">Expenses</router-link>
        <router-link to="/calendar" @click.native="closeMenu">Calendar</router-link>
        <router-link to="/messages" @click.native="closeMenu">Messages</router-link>
        <router-link to="/rating" @click.native="closeMenu">Rating</router-link>
        <router-link to="/radios" @click.native="closeMenu">Radios</router-link>
        <router-link to="/drawer" @click.native="closeMenu">Drawer</router-link>
        <router-link to="/compose" @click.native="closeMenu">Compose</router-link>
        <router-link to="/images" @click.native="closeMenu">Images</router-link>
        <router-link to="/insights" @click.native="closeMenu">Insights</router-link>
        <router-link to="/mark" @click.native="closeMenu">Mark</router-link>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'BurgerMenu',
    setup() {
      const isOpen = ref(false);
  
      const toggleMenu = () => {
        isOpen.value = !isOpen.value;
      };
  
      const closeMenu = () => {
        isOpen.value = false;
      };
  
      return {
        isOpen,
        toggleMenu,
        closeMenu,
      };
    },
  });
  </script>
  
  <style scoped lang="scss">
  .burger-menu {
    position: relative;
  
    .burger-button {
      background: none;
      border: none;
      cursor: pointer;
  
      .burger-icon {
        width: 30px;
        height: 2px;
        background-color: #333;
        display: block;
        position: relative;
      }
  
      .burger-icon::before,
      .burger-icon::after {
        content: '';
        width: 30px;
        height: 2px;
        background-color: #333;
        position: absolute;
        left: 0;
      }
  
      .burger-icon::before {
        top: -8px;
      }
  
      .burger-icon::after {
        top: 8px;
      }
    }
  
    .menu-items {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      border: 1px solid #ccc;
      padding: 10px;
      display: flex;
      flex-direction: column;
      z-index: 99;
  
      a {
        margin-bottom: 10px;
        text-decoration: none;
        color: #333;
      }
  
      a:last-child {
        margin-bottom: 0;
      }
    }
  
    &.open {
      .burger-icon {
        background-color: transparent;
      }
  
      .burger-icon::before {
        top: 0;
        transform: rotate(45deg);
      }
  
      .burger-icon::after {
        top: 0;
        transform: rotate(-45deg);
      }
    }
  }
  </style>
  