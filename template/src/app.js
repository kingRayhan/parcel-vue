import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}

import './styles/app.scss'


new Vue({
    el: '#app',
	{{#router}}
	router,
	{{/router}}
    render: h => h(App),
})
