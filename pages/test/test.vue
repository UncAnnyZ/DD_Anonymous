<template>
	<view>
		
		<view class="sq" @click="ttt.click" id="sq">
			
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
				<text>—{{info.nickname}}</text>
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
	const device = uni.getSystemInfoSync()
	const screenWidth = device.screenWidth	// 屏幕宽度 px
	const padding = 20	// 白边边距 px
	
	export default {
		data() {
			return {
				imgHeight:"480",
				info: {
					"book": "《记本名称第三方》",
					"img": {
						"height": 534,
						"path": "../../static/picture/bg3.jpg",
						"width": 800
					},
					"nickname": "—— 昵称1",
					"text": "时间在追追赶赶那我祝你 生活依旧碎碎念 念着平安 念着喜乐时间在追追赶赶，那我祝你，生活依旧碎碎念，念着平安，念着喜乐！",
					"time": "2021-2-4 18:00"
				}
			}
		},
		mounted() {
			
		},
		onLoad() {
			var i = uni.getSystemInfoSync()
			console.log(i)
			this.produce()
		},
		methods: {

			produce() {
				var info = this.info
				console.log(info)
				
				var that = this
				uni.getImageInfo({
					src: that.info.img.path,
					success(res) {
						console.log(res)
						let wh = res.width / res.height
						
						that.imgHeight = 710 / wh
						that.info.img.height = res.height
						that.info.img.width = res.width
					}
				})
				
				
				var t = new Date(this.info.time).toDateString()
				var tArray = t.split(" ")
				this.info.timeArr = tArray
				
				// 文案
				let text = info.text
				let arr = text.split(/[,.!，。！]/)
				this.info.text = arr
			},
			
			
			
			saveBase64(imageStr) {
				uni.showLoading({
					title: "正在保存"
				})
				let bitmap = new plus.nativeObj.Bitmap();
				bitmap.loadBase64Data(imageStr, function(){
					console.log("加载Base64图片数据成功")
					bitmap.save("_img/" + Date.parse(new Date()) + ".jpg",{
						quality: 100
					}, function(i){
						uni.saveImageToPhotosAlbum({
							filePath: i.target,
							success:function(){
								uni.showToast({
									title: "图片保存成功"
								})
							},
							fail:function(e){
								console.log("失败")
							},
							complete:function(){
								uni.hideLoading()
								bitmap.clear()
							}
						})
						console.log('保存图片成功：' + JSON.stringify(i))
					}, function(e){
						console.log('保存图片失败：' + JSON.stringify(e))
						bitmap.clear()
					})
				}, function(){
					uni.hideLoading()
					console.log('加载Base64图片数据失败：'+ JSON.stringify(e))
					bitmap.clear()
				})
			},
		
			test(){
				console.log("test")
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				var bitmap = null;
				
				var currentWebview = page.$getAppWebview();
				
				bitmap = new plus.nativeObj.Bitmap('amway_img');
				// 将webview内容绘制到Bitmap对象中  
				currentWebview.draw(bitmap, function() {
					bitmap.save("_doc/a.jpg", {}, function(i) {
						uni.saveImageToPhotosAlbum({
							filePath: i.target,
							success: function() {
								bitmap.clear(); //销毁Bitmap图片  
								uni.showToast({
									title: '截图已保存到相册',
									mask: false,
									duration: 1500
								});
							}
						});
					}, function(e) {
						console.log('保存图片失败：' + JSON.stringify(e));
					});
				}, function(e) {
					console.log('截屏绘制图片失败：' + JSON.stringify(e));
				});
			}
		}
	}
</script>

<script module='ttt' lang="renderjs">
	
	import html2canvas from '@/utils/node_modules/html2canvas/dist/html2canvas.min.js'
	export default {
		mounted(){
			
		},
		methods: {
			click(event, ownerInstance) {
					console.log("触发成功")
					var that = this
					html2canvas(document.getElementById('sq'),{
						backgroundColor: 'white',
						useCORS: true,
						taintTest: true,
						timeout: 2000
					}).then(canvas => {
						var imgUrl = canvas.toDataURL("image/jpg")
						ownerInstance.callMethod('saveBase64', imgUrl)
						// that.saveBase64(imgUrl)
					})
				}
		}
	}
</script>

<style>

.sq{
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	width: 710rpx;
	min-height: calc( 100vh - var(--status-bar-height) - var(--window-top) - 40rpx);
	padding: 20rpx;
	position: absolute;
}

.sq_date{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: baseline;
	padding-bottom: 10rpx;
}
.sq_date_dd{
	font-size: 30px;
	padding-right: 30rpx;
}
.sq_date_mmyy{
	font-size: 20px;
}

.sq_picture{
	width: 100%;
}
.sq_picture image{
	width: 100%;
}

.sq_from{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	padding: 10rpx 0;
}

.sq_text{
	padding: 10rpx 0;
}
.sq_text_line{
	display: flex;
	flex-wrap: wrap;
	font-size: 18px;
	padding: 5rpx 0;
	line-height: 30px;
}

.sq_who{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
}

.sq_bottom{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	height: 40rpx;
	padding-top: 80rpx;
	flex-grow: 1;
}

.sq_bottom_dddd{
	color: #888;
}

.sq_bottom_QR{
	display: flex;
	justify-content: flex-end;
	position: absolute;
	right: 20rpx;
	bottom: 20rpx;
}
.sq_bottom_QR image{
	height: 80rpx;
	width: 80rpx;
}



</style>
