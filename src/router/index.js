import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
import Contact from '../views/contact/Contact.vue';
import Skills from '../views/skills/Skills.vue';
import SkillDetail from '../views/skills/SkillDetail.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/skills/:id',
    name: 'skill-detail',
    component: SkillDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
