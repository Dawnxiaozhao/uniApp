import baseconfig from "./baseconfig.js"
 import qs from 'qs';
const httpClient = {
	request:function(method,url,data,requesTmode){		
		var headers={
			// "Auth-Token": uni.getStorageSync("auth_token")
		};		
		//requesTmode请求方式 默认requesTmode    contentType: "application/json",  data: JSON.stringify(sendData),           
		if(requesTmode){
			headers['Content-Type']="application/x-www-form-urlencoded"
		}		 
		return new Promise((resolve,reject)=>{
			uni.showLoading({
				title:"加载中",
				mask:true
			});			
			uni.request({
				url:url,
				header:headers,
				data:requesTmode?qs.stringify(data):data,
				method:method,
				// dataType: 'json',
				success:function(res){
					uni.hideLoading()
					// console.log("接口获取原始数据：-------------------",res.data)
					if(res.statusCode == 401){
						uni.showToast({
							icon: 'none',
							duration:1000,
							title: res.data.error.message
						});
						setTimeout(function(){
							uni.reLaunch({
								url: '../login/login'
							});
						},1500);
					}else{
						if(res.data.error != null){
							uni.showToast({
								icon: 'none',
								duration:1000,
								title: res.data.error.message
							});
							return;
						}else{
							resolve(res.data);
						}
					}
				},
				fail: function(err){
					uni.hideLoading()
					reject(err)
				}
			})
		})
	},
	Get: function(url,data,requesTmode){
		let allurl = this.geturl(url);
		return this.request('GET',allurl,data,requesTmode)
	},
	Post: function(url,data,requesTmode){
		let allurl = this.geturl(url);
		return this.request('POST',allurl,data,requesTmode)
	},
	geturl:function(url){
		return baseconfig.server+url
	}
};
 
// module.exports = httpClient
export function get(url,params,requesTmode){
	return httpClient.Get(url,params,requesTmode)
};
export function post(url,params,requesTmode){
	return httpClient.Post(url,params,requesTmode)
};
