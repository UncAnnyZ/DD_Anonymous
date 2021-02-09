<template>
	<view class="all">
		<view class="block">
			<text>账号与安全</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		<view class="block">
			<text>青少年模式</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		
		<view class="line"></view>
		
		<view class="block">
			<text>新消息提醒</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		<view class="block">
			<text>勿扰模式</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		<view class="block">
			<text>聊天</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		<view class="block">
			<text>隐私</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		<view class="block">
			<text>通用</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		
		<view class="line"></view>
		
		<view class="block">
			<text>关于DDDD</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		<view class="block">
			<text>帮助与反馈</text>
			<image src="../../static/icon/setting_icon_navigator.png" mode="aspectFit"></image>
		</view>
		
		<view class="line"></view>
		<view class="block" style="justify-content: center;">
			<text style="text-align: center;">切换账号</text>
		</view>
		<view class="block" style="justify-content: center;">
			<text style="text-align: center;">退出</text>
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
			
		}
	}
</script>

<style> 
	.all{
		background-color: rgba(225, 225, 225, 0.5);
		/* height: calc( 100vh - var(--status-bar-height) ); */
		/* height: calc(100vh - 88rpx); */
		height: 100vh;
	}
	.block{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx;
		background-color: #FFFFFF;
		line-height: 60rpx;
	}
	.block text{
		letter-spacing: 2rpx;
		font-weight: 400;
		font-size: 15px;
	}
	.block image{
		height: 40rpx;
		width: 40rpx;
	}
	.line{
		height: 20rpx;
		width: 100%;
	}
</style>
