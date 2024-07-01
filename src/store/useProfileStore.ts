import { defineStore } from 'pinia';

interface Post {
  id: number;
  title: string;
  content: string;
  time: string;
}

interface Photo {
  id: number;
  src: string;
  header: string;
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    posts: [] as Post[],
    photos: [] as Photo[],
  }),
  actions: {
    setPosts(posts: Post[]) {
      this.posts = posts;
    },
    clearPosts() {
      this.posts = [];
    },
    setPhotos(photos: Photo[]) {
      this.photos = photos;
    },
    clearPhotos() {
      this.photos = [];
    },
  },
  getters: {
    getPostById: (state) => (id: number) => state.posts.find(post => post.id === id),
    getPhotoById: (state) => (id: number) => state.photos.find(photo => photo.id === id),
  },
});
