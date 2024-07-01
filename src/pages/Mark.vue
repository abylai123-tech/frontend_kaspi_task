<template>
    <div class="market">
      <div class="header">
        <button class="back">Back</button>
        <div class="title">Market</div>
      </div>
      <div class="featured">
        <div class="video-placeholder" @click="togglePlayPause">
        <svg v-if="isPlaying" viewBox="0 0 24 24" class="play-button">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#4CAF50" stroke-width="2"/>
          <polygon points="10,8 16,12 10,16" fill="#4CAF50"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" class="play-button">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#4CAF50" stroke-width="2"/>
          <rect x="9" y="8" width="2" height="8" fill="#4CAF50"/>
          <rect x="13" y="8" width="2" height="8" fill="#4CAF50"/>
        </svg>
      </div>
      </div>
      <div class="section">
        <div class="section-title">Hot deals</div>
        <div class="items-grid">
          <div class="item" v-for="n in 4" :key="n">
            <div class="item-placeholder"></div>
            <div class="item-details">
              <div class="item-name">Item #1 Name Goes Here</div>
              <div class="item-price">$19.99</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Trending</div>
        <div class="items-grid">
          <div class="item" v-for="n in 4" :key="n">
            <div class="item-placeholder"></div>
            <div class="item-details">
              <div class="item-name">Item #1 Name Goes Here</div>
              <div class="item-price">$19.99</div>
            </div>
          </div>
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
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Market',
  setup() {
    const isPlaying = ref(false);
    const dots = ref([0, 1, 2, 3, 4]);
    const activeDot = ref(0);

    const togglePlayPause = () => {
      isPlaying.value = !isPlaying.value;
    };

    const setActiveDot = (index: number) => {
      activeDot.value = index;
    };

    return {
      isPlaying,
      dots,
      activeDot,
      togglePlayPause,
      setActiveDot
    };
  }
  });
  </script>
  
  <style lang="scss" scoped>
  .market {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: white;
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background-color: #4CAF50;
      color: white;
  
      .back {
        color: white;
        font-size: 16px;
        border: none;
        background: none;
        cursor: pointer;
      }
  
      .title {
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  
    .featured {
      background-color: #4CAF50;
      padding: 16px;
  
      .video-placeholder {
        background: white;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
  
        .play-button {
          position: relative;
          width: 50px;
          height: 50px;
        }
      }
    }
  
    .section {
      padding: 16px;
  
      .section-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
      }
  
      .items-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
  
          .item-placeholder {
            background: #f5f5f5;
            border-radius: 8px;
            width: 100%;
            padding-top: 100%; 
          }
  
          .item-details {
            text-align: center;
            margin-top: 8px;
  
            .item-name {
              font-size: 14px;
            }
  
            .item-price {
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
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
        width: 15px;
        height: 15px;
        margin: 0 3px;
        background-color: #e0e0e0;
        border: none;
        border-radius: 50%;
        cursor: pointer;
  
        &.active {
          background-color: #4CAF50;
        }
      }
    }
  
    @media (max-width: 600px) {
      .header {
        padding: 8px;
  
        .title {
          font-size: 20px;
        }
  
        .back {
          font-size: 14px;
        }
      }
  
      .featured {
        padding: 40px;
  
        .video-placeholder {
          .play-button {
            width: 40px;
            height: 40px;
          }
        }
      }
  
      .section {
        padding: 8px;
  
        .section-title {
          font-size: 16px;
        }
  
        .items-grid {
            gap: 8px;
            grid-template-columns: repeat(4, 1fr);
  
          .item {
            .item-details {
              .item-name {
                font-size: 12px;
              }
  
              .item-price {
                font-size: 14px;
              }
            }
          }
        }
      }
  
      .bottom-nav {
        padding: 4px 0;
        position: absolute;
        bottom: 8px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        justify-content: space-around;
  
        .nav-dot {
          width: 30px;
          height: 30px;
          margin: 0 2px;
        }
      }
    }
  }
  </style>
  