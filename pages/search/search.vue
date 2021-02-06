<template>
	<view class="all">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<view class="status_toppadding"></view>
		<view class="status">
			<view class="status_bar_top"></view>
			<view class="status_bar">
				<view class="status_bar_left">
					<image src="../../static/icon/back_icon.png" @click="back" mode="aspectFit"></image>
				</view>
				<view class="status_bar_center">
					<image src="../../static/icon/search_icon_search.png" mode="aspectFit"></image>
					<input type="text" value="" />
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				console.log("返回")
				uni.navigateBack({
					delta:1,
					animationType:"pop-out",
					animationType:200
				})
			},
			
		}
	}
</script>

<style>

</style>
