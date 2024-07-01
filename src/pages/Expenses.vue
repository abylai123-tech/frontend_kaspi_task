<template>
    <div class="expenses-container">
      <header class="header">
        <button class="back-btn">Back</button>
        <h1 class="title">Expenses</h1>
        <button class="new-btn">New</button>
      </header>
      <div class="chart">
        <img src="../assets/mobile_graph.png" alt="Chart Image" class="chart-image"/>
      </div>
      <div class="expenses-list">
        <h2 class="list-title">Expenses</h2>
        <ul>
          <li v-for="(expense, index) in expenses" :key="index">
            <span class="dot"></span>
            <span class="item">{{ expense.item }}</span>
            <span class="statistic">{{ expense.statistic }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Expenses',
    setup() {
      const expenses = ref([
        { item: 'Item', statistic: 'Statistic' },
        { item: 'Item', statistic: 'Statistic' },
        { item: 'Item', statistic: 'Statistic' },
        { item: 'Item', statistic: 'Statistic' },
        { item: 'Item', statistic: 'Statistic' },
        { item: 'Item', statistic: 'Statistic' },
      ]);
  
      return {
        expenses,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .expenses-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
    padding: 16px;
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
  
      .back-btn,
      .new-btn {
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
  
    .chart {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 180px; /* Ensure this height to match the screenshot */
      margin-bottom: 16px;
      background-color: #f9f9f9;
      border-radius: 24px;
      padding: 16px;
  
      .chart-image {
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
      }
    }
  
    .expenses-list {
      flex: 1;
      overflow-y: auto;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 8px;
  
      .list-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
        padding-left: 8px;
      }
  
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
  
        li {
          display: flex;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid #e0e0e0;
  
          .dot {
            width: 10px;
            height: 10px;
            background-color: green;
            border-radius: 50%;
            margin-right: 16px;
          }
  
          .item {
            flex: 1;
            font-size: 16px;
          }
  
          .statistic {
            font-size: 16px;
            color: #555;
          }
        }
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
  
    .chart {
      height: 150px; /* Adjust for smaller screens */
  
      .chart-image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  
    .expenses-list {
      .list-title {
        font-size: 16px;
      }
  
      ul {
        li {
          padding: 8px;
  
          .dot {
            width: 8px;
            height: 8px;
          }
  
          .item,
          .statistic {
            font-size: 14px;
          }
        }
      }
    }
  }
  </style>
  