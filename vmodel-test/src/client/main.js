import Vue from 'vue';
import App from './components/app.vue';

import './resources/normalize.css';
import './resources/skeleton.css';

// register components to global
const components = {
	App
};
for (const name of Object.keys(components)) {
	Vue.component(name, components[name]);
}

new Vue({
	el: '#app',
	template: '<App />'
});
