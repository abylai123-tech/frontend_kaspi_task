<template>
  <div class="signup-form">
    <header>
      <button @click="closeForm" class="close-button">×</button>
      <h1>Sign Up</h1>
      <a @click.prevent="goToSignIn" class="login-link">Login</a>
    </header>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <div class="password-field">
        <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password" required />
        <button type="button" @click="togglePassword" class="toggle-password">{{ showPassword ? 'Hide' : 'Show' }}</button>
      </div>
      <div class="newsletter-checkbox">
        <input type="checkbox" v-model="newsletter" />
        <label>I would like to receive your newsletter and other promotional information.</label>
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
    <a href="#" class="forgot-password-link">Forgot your password?</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/useAuthStore';

export default defineComponent({
  name: 'SignUpForm',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const newsletter = ref(false);
    const showPassword = ref(false);

    const closeForm = () => {
      // Логика закрытия формы
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const goToSignIn = () => {
      router.push('/signin');
    };

    const submitForm = () => {
      const userData = {
        email: email.value,
        password: password.value,
        name: name.value,
      };
      authStore.register(userData);
    };

    return {
      name,
      email,
      password,
      newsletter,
      showPassword,
      closeForm,
      togglePassword,
      submitForm,
      goToSignIn,
    };
  },
});
</script>


<style scoped lang="scss">
.signup-form {
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  height: 700px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    h1 {
      font-size: 24px;
      margin: 0;
    }

    .login-link {
      color: #4CAF50;
      text-decoration: none;
      font-weight: bold;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input[type="text"],
    input[type="email"],
    input[type="password"] {
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

    .newsletter-checkbox {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      input[type="checkbox"] {
        margin-right: 10px;
      }

      label {
        font-size: 14px;
        color: #757575;
      }
    }

    .signup-button {
      padding: 15px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-size: 18px;
    }
  }.forgot-password-link {
    color: #4CAF50;
    text-decoration: none;

display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
}

/* Адаптивные стили */
@media (max-width: 600px) {
  .signup-form {
    padding: 15px;

    header h1 {
      font-size: 20px;
    }

    form input[type="text"],
    form input[type="email"],
    form input[type="password"] {
      padding: 10px;
      font-size: 14px;
    }

    .signup-button {
      padding: 12px;
      font-size: 16px;
    }

    .forgot-password-link {
      font-size: 12px;
    }
  }
}
</style>