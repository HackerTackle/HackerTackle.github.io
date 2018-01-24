import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import messages from './locale'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: ((window.navigator.languages && window.navigator.languages[0]) ||
		window.navigator.language ||
		window.navigator.userLanguage ||
		window.navigator.browserLanguage).substring(0, 2).toUpperCase(),
	messages
})

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	i18n
})
