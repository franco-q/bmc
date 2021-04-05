require('./bootstrap')

import { InertiaProgress } from '@inertiajs/progress'
import DashboardPlugin from './plugins/dashboard-plugin'
import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'

Vue.use(plugin)
Vue.use(DashboardPlugin)
Vue.mixin({ methods: { route } })

const el = document.getElementById('app')

new Vue({
	render: h =>
		h(App, {
			props: {
				initialPage: JSON.parse(el.dataset.page),
				resolveComponent: name => require(`./Pages/${name}`).default
			}
		})
}).$mount(el)

InertiaProgress.init({ color: '#4B5563' })
