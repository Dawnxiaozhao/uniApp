import {
	createSSRApp
} from "vue";
import App from "./App.vue";

import {get,post} from '/api/index.js'

export function createApp() {
	const app = createSSRApp(App);
	app.config.globalProperties.$apiget = get; // 自定义添加
	app.config.globalProperties.$apipost = post; // 自定义添加
	return {
		app,
	};
}

