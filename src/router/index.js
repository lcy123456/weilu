import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import News from '@/page/News'

Vue.use(Router)

export default new Router({
	routes: [
	    {
	      path: '/',
	      name: 'Home',
	      component: Home
	  	},
	    {
	      path: '/News',
	      name: 'News',
	      component: News
	  	}
	]
})
