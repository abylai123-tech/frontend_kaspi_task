<template>
    <div class="drawer">
      <div class="drawer-header-container">
        <div class="drawer-header"></div>
      </div>
      <div class="drawer-content">
        <h2 class="drawer-title">Drawer Header</h2>
        <p class="drawer-text">
          Consequat velit qui adipsicing sunt do reprehenderit ad laborum tempor ullamco exercitation.
        </p>
        <button class="primary-action">Click Me</button>
        <button class="secondary-action">Secondary Action</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Drawer',
  });
  </script>
  
  <style lang="scss" scoped>
  .drawer {
    background: white;
    padding: 16px;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;  
    margin: auto; 
  
    .drawer-header-container {
      display: flex;
      justify-content: center;
      padding-top: 8px;
  
      .drawer-header {
        width: 40px;
        height: 4px;
        background: #e0e0e0;
        border-radius: 2px;
      }
    }
  
    .drawer-content {
      text-align: center;
      padding: 16px;
  
      .drawer-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
      }
  
      .drawer-text {
        color: #808080;
        font-size: 16px;
        margin-bottom: 16px;
      }
  
      .primary-action {
        background: #4caf50;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 24px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 8px;
        width: 100%;
      }
  
      .secondary-action {
        background: none;
        color: #4caf50;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
      }
    }
  }
  
  @media (max-width: 600px) {
    .drawer {
      padding: 8px;
  
      .drawer-content {
        padding: 8px;
  
        .drawer-title {
          font-size: 16px;
        }
  
        .drawer-text {
          font-size: 14px;
        }
  
        .primary-action, .secondary-action {
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }
  </style>
  