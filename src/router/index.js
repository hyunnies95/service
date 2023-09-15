import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CreateProject from '../views/CreateProject.vue'
import AccountSettings from '../views/AccountSettings.vue'
// import ProfilePage from '../views/ProfilePage.vue'
import UserProfile from '../views/UserProfile.vue'
import HomeHeader from '../components/Layout/HomeHeader.vue'
import ProfileHeader from '../components/Layout/ProfileHeader.vue'
import AppFooter from '../components/Layout/AppFooter.vue'
import SideMenu from '../components/Layout/SideMenu.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomePage,
      header: HomeHeader,
      footer: AppFooter
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: LoginPage,
      header: HomeHeader,
      footer: AppFooter
    }
  },
  {
    path: '/register',
    name: 'Register',
    components: {
      default: RegisterPage,
      header: HomeHeader,
      footer: AppFooter
    }
  },
  {
    path: '/create',
    name: 'create',
    component: CreateProject
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      profile: UserProfile,
      header: ProfileHeader,
      sidebar: SideMenu,
    },
  },
  {
    path: '/account',
    name: 'account',
    components: {
      profile: AccountSettings,
      header: ProfileHeader,
      sidebar: SideMenu,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
