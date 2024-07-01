<template>
    <div class="congrats-container">
      <div class="congrats-card">
        <h1>Congratulations!</h1>
        <p>
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation.
          Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat
          velit qui adipisicing sunt.
        </p>
        <button class="primary-action">Click Me</button>
        <button class="secondary-action">Secondary Action</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Congratulations',
  });
  </script>
  
  <style scoped lang="scss">
  .congrats-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #4CAF50;
    padding: 0 20px; /* Добавить отступы слева и справа */
  }
  
  .congrats-card {
    background-color: white;
    padding: 20px;
    border-radius: 16px; /* Изменить border-radius */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    text-align: center;
    height: auto; /* Изменить высоту */
  
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    p {
      font-size: 16px;
      color: #757575;
      margin-bottom: 20px;
    }
  
    .primary-action {
      padding: 15px;
      width: 100%;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 25px;
      font-size: 18px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  
    .secondary-action {
      background: none;
      border: none;
      color: #4CAF50;
      font-size: 16px;
      cursor: pointer;
    }
  }
  
  /* Адаптивные стили */
  @media (max-width: 600px) {
    .congrats-card {
      padding: 15px;
  
      h1 {
        font-size: 20px;
      }
  
      p {
        font-size: 14px;
      }
  
      .primary-action {
        padding: 12px;
        font-size: 16px;
      }
  
      .secondary-action {
        font-size: 14px;
      }
    }
  }
  </style>
  