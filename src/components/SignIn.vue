<template>
  <div class="container">
    <div class="login-form">
      <header>
        <h1>Log In</h1>
      </header>
      <form @submit.prevent="submitForm">
        <input type="email" v-model="email" placeholder="Email" required />
        <div class="password-field">
          <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password" required />
          <button type="button" @click="togglePassword" class="toggle-password">{{ showPassword ? 'Hide' : 'Show' }}</button>
        </div>
        <button type="submit" class="login-button">Log In</button>
        <a href="#" class="forgot-password-link">Forgot your password?</a>
      </form>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../store/useAuthStore';

export default defineComponent({
  name: 'SignIn',
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const authStore = useAuthStore();

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const submitForm = () => {
      const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      authStore.login(userData);
    };

    return {
      email,
      password,
      showPassword,
      togglePassword,
      submitForm,
    };
  },
});
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.login-form {
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  height: 700px; 
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      font-size: 24px;
      margin: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;

    input[type="email"],
    input[type="password"],
    input[type="text"] {
      padding: 15px;
      margin-bottom: 10px;
      border: 1px solid #E0E0E0;
      border-radius: 8px;
      font-size: 16px;
      background-color: #F6F6F6;
      box-sizing: border-box;
    }

    .password-field {
      display: flex;
      align-items: center;
      position: relative;

      input {
        flex: 1;
        padding-right: 60px;
      }

      .toggle-password {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #4CAF50;
        cursor: pointer;
        font-size: 16px;
        padding: 0;
        margin: 0;
      }
    }

    .login-button {
      padding: 15px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .forgot-password-link {
      color: #4CAF50;
      text-decoration: none;
      text-align: center;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
}

/* Адаптивные стили */
@media (max-width: 600px) {
  .login-form {
    height: 700px;
    padding: 15px;

    header h1 {
      font-size: 20px;
    }

    form input[type="email"],
    form input[type="password"],
    form input[type="text"] {
      padding: 10px;
      font-size: 14px;
    }

    .login-button {
      padding: 12px;
      font-size: 16px;
    }

    .forgot-password-link {
      font-size: 12px;
    }
  }
}
</style>