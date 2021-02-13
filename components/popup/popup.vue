<template>
	<div style="z-index:9999;overflow:hidden;" v-if="status">

		<!-- 蒙版 -->
		<view class="mask"></view>
		<view ref="popup" class="popup">
				<!-- 弹出框内容 -->
				<view class="model">
					<!-- 标题 -->
					<view class="model_title">
						<text class="model_title_text">{{title}}</text>
					</view>

					<!-- 信息内容 -->
					<view class="model_content">
						<text class="model_content_text">{{content}}</text>
					</view>

					<!-- 按钮 -->
					<view class="model_btn border_bottom_left_radius border_bottom_right_radius">
						<!-- 取消按钮 -->
						<button class="model_btn_cancel border_bottom_left_radius" id="cancel" type="default" @click="send('cancel')"
						 v-if="showCancel">
							<text class="model_btn_cancel_text" :style="'color:' + cancelColor">{{cancelText}}</text>
						</button>
						<!-- 确认按钮 -->
						<button class="model_btn_confirm border_bottom_right_radius" id="confirm" type="default" @click="send('confirm')"
						 :class="showCancel?'':'border_bottom_left_radius'" :style="showCancel?'':'width:600rpx;'">
							<text class="model_btn_confirm_text" :style="'color:' + confirmColor">{{confirmText}}</text>
						</button>
					</view>
				</view>


			</view>

	</div>
</template>

<script>
	
	export default {
		props: {
			title: {
				type: String,
				default: "温馨提示"
			},
			content: {
				type: String,
				default: "账号密码错误"
			},
			showCancel: {
				type: Boolean,
				default: true
			},
			cancelColor: {
				type: String,
				default: "#999999"
			},
			confirmColor: {
				type: String,
				default: "#007aff"
			},
			cancelText: {
				type: String,
				default: "取消"
			},
			confirmText: {
				type: String,
				default: "确认"
			},

		},
		data() {
			return {
				status: false //显示模态框 状态
			}
		},

		methods: {

			show() {
				if (this.status) {
					return;
				}
				this.status = true
			},
			send(e) {
				let data = {
					cancel: false,
					confirm: false
				}
				if (e == 'cancel') {
					data.cancel = true
				} else if (e == 'confirm') {
					data.confirm = true
				}
				// 不显示取消按钮时，不进行回调
				if(this.showCancel)
					this.$emit('hide', data)
				
				this.status = false
			}
		}
	}
</script>

<style scoped>
	
	/* 蒙版 */
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
		/* #ifndef APP-NVUE */
		z-index: 9999;
		/* #endif */
	},
	
	/* 弹窗 */
	.popup {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		
		/* #ifndef APP-NVUE */
		z-index: 9999;
		/* #endif */
	}

	/* 对话框 */
	.model {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 600rpx;
		height: 350rpx;
		border-radius: 30rpx;
		background-color: #fff;
		z-index: 99;
	}

	/* 标题栏 */
	.model_title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 15px;
		padding-bottom: 5px;
	}

	/* 标题栏中的文字 */
	.model_title_text {
		font-size: 16px;
		font-weight: 500;
		color: #333;
	}

	/* 提示信息栏 */
	.model_content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 5px 15px 15px 15px;
		/* flex-wrap: wrap;  */
	}

	/* 提示信息的文字 */
	.model_content_text {
		font-size: 14px;
		color: #6e6e6e;
	}

	/* 按钮栏 */
	.model_btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		background-color: #fff;
		border: 1rpx solid #F5F5F5;
	}

	/* 按钮 */
	.model_btn_cancel,
	.model_btn_confirm {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 299rpx;
		border-color: #FFFFFF;
		background-color: #fff;
		flex: 1;
		height: 90rpx;
	}
	.model_btn_cancel:after,
	.model_btn_confirm::after{
		border: none;
		outline: none;
	}

	.model_btn_confirm {
		border-left: 1rpx solid #F5F5F5;
		border-radius: 0;
	}

	/* 按钮中的文字 */
	.model_btn_cancel_text,
	.model_btn_confirm_text {
		text-align: center;
		font-weight: 400;
		font-size: 14px;
	}

	.model_btn_cancel_text {
		color: #999999;
	}

	.model_btn_confirm_text {
		/* color: #276ccc; */
		color: #007aff;
	}

	.border_bottom_left_radius {
		border-bottom-left-radius: 30rpx;
	}

	.border_bottom_right_radius {
		border-bottom-right-radius: 30rpx;
	}
</style>
