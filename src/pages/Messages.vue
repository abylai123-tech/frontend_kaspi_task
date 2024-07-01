<template>
    <div class="messages-container">
      <header class="header">
        <button class="back-btn">Back</button>
        <h1 class="title">Messages</h1>
        <button class="filter-btn">Filter</button>
      </header>
      <div class="messages-list">
        <div class="message received">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu facilisis mollis.</p>
        </div>
        <div class="message sent">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="message sent">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="message received">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu facilisis mollis.</p>
        </div>
      </div>
      <div class="message-input">
        <input type="text" placeholder="Message here..." />
        <button class="send-btn">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Messages',
  });
  </script>
  
  <style lang="scss" scoped>
  .messages-container {
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
      .filter-btn {
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
  
    .messages-list {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
  
      .message {
        max-width: 80%;
        padding: 12px;
        border-radius: 10px;
        margin-bottom: 16px;
        position: relative;
        font-size: 16px;
        line-height: 1.4;
  
        &.received {
          background-color: #f1f1f1;
          align-self: flex-start;
  
          &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 10px;
            border-width: 10px;
            border-style: solid;
            border-color: #f1f1f1 transparent transparent transparent;
          }
        }
  
        &.sent {
          background-color: #5db075;
          color: white;
          align-self: flex-end;
  
          &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            right: 10px;
            border-width: 10px;
            border-style: solid;
            border-color: #5db075 transparent transparent transparent;
          }
        }
      }
    }
  
    .message-input {
      display: flex;
      align-items: center;
      padding: 16px;
      border-top: 1px solid #e0e0e0;
      background-color: #fff;
  
      input {
        flex: 1;
        padding: 12px;
        border: 1px solid #e0e0e0;
        border-radius: 20px;
        margin-right: 12px;
        font-size: 16px;
      }
  
      .send-btn {
        background-color: #5db075;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg {
          width: 24px;
          height: 24px;
          fill: white;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .header {
      padding: 12px;
      .back-btn, .filter-btn {
        font-size: 14px;
      }
      .title {
        font-size: 20px;
      }
    }
  
    .messages-list {
      padding: 12px;
  
      .message {
        max-width: 90%;
        padding: 10px;
        font-size: 14px;
      }
    }
  
    .message-input {
      padding: 12px;
      input {
        padding: 10px;
        font-size: 14px;
      }
      .send-btn {
        width: 35px;
        height: 35px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 10px;
      .back-btn, .filter-btn {
        font-size: 12px;
      }
      .title {
        font-size: 18px;
      }
    }
  
    .messages-list {
      padding: 10px;
  
      .message {
        max-width: 100%;
        padding: 8px;
        font-size: 12px;
      }
    }
  
    .message-input {
      padding: 10px;
      input {
        padding: 8px;
        font-size: 12px;
      }
      .send-btn {
        width: 30px;
        height: 30px;
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  </style>
  