<template>
    <div class="images">
      <div class="header">
        <button class="back">Back</button>
        <div class="title">Images</div>
        <button class="next">Next</button>
      </div>
      <div class="image-grid">
        <div class="image-placeholder" v-for="n in 8" :key="n"></div>
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
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Images',
    setup() {
      const dots = ref([0, 1, 2, 3, 4]);
      const activeDot = ref(0);
  
      const setActiveDot = (index: number) => {
        activeDot.value = index;
      };
  
      return {
        dots,
        activeDot,
        setActiveDot
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .images {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: white;
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
  
      .back, .next {
        color: #4CAF50;
        font-size: 16px;
        border: none;
        background: none;
        cursor: pointer;
      }
  
      .title {
        font-size: 24px;
        font-weight: bold;
      }
    }
  
    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      padding: 16px;
  
      .image-placeholder {
        background: #f5f5f5;
        border-radius: 8px;
        padding-top: 56.25%; /* 16:9 aspect ratio */
        position: relative;
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
        margin: 0 4px;
        background-color: #e0e0e0;
        border: none;
        border-radius: 50%;
        cursor: pointer;
  
        &.active {
          background-color: #4CAF50;
        }
      }
    }
  
    @media (min-width: 768px) {
      .image-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }

    }
  
    @media (min-width: 1024px) {
      .image-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  </style>
  