import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import PostsPageStore from '@/pages/PostsPageStore';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/postsstore',
    component: PostsPageStore,
  },
  {
    path: '/posts/:id',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
