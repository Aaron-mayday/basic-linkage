import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  // mode: 'history',  //history部署到后台，会有额外的配置
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	if(to.path === "/login"){
		next();
	}else{
		let token = localStorage.getItem("token");
		if(token){
			next();
		}else{
			next("/login")
		}
	}
})

export default router
