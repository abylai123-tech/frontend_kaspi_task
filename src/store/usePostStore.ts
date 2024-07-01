import { defineStore } from 'pinia';

interface Post {
  id: number;
  title: string;
  content: string;
  time: string;
}

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
  }),
  actions: {
    setPosts(posts: Post[]) {
      this.posts = posts;
    },
    clearPosts() {
      this.posts = [];
    },
  },
  getters: {
    getPostById: (state) => (id: number) => state.posts.find(post => post.id === id),
  },
});
