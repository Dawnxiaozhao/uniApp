<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
	 <button type="default" @click="jump('/pages/home/home','1')">通过方法跳转到home页面</button>
	 <button type="default" @click="jump('/pages/ajax/ajax','2')">通过方法跳转到ajax页面</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {
	
  },
  methods: {
	  jump(url,type){
		  if(type==1){
			  uni.switchTab({
			  	url: url
			  });	
		  }else if(type==2){
			  uni.navigateTo({
			  	url: url
			  });	
		  }
		  	  
	  }
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
