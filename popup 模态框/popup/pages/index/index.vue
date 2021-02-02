<template>
	<view>
		<view style="padding: 20rpx;border-bottom: 1rpx solid #808080;" v-for="(item,index) in list" :key="index" @longpress="longpress">
			{{item.name}}
		</view>
		<view style="padding: 20rpx;border-bottom: 1rpx solid #808080;display: flex;align-items: center;justify-content: center;" @click="center">
			点击居中
		</view>
		<view style="padding: 20rpx;border-bottom: 1rpx solid #808080;display: flex;align-items: center;justify-content: center;" @click="buttomFun">
			点击处于底部
		</view>
		
		<!-- 弹出层  长按事件-->
		<popup ref="popup" :maskColor="true" :bodyHeight="200" :bodyWidth="200">
			<!-- 弹出层内容 -->
			<view class="" style="width: 200rpx;height: 200rpx;">
				根据点击位置弹出模态框
			</view>
		</popup>
		<!-- 弹出层  居中 -->
		<popup ref="centers" :maskColor="true" :center="true" >
			<!-- 弹出层内容 -->
			<view class="" style="width:400rpx;height: 400rpx;background-color: #FFFFFF;">
				<view>居中</view>
				<view class="" style="width:200rpx;height: 80rpx;margin-top: 300rpx;" @click="hides">
					关闭模态框
				</view>
			</view>
		</popup>
		<!-- 弹出层  居中 -->
		<popup ref="buttoms" :maskColor="true" :bottom="true">
			<!-- 弹出层内容 -->
			<view class="" style="width:750rpx;height: 200rpx;">
				处于底部
			</view>
		</popup>
	</view>
</template>
<!-- 
    maskColor   是否开启蒙版颜色   默认 false (没颜色)
    mask  是否开启蒙版  默认 true（开启）
	center  是否居中    默认 false  （不居中） 居中时不能通过遮罩层关闭模态框  需要设置按钮
	bottom   是否处于底部   默认 false  （不处于底部）
	bodyWidth  弹出层内容宽度  （单位： rpx)  固定位置可不填  根据点击位置弹出要填写 不然无法计算最大宽度
	bodyHeight 弹出层内容高度  （单位： rpx)  固定位置可不填  根据点击位置弹出要填写 不然无法计算最大高度
	bodyBgColor  弹出层内容 背景颜色  默认（白色）
	transformOrigin  弹出层 动画方向  默认（左上）  app生效   可选（left top right buttom center )两两组合
	tabbarHeight  tabbar高度  （单位： rpx)
 -->

<script>
	import popup from '@/components/popup/popup';
	export default {
		data() {
			return {
				list: [{
						name: '长按位置1'
					},
					{
						name: '长按位置2'
					},
					{
						name: '长按位置3'
					},
					{
						name: '长按位置4'
					},
					{
						name: '长按位置5'
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 长按事件 拿到 点击坐标  不同平台x y 获取不一样   这里展示app
			longpress(e) {
				// console.log(e);
				let x=e.touches[0].pageX
				let y=e.touches[0].pageY
				this.$refs.popup.show(x,y)
			},
			// 模态框居中
			center(){
				this.$refs.centers.show()
			},
			// 模态框处于底部
			buttomFun(){
			this.$refs.buttoms.show()
			},
			// 关闭模态框方法
			hides(){
				this.$refs.centers.hide()
			}
		}
	}
</script>

<style>

</style>
