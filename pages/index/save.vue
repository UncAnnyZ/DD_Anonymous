<template>
	<view class="all">
		<canvas :style="'width: 750rpx; height:' + canvasHight + ';'" canvas-id="myCanvas" id="myCanvas"></canvas>
		<image class="save_img" src="../../static/icon/btn_icon_save.png" mode="aspectFit" @click="save"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasHight: "100vh"
			}
		},
		onShow() {
			const info = uni.getStorageSync("save_bookmark")
			console.log(info)
			this.produce(info)
		},
		methods: {
			produce(info) {
				console.log("开始绘画")
				const ctx = uni.createCanvasContext('myCanvas')
				
				var t = new Date(info.time).toDateString()
				console.log(t)
				var tArray = t.split(" ")
				console.log(tArray)
				console.log(tArray[0])	// Mon/Tues/Wed/Thur/Fri/Sat/Sun
				console.log(tArray[1])	// Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sept/Oct/Nov/Dec
				console.log(tArray[2])	// 01-31
				console.log(tArray[3])	// 2021
				
				// 记录高度
				let height = 20
				
				// 日
				ctx.setFontSize(50)
				ctx.fillText(tArray[2], 10, height + 40)
				// 月·年份
				ctx.setFontSize(18)
				ctx.fillText(tArray[1] + " · " + tArray[3], 100, height + 40)
				
				height += 50
				// 画图
				// 按比例缩放
				ctx.drawImage(info.img.path, 10, height, info.img.width * info.img.Wmul , info.img.height * info.img.Hmul)	// drawImage(dx, dy, dWidth, dHeight)
				
				height += info.img.height * info.img.Hmul	// 图高 + 自身处高度
				
				// 记本
				let length = info.book.length + 1	// 加的数为 = 20为中轴 ± 1
				ctx.setFontSize(15)		// 右边距 = 375(px) - 串长 * 字的大小
				ctx.fillText(info.book, 385 - length * 15, height + 20 + 2)	// 图高 + 字高 + 空行高度
				
				height += 35	// 35 = 15↑ + 20↓ (字高)
				
				// 文案
				let arr = this.getTextArray(info.text)
				ctx.setFontSize(18)
				for(let i = 0; i < arr.length; i++){
					ctx.fillText(arr[i], 10, height + (18 + 20) * (i + 1))	// 35=20+15(字高) 20+5(字高 + 行间距)
				}
				
				height = height + (20 + 20) * arr.length
				length = info.nickname.length + 1
				
				// 署名
				ctx.fillText(info.nickname, 385 - length * 18, height)	// 35=20+15(字高) 20+5(字高 + 行间距)
				
				height = height + 15 + 20 + 20
				
				// 落尾
				ctx.setFontSize(15)
				ctx.fillText("D/D/D/D", 160, height)
				
				// 加底边距
				height += 20
				this.canvasHight = height + "px"
				
				setTimeout(()=>{
					ctx.draw()
				},2000)
			},
			
			getTextArray(text){
				var arr = text.split(/[,.!，。！]/)
				console.log(arr)
				return arr
			},
			
			save(){
				uni.canvasToTempFilePath({
					canvasId: "myCanvas",
					success(res) {
						console.log(res)
						
						uni.saveImageToPhotosAlbum({
							filePath:res.tempFilePath,
							success(ress) {
								console.log(ress)
							}
						})
					}
				})
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
