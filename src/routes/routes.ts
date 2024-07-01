import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import Feed from '../components/Feed.vue';
import Content from '../components/Content.vue';
import ProfilePosts from '../components/Profile_Posts.vue';
import Market from '../pages/Market.vue';
import Congratulations from '../pages/Congratulations.vue';
import Search from '../pages/Search.vue';
import BlogPost from '../pages/BlogPost.vue';
import Expenses from '../pages/Expenses.vue';
import Calendar from '../pages/Calendar.vue';
import Messages from '../pages/Messages.vue';
import Rating from '../pages/Rating.vue';
import Radios from '../pages/Radios.vue';
import Drawer from '../pages/Drawer.vue';
import Compose from '../pages/Compose.vue';
import Images from '../pages/Images.vue';
import Insights from '../pages/Insights.vue';
import Mark from '../pages/Mark.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/feed' },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/feed', component: Feed },
  { path: '/content', component: Content },
  { path: '/profile_posts', component: ProfilePosts },
  { path: '/market', component: Market },
  { path: '/congratulations', component: Congratulations },
  { path: '/search', component: Search },
  { path: '/blogpost', component: BlogPost },
  { path: '/expenses', component: Expenses },
  { path: '/calendar', component: Calendar },
  { path: '/messages', component: Messages },
  { path: '/rating', component: Rating },
  { path: '/radios', component: Radios },
  { path: '/drawer', component: Drawer },
  { path: '/compose', component: Compose },
  { path: '/images', component: Images },
  { path: '/insights', component: Insights },
  { path: '/mark', component: Mark },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
