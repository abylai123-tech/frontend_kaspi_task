<template>
    <div class="rating-container">
      <div class="rating-card">
        <div class="stars">
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
        </div>
        <h1 class="title">Rate our app</h1>
        <p class="description">
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor
          adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.
        </p>
        <button class="rate-button">I love it!</button>
        <p class="feedback">Don’t like the app? Let us know.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Rating',
  });
  </script>
  
  <style lang="scss" scoped>
  .rating-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #5db075;
  }
  
  .rating-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    margin: 0 auto;
  }
  
  .stars {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  
    .star {
      font-size: 24px;
      color: #fdd835;
      margin: 0 2px;
    }
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .description {
    font-size: 18px;
    color: #777;
    margin-bottom: 20px;
  }
  
  .rate-button {
    background-color: #5db075;
    color: white;
    padding: 12px 24px;
    width: 200px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  
  .feedback {
    font-size: 20px;
    color: #5db075;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .rating-card {
      padding: 15px;
    }
  
    .stars {
      .star {
        font-size: 20px;
      }
    }
  
    .title {
      font-size: 20px;
      margin-bottom: 8px;
    }
  
    .description {
      font-size: 14px;
      margin-bottom: 16px;
    }
  
    .rate-button {
      padding: 8px 16px;
      font-size: 14px;
    }
  
    .feedback {
      font-size: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .rating-card {
      padding: 10px;
      height: 260px;
      margin: 0 10px;   
    }
  
    .stars {
      .star {
        font-size: 18px;
      }
    }
  
    .title {
      font-size: 26px;
      margin-bottom: 6px;
    }
  
    .description {
      font-size: 14px;
      margin-bottom: 12px;
    }
  
    .rate-button {
      padding: 12px 24px;
      font-size: 12px;
      width: 150px;
    }
  
    .feedback {
      font-size: 15px;
    }
  }
  </style>
  