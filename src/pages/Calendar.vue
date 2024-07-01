<template>
    <div class="calendar-container">
      <div class="calendar">
        <div class="month">March</div>
        <div class="days">
          <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
          <span class="prev-month">29</span><span class="prev-month">30</span><span class="prev-month">31</span>
          <span>1</span><span>2</span><span>3</span><span>4</span>
          <span>5</span><span>6</span><span class="active">7</span><span>8</span><span>9</span><span>10</span><span>11</span>
          <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
          <span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span>
          <span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span class="next-month">1</span>
        </div>
      </div>
      <div class="items-list">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <span class="dot"></span>
            <span class="item">{{ item.name }}</span>
            <span class="time">{{ item.time }}</span>
          </li>
        </ul>
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
    name: 'Calendar',
    setup() {
      const items = ref([
        { name: 'Item', time: '30min.' },
        { name: 'Item', time: '60min.' },
        { name: 'Item', time: '30min.' },
        { name: 'Item', time: '15min.' },
      ]);
  
      const activeDot = ref(0);
      const dots = ref(new Array(5).fill(null));
  
      const setActiveDot = (index: number) => {
        activeDot.value = index;
      };
  
      return {
        items,
        activeDot,
        dots,
        setActiveDot,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .calendar-container {
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
  
    .calendar {
      background-color: #8ac187;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      text-align: center;
  
      .month {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 16px;
      }
  
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
  
        span {
          padding: 8px;
          font-size: 14px;
          color: #000;
        }
  
        .prev-month, .next-month {
          color: #d3d3d3;
        }
  
        .active {
          background-color: #fff;
          color: green;
          border-radius: 50%;
        }
      }
    }
  
    .items-list {
      flex: 1;
      overflow-y: auto;
  
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
  
          .time {
            font-size: 16px;
            color: #555;
          }
        }
      }
    }
  
    .bottom-nav {
      display: flex;
      justify-content: space-around;
      padding: 16px 0;
      background-color: #f9f9f9;    
  
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
  
  @media (max-width: 480px) {
  .header {
    .title {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }

  .calendar {
    width: 100%;
    .month {
      font-size: 20px;
    }

    .days {
      gap: 2px;
      span {
        font-size: 12px;
        padding: 4px;
      }
    }
  }

  .items-list {
    ul {
      li {
        padding: 8px;

        .dot {
          width: 8px;
          height: 8px;
        }

        .item, .time {
          font-size: 14px;
        }
      }
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
  </style>
  