<template>
	<div style="z-index:9999;overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<view class="maskClass" @click="hide"></view>
		<!-- 弹出框内容 -->
		<div ref="popup" class="popupClass" :style="getBodyStyle">
			<!-- <slot></slot> -->
			<view class="" style="width:400rpx;height: 400rpx;background-color: #FFFFFF;">
				<view @click="test">居中</view>
				<view>{{showCancle}}</view>
				<view class="" style="width:200rpx;height: 80rpx;margin-top: 300rpx;" @click="hide">
					关闭模态框
				</view>
			</view>
		</div>
	</div>
</template>

<script>
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation')
	// #endif
	export default {
		props: {
			showCancle:{
				type: Boolean,
				default: true
			},
			// 是否居中
			center: {
				type: Boolean,
				default: false
			},
			// 是否处于底部
			bottom: {
				type: Boolean,
				default: false
			},
			// 弹出层内容宽度
			bodyWidth: {
				type: Number,
				default: 0
			},
			// 弹出层内容高度
			bodyHeight: {
				type: Number,
				default: 0
			},
			// 弹出层内容 背景颜色
			bodyBgColor: {
				type: String,
				default: "bg-white"
			},
			// 弹出层 动画方向
			transformOrigin: {
				type: String,
				default: "left top"
			},
			// tabbar高度
			tabbarHeight: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				status: false, //显示模态框 状态
				x: -1,
				y: -1,
				maxX: 0,
				maxY: 0
			}
		},
		mounted() {
			try {
				const res = uni.getSystemInfoSync();
				this.maxX = res.windowWidth - uni.upx2px(this.bodyWidth)
				this.maxY = res.windowHeight - uni.upx2px(this.bodyHeight) - uni.upx2px(this.tabbarHeight)
			} catch (e) {
				// error
			}
		},
		computed: {

			getBodyStyle() {
				let left = this.x > -1 ? `left:${this.x}px;` : ''
				let top = this.y > -1 ? `top:${this.y}px;` : ''
				return left + top
			}
		},
		methods: {
			test(){
				console.log(this.showCancle)
			},
			show(x = -1, y = -1) {
				if (this.status) {
					return;
				}
				this.x = (x > this.maxX) ? this.maxX : x
				this.y = (y > this.maxY) ? this.maxY : y
				this.status = true
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(() => {
					animation.transition(this.$refs.popup, {
						styles: {
							transform: 'scale(1,1)',
							transformOrigin: this.transformOrigin,
							opacity: 1
						},
						duration: 100, //ms
						timingFunction: 'ease',
					}, function() {
						console.log('动画执行结束');
					})
				})
				// #endif

			},
			hide() {
				this.$emit('ttttt')
				// #ifdef APP-PLUS-NVUE
				animation.transition(this.$refs.popup, {
					styles: {
						transform: 'scale(0,0)',
						transformOrigin: this.transformOrigin,
						opacity: 0
					},
					duration: 100, //ms
					timingFunction: 'ease',
				}, () => {
					this.status = false
					console.log('动画执行结束');
				})
				// #endif
				this.status = false
			},
			
		}
	}
</script>

<style scoped>
	.popupClass{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		/* #ifdef APP-PLUS-NVUE */
		transform: scale(0, 0);
		opacity: 0;
		/* #endif */
		
		/* #ifndef APP-NVUE */
		z-index: 9999;
		/* #endif */
	}
	.maskClass{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.3);
		/* #ifndef APP-NVUE */
		z-index: 9999;
		/* #endif */
	}
	
</style>
