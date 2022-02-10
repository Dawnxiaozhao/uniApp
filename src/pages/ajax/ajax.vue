<template>
	<view>
		<p>测试ajax 利用小微系统测试</p>
		<button type="default" @click="post()">登录测试ajaxPost</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		created() {
			this.get()
		},
		methods: {
			get() {
				this.$apiget('/imageValidate/imageShow', {}).then(res => {
					console.log(res)
				});
			},
			post() {
				// ajax封装默认是json传参 如果要使用formData传参传入 'form'
				this.$apipost('/login', {
					username: 'sys_admin',
					password: 'mse.1234',
					rememberPsw: true
				},'form').then(res => {

				});
			}
		}
	}
</script>

<style>

</style>
