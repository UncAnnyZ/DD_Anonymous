<template>
	<view class="all">
		<!-- #ifndef APP-PLUS -->
			<popup ref="dialog" :showCancel="true" content="是否保存到相册" confirmText="保存" @hide='pop'></popup>
		<!-- #endif -->
		<canvas :style="'width:' + canvasWidth + '; height:' + canvasHight + ';'" canvas-id="myCanvas" id="myCanvas" @longpress="save"></canvas>
		<!-- <image class="save_img" src="../../static/icon/btn_icon_save.png" mode="aspectFit" @click="save"></image> -->
	</view>
</template>

<script>
	const device = uni.getSystemInfoSync()
	const screenWidth = device.screenWidth	// 屏幕宽度 px
	const padding = 20	// 白边边距 px
	
	export default {
		data() {
			return {
				canvasHight: device.windowHeight + "px",
				canvasWidth: "750rpx"
			}
		},
		onLoad() {
			const info = uni.getStorageSync("save_bookmark")
			console.log(info)
			console.log(device)
			this.produce(info)
		},
		onHide() {
			uni.removeStorageSync("save_bookmark")
			uni.hideLoading()
		},
		methods: {
			
			// 画图
			produce(info) {
				uni.showLoading({
					title: "生成中"
				})
				// console.log(device)
				
				var Wmul = (screenWidth - padding * 2) / (info.img.width)
				var Hmul = ( info.img.height / info.img.width ) /2
				
				console.log("开始绘画")
				const ctx = uni.createCanvasContext('myCanvas')
				
				var t = new Date(info.time).toDateString()
				// console.log(t)
				var tArray = t.split(" ")
				// console.log(tArray)
				// console.log(tArray[0])	// Mon/Tues/Wed/Thur/Fri/Sat/Sun
				// console.log(tArray[1])	// Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sept/Oct/Nov/Dec
				// console.log(tArray[2])	// 01-31
				// console.log(tArray[3])	// 2021
				
				// 记录高度
				let height = padding
				
				// 日
				ctx.setFontSize(50)
				ctx.fillText(tArray[2], padding , height + 40)
				// 月·年份
				ctx.setFontSize(18)
				ctx.fillText(tArray[1] + " · " + tArray[3], padding + 80, height + 40)
				
				height += 50
				// 画图
				// 按比例缩放
				ctx.drawImage(info.img.path, padding, height, info.img.width * Wmul , info.img.height * Hmul)	// drawImage(dx, dy, dWidth, dHeight)
				
				height += info.img.height * Hmul	// 图高 + 自身处高度
				
				// 记本
				let length = info.book.length + 1	// 加的数为 = 20为中轴 ± 1
				ctx.setFontSize(15)		// 右边距 = 375(px) - 串长 * 字的大小
				ctx.fillText(info.book, screenWidth - length * 15, height + 20 + 2)	// 图高 + 字高 + 空行高度
				
				height += 35	// 35 = 15↑ + 20↓ (字高)
				
				// 文案
				let arr = this.getTextArray(info.text)
				ctx.setFontSize(18)
				for(let i = 0; i < arr.length; i++){
					ctx.fillText(arr[i], padding, height + (18 + 20) * (i + 1))	// 20+5(字高 + 行间距)
				}
				
				height += arr.length > 1 ? (20 + 20) * arr.length : (20 + 20) * (arr.length + 1)
				length = info.nickname.length
				
				// 署名
				ctx.fillText(info.nickname, screenWidth - length * 18, height)	// 20+5(字高 + 行间距)
				
				height = height + 15 + 20 + 20
				
				// 落尾
				ctx.setFontSize(15)
				ctx.fillText("D/D/D/D", screenWidth / 2 - 15 * 2 , device.windowHeight >= height ? device.windowHeight - 20 : height)
				
				// 加底边距
				height += 20
				this.canvasHight = device.windowHeight >= height ? (device.windowHeight + "px"):(height + "px")
				this.canvasWidth = device.screenWidth + "px"
				
				setTimeout(()=>{
					ctx.draw()
					uni.hideLoading({
						success: uni.showToast({
							title: " 长按保存 ",
							icon: "none"
						})
					})
				},2000)
			},
			
			getTextArray(text){
				var arr = text.split(/[,.!，。！]/)
				// console.log(arr)
				return arr
			},
			
			preview(){
				uni.canvasToTempFilePath({
					canvasId: "myCanvas",
					fileType: "jpg",
					success(res) {
						uni.previewImage({
							current:0,
							urls: [res.tempFilePath],
							longPressActions: {
								itemList: ['保存图片'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						})
					}
				})
				
			},
			save(){
				var that = this
				// #ifndef APP-PLUS
					this.$refs.dialog.show()
				// #endif
				
				// #ifdef APP-PLUS
					uni.$emit('to_popup',{
						data:{
							content: "是否保存到相册"
						}
					})
					uni.$once('from_popup',function(res){
						that.pop(res)
					})
				// #endif
			},
			pop(res){
				if(res.confirm){
					uni.canvasToTempFilePath({
						canvasId: "myCanvas",
						fileType: "jpg",
						success(res) {
							// console.log(res.tempFilePath)
							uni.saveImageToPhotosAlbum({
								filePath:res.tempFilePath,
								success(ress) {
									// console.log(ress.path)
									uni.showToast({
										title: "已成功保存至相册",
										icon: "none"
									})
								},
								fail() {
									uni.showToast({
										title: "保存失败",
										icon: "none"
									})
								}
							})
						}
					})
				}
			}
		}
	}
</script>

<style>
.all{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* padding: 20rpx; */
}
.save_img{
	padding-top: 20rpx;
	width: 120rpx;
	height: 120rpx;
}
</style>
