<template>
    <div class="insights">
      <div class="header">
        <button class="back">Back</button>
        <div class="title">Insights</div>
      </div>
      <div class="progress-indicator">
        <svg viewBox="0 0 36 36" class="circular-chart green">
          <path class="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <path class="circle"
                stroke-dasharray="70, 100"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <text x="18" y="20.35" class="percentage">$32.01</text>
          <text x="18" y="25.5" class="percentage-sub">70% spent</text>
        </svg>
      </div>
      <div class="expenses">
        <div class="expenses-title">Expenses</div>
        <div class="expense-item" v-for="(item, index) in expenses" :key="index">
          <div class="expense-name">
            <span class="dot"></span>
            Item
          </div>
          <div class="expense-statistic">Statistic</div>
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
    name: 'Insights',
    setup() {
      const dots = ref([0, 1, 2, 3, 4]);
      const activeDot = ref(0);
      const expenses = ref(Array(6).fill(''));
  
      const setActiveDot = (index: number) => {
        activeDot.value = index;
      };
  
      return {
        dots,
        activeDot,
        expenses,
        setActiveDot
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .insights {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: white;
    padding: 16px;
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
  
      .back {
        color: #4CAF50;
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
  
    .progress-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 0;
  
      .circular-chart {
        max-width: 80%;
        max-height: 250px;
        margin: 0 auto;
        display: block;
      }
  
      .circle-bg {
        fill: none;
        stroke: #eee;
        stroke-width: 3.8;
      }
  
      .circle {
        fill: none;
        stroke-width: 2.8;
        stroke: #4CAF50;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
      }
  
      @keyframes progress {
        0% {
          stroke-dasharray: 0 100;
        }
      }
  
      .percentage {
        fill: #4CAF50;
        font-size: 0.3em;
        text-anchor: middle;
      }
  
      .percentage-sub {
        fill: #808080;
        font-size: 0.2em;
        text-anchor: middle;
      }
    }
  
    .expenses {
      flex: 1;
      padding: 16px 0;
  
      .expenses-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
      }
  
      .expense-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #e0e0e0;
  
        .expense-name {
          display: flex;
          align-items: center;
  
          .dot {
            height: 12px;
            width: 12px;
            margin-right: 8px;
            background-color: #4CAF50;
            border-radius: 50%;
          }
        }
  
        .expense-statistic {
          font-size: 14px;
          color: #808080;
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
  
    @media (max-width: 600px) {
      .header {
        padding: 8px 0;
  
        .title {
          font-size: 20px;
        }
  
        .back {
          font-size: 14px;
        }
      }
  
      .progress-indicator {
        .circle {
          width: 130px;
          height: 130px;
  
          .amount {
            font-size: 20px;
          }
  
          .percentage {
            font-size: 12px;
          }
        }
      }
  
      .expenses {
        .expenses-title {
          font-size: 16px;
        }
  
        .expense-item {
          .expense-name {
            font-size: 14px;
  
            .dot {
              height: 10px;
              width: 10px;
            }
          }
  
          .expense-statistic {
            font-size: 12px;
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
          margin: 0px 2px;
        }
      }
    }
  }
  </style>
  