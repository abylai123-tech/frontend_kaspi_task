import { defineStore } from 'pinia';

interface User {
  email: string;
  name: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [] as User[],  // изменено с одного пользователя на массив пользователей
    currentUser: null as User | null, // для хранения текущего залогиненного пользователя
  }),
  actions: {
    setUser(user: User) {
      // добавляем пользователя в массив пользователей
      this.users.push(user);
    },
    clearUser(email: string) {
      // удаляем пользователя из массива пользователей по email
      this.users = this.users.filter(u => u.email !== email);
    },
    register(user: User) {
      if (!this.users.some(u => u.email === user.email)) {
        this.setUser(user);
        console.log('Registered user:', user);
      } else {
        console.log('User with this email already exists');
      }
    },
    login(user: User) {
      const foundUser = this.users.find(u => u.email === user.email && u.password === user.password);
      if (foundUser) {
        this.currentUser = foundUser;
        console.log('User logged in:', user);
      } else {
        console.log('Wrong email or password');
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.currentUser,
    getUserByEmail: (state) => (email: string) => state.users.find(u => u.email === email),
    getAllUsers: (state) => state.users,
  },
});
