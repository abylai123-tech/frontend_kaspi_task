<template>
    <div class="radios-container">
      <header class="header">
        <button class="back-btn">Back</button>
        <h1 class="title">User Options</h1>
        <button class="next-btn">Next</button>
      </header>
      <div class="options-list">
        <div class="option" v-for="option in options" :key="option.id">
          <label class="radio-label">
            {{ option.label }}
            <input type="radio" name="options" :value="option.value" v-model="selectedOption" />
            <span class="radio-custom"></span>
          </label>
        </div>
      </div>
      <button class="rate-button">I love it!</button>
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
    name: 'Radios',
    setup() {
      const options = ref([
        { id: 1, label: 'Radio option here...', value: 'option1' },
        { id: 2, label: 'Radio option here...', value: 'option2' },
        { id: 3, label: 'Radio option here...', value: 'option3' },
        { id: 4, label: 'Radio option here...', value: 'option4' },
        { id: 5, label: 'Radio option here...', value: 'option5' },
        { id: 6, label: 'Radio option here...', value: 'option6' },
      ]);
      const selectedOption = ref('');
      const activeDot = ref(0);
      const dots = ref(new Array(5).fill(''));
  
      const setActiveDot = (index: number) => {
        activeDot.value = index;
      };
  
      return {
        options,
        selectedOption,
        activeDot,
        dots,
        setActiveDot,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .radios-container {
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
      padding: 16px;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
  
      .back-btn,
      .next-btn {
        color: #5db075;
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
      }
  
      .title {
        font-size: 24px;
        font-weight: bold;
      }
    }
  
    .options-list {
      flex: 1;
      padding: 16px;
  
      .option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
  
        .radio-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          width: 100%;
          justify-content: space-between;
          color: gray;
          
  
          input[type='radio'] {
            display: none;
          }
  
          .radio-custom {
            width: 20px;
            height: 20px;
            border: 2px solid #5db075;
            border-radius: 50%;
            position: relative;
          }
  
          input[type='radio']:checked + .radio-custom {
            background-color: #5db075;
          }
  
          input[type='radio']:checked + .radio-custom::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 4px;
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-radius: 50%;
          }
        }
      }
    }
  
    .rate-button {
      background-color: #5db075;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 20px;
      align-self: center;
      width: 90%;
      max-width: 400px;
    }
  
    .bottom-nav {
      display: flex;
      justify-content: space-evenly;
      padding: 16px 0px;
      background-color: #f9f9f9;
  
      .nav-dot {
        width: 30px;
        height: 30px;
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
    .header {
      padding: 12px;
  
      .back-btn, .next-btn {
        font-size: 14px;
      }
  
      .title {
        font-size: 20px;
      }
    }
  
    .options-list {
      padding: 12px;
  
      .option {
        padding: 10px 0;
  
        .radio-label {
          font-size: 14px;
        }
      }
    }
  
    .rate-button {
      padding: 8px 16px;
      font-size: 14px;
      width: 80%;
    }
  
    .bottom-nav {
      padding: 12px 0;
  
      .nav-dot {
        width: 8px;
        height: 8px;
        margin: 0 4px;
      }
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 10px;
  
      .back-btn, .next-btn {
        font-size: 12px;
      }
  
      .title {
        font-size: 18px;
      }
    }
  
    .options-list {
      padding: 10px;
  
      .option {
        padding: 8px 0;
  
        .radio-label {
          font-size: 18px;
        }
      }
    }
  
    .rate-button {
      padding: 6px 12px;
      font-size: 12px;
      width: 70%;
    }
  
    .bottom-nav {
      padding: 8px 0;
  
      .nav-dot {
        width: 6px;
        height: 6px;
        margin: 0 3px;
      }
    }
  }
  </style>
  