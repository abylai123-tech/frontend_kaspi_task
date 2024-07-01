<template>
    <div class="compose">
      <div class="header">
        <button class="back">Back</button>
        <div class="title">Compose</div>
      </div>
      <textarea class="message-input" placeholder="Compose your message here..."></textarea>
      <button class="send-button">Send</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Compose',
  });
  </script>
  
  <style lang="scss" scoped>
  .compose {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: white;
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
  
      .back {
        color: #4CAF50;
        font-size: 16px;
        border: none;
        padding: 12px 24px;
        border-radius: 20px;
      }
  
      .title {
        font-size: 24px;
        font-weight: bold;
        position: relative;
        right: 48%;
      }
    }
  
    .message-input {
      padding: 16px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background: #f5f5f5;
      margin: 16px;
      resize: none;
    }
  
    .send-button {
      background: #4CAF50;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 24px;
      font-size: 16px;
      cursor: pointer;
      margin: 0 auto;
      width: 150px;
    }
  }
  
  @media (max-width: 600px) {
  .compose {
    padding: 0;

    .header {
      padding: 8px;
      justify-content: flex-start;

      .back {
        padding: 8px;
      }

      .title {
        font-size: 20px;
        position: relative;
        left: 60px;    
      }
    }

    .message-input {
      flex: 1;
      padding: 12px;
      font-size: 14px;
      margin: 8px 16px;
    }

    .send-button {
      padding: 10px 20px;
      font-size: 14px;
      margin: 8px 16px 16px;
      width: calc(100% - 32px);
    }
  }
}
  </style>
  