<template>
	<view>
		<view @click="center"> 点击居中 </view>
		
		<!-- 弹出层  居中 -->
		<popup ref="centers"  content="账号密码错误" @hide='pop'></popup>
		
	</view>
</template>

<script>
	import popup from '@/components/popup/popup';
	export default {
		data() {
			return {
				
			}
		},
		methods: {

			// 模态框居中
			center() {
				this.$refs.centers.show()
			},
			pop(e){
				console.log("回调")
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
