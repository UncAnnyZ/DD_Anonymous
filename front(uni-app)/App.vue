<!-- <template>
	<view>
		<view class="status_bar_top"></view>
		<view class="status_bar"></view>
	</view>
</template> -->
<script>
	export default {
		globalData: {  
			css: 'light',
			host:"http://120.79.171.165",
			api:"http://120.79.171.165:8888/api"
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* #ifndef APP-PLUS-NVUE */
	.status_toppadding{
		height: calc(var(--status-bar-height) + 80rpx);
	}
	.status{
		position: fixed;
		top: 0;
		width:100%;
		z-index: 99;
	}
	.status_bar_top {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F7F7F7;
	}
	.status_bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		min-height: 80rpx;
		max-height: 80rpx;
		width: 100%;
		background-color: #F7F7F7;
		padding-top: 10rpx;
	}
	.status_bar image{
		height: 50rpx;
		width: 50rpx;
		padding: 15rpx;
	}
	/* #endif */
	
</style>
