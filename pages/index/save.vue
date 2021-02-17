<template>
	<view>
		<!-- 用于与 renderjs 通信 -->
		<view style="position: fixed;" hidden :status="status" :change:status="ttt.save">
		</view>

		<view class="sq" @longpress="toTop" id="sq">

			<view class="sq_date">
				<view class="sq_date_dd">
					<text>{{info.timeArr[2]}}</text>
				</view>
				<view class="sq_date_mmyy">
					<text>{{info.timeArr[1]}}·{{info.timeArr[3]}}</text>
				</view>
			</view>

			<view class="sq_picture" :style="'height:' + imgHeight + 'rpx;'">
				<image :src="info.img.path" mode="aspectFit" :style="'height:' + imgHeight + 'rpx;'"></image>
			</view>

			<view class="sq_from">
				<text>{{info.book}}</text>
			</view>

			<view class="sq_text">
				<view class="sq_text_line" v-for="(item,index) in info.text" :key="index">
					<text>{{item}}</text>
				</view>
			</view>

			<view class="sq_who">
				<text>—— {{info.nickname}}</text>
			</view>

			<view class="sq_bottom">
				<view class="sq_bottom_dddd">
					<text>d/d/d/d</text>
				</view>

				<view class="sq_bottom_QR">
					<image src="../../static/picture/logo.png" mode="aspectFill"></image>
				</view>
			</view>

		</view>

	</view>
</template>

<script>

	export default {
		data() {
			return {
				imgHeight: "400",
				info: {
					"book": "《记本名称》",
					"img": {
						"height": 400,
						"path": "../../static/picture/bg3.jpg",
						"width": 710
					},
					"nickname": "你的名字",
					"text": "怎么摸鱼怎么来",
					"time": "2021-2-12 18:00"
				},
				status: false
			}
		},
		
		onLoad() {
			const info = uni.getStorageSync("save_bookmark")
			this.info = info
			this.produce(info)
		},
		onHide() {
			uni.hideLoading()
		},
		methods: {
			// 图片数据初始化
			produce(info) {
				var that = this
				// 获取图片信息 进行缩放
				uni.getImageInfo({
					src: info.img.path,
					success(res) {
						console.log(res)
						let wh = res.width / res.height

						that.imgHeight = 710 / wh
						that.info.img.height = res.height
						that.info.img.width = res.width
					}
				})
				// 时间切片后显示
				var t = new Date(info.time).toDateString()
				var tArray = t.split(" ")
				this.info.timeArr = tArray
				// 文案
				let text = info.text
				let arr = text.split(/[,.!，。！]/)
				this.info.text = arr
				
				uni.showToast({
					title: "加载完成，长按生成书签",
					icon: "none"
				})
			},

			// 询问并置顶
			toTop() {
				var that = this
				
				// #ifdef APP-PLUS
				// 召唤弹窗
				uni.$emit('to_popup', {
					data: {
						content: "是否生成书签并保存至相册"
					}
				})
				// 弹窗回调
				uni.$once('from_popup', function(res) {
					if (res.confirm) {
						uni.showLoading({
							title: "生成书签中"
						})
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 0
						})
						// 改变值，触发 renderjs.click 生成图片
						that.status = !that.status
					}
				})
				// #endif
				
				// #ifndef APP-PLUS
					uni.showModal({
						title: "温馨提示",
						content: "当前终端不支持该功能",
						showCancel: false
					})
				// #endif
			},
			
			// 保存图片
			saveBase64(imageStr) {
				uni.showLoading({
					title: "正在保存"
				})
				var that = this
				let bitmap = new plus.nativeObj.Bitmap();
				var photoName = "_img/" + "bookmark_" + that.info.nickname + "_" + Date.parse(new Date()) + ".jpg"
				bitmap.loadBase64Data(imageStr, function() {
					console.log("加载Base64图片数据成功")
					bitmap.save(photoName, {
						quality: 100
					}, function(i) {
						// 保存至相册
						uni.saveImageToPhotosAlbum({
							filePath: i.target,
							success: function() {
								uni.showToast({
									title: "书签保存成功"
								})
							},
							fail: function(e) {
								console.log("失败")
							},
							complete: function() {
								uni.hideLoading()
								bitmap.clear()
							}
						})
						console.log('保存书签成功：' + JSON.stringify(i))

					}, function(e) {
						console.log('保存书签失败：' + JSON.stringify(e))
						bitmap.clear()
					})

				}, function() {
					uni.hideLoading()
					console.log('加载Base64图片数据失败：' + JSON.stringify(e))
					bitmap.clear()
				})
			}
		}
	}
</script>

<script module='ttt' lang="renderjs">
	import html2canvas from '@/utils/node_modules/html2canvas/dist/html2canvas.min.js'
	export default {		
		methods: {
			save(newValue, oldValue, ownerVm, vm) {
				
				console.log('newValue', newValue)
				console.log('oldValue', oldValue)
				console.log('ownerVm', ownerVm)
				console.log('vm', vm)
				
				// #ifdef APP-PLUS
				console.log("开始制作生成base图片")
				html2canvas(document.getElementById('sq'), {
					backgroundColor: 'white',
					useCORS: true,
					taintTest: true,
					timeout: 2000
				}).then(canvas => {
					var imgUrl = canvas.toDataURL("image/jpg")
					ownerVm.callMethod('saveBase64', imgUrl)
				})
				// #endif
				
			}
		}
	}
</script>

<style>
	.sq {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */
		width: 710rpx;
		min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - 40rpx);
		padding: 20rpx;
		position: absolute;
	}

	.sq_date {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: baseline;
		padding-bottom: 10rpx;
	}

	.sq_date_dd {
		font-size: 30px;
		padding-right: 30rpx;
	}

	.sq_date_mmyy {
		font-size: 20px;
	}

	.sq_picture {
		width: 100%;
	}

	.sq_picture image {
		width: 100%;
	}

	.sq_from {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		padding: 10rpx 0;
	}

	.sq_text {
		padding: 10rpx 0;
	}

	.sq_text_line {
		display: flex;
		flex-wrap: wrap;
		font-size: 18px;
		padding: 5rpx 0;
		line-height: 30px;
	}

	.sq_who {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
	}

	.sq_bottom {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		width: 100%;
		height: 40rpx;
		padding-top: 80rpx;
		flex-grow: 1;
	}

	.sq_bottom_dddd {
		color: #888;
	}

	.sq_bottom_QR {
		display: flex;
		justify-content: flex-end;
		position: absolute;
		right: 20rpx;
		bottom: 20rpx;
	}

	.sq_bottom_QR image {
		height: 80rpx;
		width: 80rpx;
	}
</style>
