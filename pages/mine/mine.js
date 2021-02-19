const sysInfo = uni.getSystemInfoSync()
const statusBarHeight = sysInfo.statusBarHeight;
export default {
	data() {
		return {
			showStatus: false,
			percent: 0,
			scrollY: false,
			info: {
				background: "../../static/picture/bg4.jpg",
				avatar: "../../static/picture/xld.jpg",
				nickname: "昵称",
				newNickname: "昵称", // 同时用于展示
				sign: "个性签名"
			},
			situation: {
				follow: 10086, // 关注
				fans: 60, // 粉丝
				integral: 251 // 积分
			},
			current: 0,
			src:{
				like:"../../static/icon/btn_icon_like.png",
				liked:"../../static/icon/btn_icon_liked.png"
			},
			EDiary: [{
					id: "1",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称1"
				},
				{
					id: "2",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称2"
				},
				{
					id: "3",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称3"
				},
				{
					id: "4",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称4"
				},
				{
					id: "1",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称1"
				},
				{
					id: "2",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称2"
				},
				{
					id: "3",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称3"
				},
				{
					id: "4",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称4"
				},
				{
					id: "1",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称1"
				},
				{
					id: "2",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称2"
				},
				{
					id: "3",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称3"
				},
				{
					id: "4",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称4"
				},
				{
					id: "1",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称1"
				},
				{
					id: "2",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称2"
				},
				{
					id: "3",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称3"
				},
				{
					id: "4",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称4"
				},
				{
					id: "1",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称1"
				},
				{
					id: "2",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称2"
				},
				{
					id: "3",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称3"
				},
				{
					id: "4",
					img: "../../static/picture/bg1.jpg",
					name: "记本名称4"
				}
			],
			list: [{
					userinfo: {
						avatar: "",
						nickname: "昵称1"
					},
					time: "2021-2-4 18:00",
					text: "时间在追追赶赶，那我祝你，生活依旧碎碎念，念着平安，念着喜乐！",
					book: "《记本名称第三方》",
					image: [
						"../../static/picture/bg3.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				},
				{
					userinfo: {
						avatar: "",
						nickname: "昵称2"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				},
				{
					userinfo: {
						avatar: "",
						nickname: "昵称3"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				},
				{
					userinfo: {
						avatar: "",
						nickname: "昵称4"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				}, 
				{
					userinfo: {
						avatar: "",
						nickname: "昵称5"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				}, 
				{
					userinfo: {
						avatar: "",
						nickname: "昵称6"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				}, 
				{
					userinfo: {
						avatar: "",
						nickname: "昵称7"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				}, 
				{
					userinfo: {
						avatar: "",
						nickname: "昵称8"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				}, 
				{
					userinfo: {
						avatar: "",
						nickname: "昵称9"
					},
					time: "2021-2-4 18:00",
					text: "《青春伤痛文学》",
					book: "《记本名称》",
					image: [
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked: false,
					liked_status: true // true 时可发送更新数据，防止连续触发
				}
			],
			dialog: {
				content: ""
			}
		}
	},

	onPageScroll(e) {
		if (e.scrollTop >= statusBarHeight) {
			this.showStatus = true
			// (e.scrollTop - (211 - statusBarHeight)) / statusBarHeight;
			this.percent = (e.scrollTop - 211) / statusBarHeight + 1;
		} else {
			this.showStatus = false
		}
		if (e.scrollTop >= 338) {
			this.scrollY = true
		} else {
			this.scrollY = false
		}
	},
	onLoad() {
		console.log("mine onLoad")
	},
	onShow() {
		console.log("mine onShow")
	},
	onHide() {
		console.log("mine 页面隐藏")
	},
	onUnload() {
		console.log("mine 页面卸载")
	},
	methods: {

		// 点击设置按钮
		setting() {
			console.log("点击设置")
			uni.navigateTo({
				url: "../setting/setting"
			})
		},
		// 点击头像
		avatar() {
			console.log("点击头像")
			uni.navigateTo({
				url: "../login/login"
			})
		},
		// 点击编辑
		edit() {
			console.log("点击编辑")
		},

		change(e) {
			this.current = e.detail.current
		},
		
		
		// 预览图片
		previewImage(e){
			var that = this
			uni.previewImage({
				current:e.current,
				urls: that.list[e.index].image,
				indicator:"default",
				longPressActions: {	
					// 预览下 长按图片，底部弹出的列表
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success(res) {
						console.log('选中了第' + (res.index + 1) + '张图片,第' + (res.tapIndex + 1) + '个按钮');
						if(res.tapIndex == 1){
							// 保存图片到本地相册
							console.log(that.list[e.index].image[res.index])
							uni.saveImageToPhotosAlbum({
								filePath:that.list[e.index].image[res.index],
								success(res) {
									console.log(res.path)
								},
								fail:console.error()
							})
						}
					},
					fail: function(err) {
						console.log(err.errMsg);
					}
				}
			});
		},
		
		// 点击评论
		comment(e){
			console.log(e + "点击评论")
		},
		
		// 点赞
		like(e){
			var that = this
			// 更改当前的点赞状态
			this.list[e].liked = !this.list[e].liked
			console.log(this.list[e].liked_status)	
			// 点击后，2s后统计发送一次当前状态
			setTimeout(() => {
				if(that.list[e].liked_status){		// true 时可发送更新数据，防止连续触发
					console.log(e + "发送数据")
					that.list[e].liked_status = false	// 伪“同步信号量” hhhhh
					uni.request({
						url:"",
						data:"",
						success(res){
							
						},
						fail(res){
							console.log(res)
							// 失败时，统一视为点赞失败/未点赞
							that.list[e].liked = false
						},
						complete() {
							// 请求完成1s后才可以重新触发请求
							setTimeout(()=>{
								that.list[e].liked_status = true
							},1000)
						}
					})
				}
			},2000)
		},
		
		// 点击保存
		save(e){
			console.log(e + "点击更多")
			var that = this
			let data = {
				nickname: this.list[e].userinfo.nickname,	// 昵称（作者）
				time: this.list[e].time,					// 时间
				text: this.list[e].text,					// 文案
				book: this.list[e].book						// 记本
			}
			
			// 图片信息
			uni.getImageInfo({
				src: that.list[e].image[0],
				success(res) {
					// console.log(res)
					data.img = {
						height: res.height,
						width: 	res.width,
						path: 	res.path
					}
					// 缓存图片信息，下一页生成书签
					uni.setStorageSync("save_bookmark",data)
					uni.navigateTo({
						url:"../index/save",
						animationType:"slide-in-top"
					})
				}
			})
			
			
		}
		
	}
}
