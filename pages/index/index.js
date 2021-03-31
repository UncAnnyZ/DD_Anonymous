const api = getApp().globalData.api
export default {
	data() {
		return {
			mode:"light",
			src:{
				like:"../../static/icon/btn_icon_like.png",
				liked:"../../static/icon/btn_icon_liked.png"
			},
			status_bar:{
				left_img:"../../static/icon/css_icon_dark.png",
				right_img:"../../static/icon/index_icon_search.png"
			},
			list:[{
					userinfo:{
						uid:"",
						uid:"",
						avatar:"",
						nickname:"昵称1"
					},
					time:"2021-2-4 18:00",
					text:"时间在追追赶赶，那我祝你，生活依旧碎碎念，念着平安，念着喜乐！",
					book:"《记本名称第三方》",
					image:[
						"../../static/picture/bg3.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称2"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称3"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称4"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称5"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称6"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称7"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称8"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg",
						"../../static/picture/bg1.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						uid:"",
						avatar:"",
						nickname:"昵称9"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					book:"《记本名称》",
					image:[
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
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				}
			]
		}
	},
	
	onLoad(){
		var userInfo = uni.getStorageSync("userInfo")
		console.log("onLoad")
	},
	
	methods: {
		// 更改样式（白天模式/深夜模式）
		change_css(){
			let css = getApp().globalData.css
			console.log(css)
			if(css == 'light'){
				// 全局模式
				getApp().globalData.css = 'dark'
				// 当前模式
				this.mode = 'dark'
				// 更改模式 显示的图标
				this.status_bar.left_img = "../../static/icon/css_icon_light.png"
				// 更改导航栏颜色
				// 关于导航栏的深色模式修改
				    // uni.setTabBarStyle({
				    //      color: '#B6B6B6',
				    //      selectedColor: '#EA8C1B',
				    //      backgroundColor: '#1F1F1F',
				    //      borderStyle: 'black'
				    // })
					
					
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#1f1f1f',
					animation: {
						duration: 2000,
						timingFunc: 'linear'
					}
				})
				// 更改状态栏颜色
				uni.setTabBarStyle({
					 color: '#B6B6B6',
					 backgroundColor: '#1F1F1F',
					 borderStyle: 'white'
				})
				
			} else if(css == 'dark'){
				getApp().globalData.css = 'light'
				this.mode = 'light'
				this.status_bar.left_img = "../../static/icon/css_icon_dark.png"

				// 更改导航栏颜色
				uni.setNavigationBarColor({
					frontColor: '#000000',
					backgroundColor: '#e0e0e0',
					animation: {
						duration: 2000,
						timingFunc: 'linear'
					}
				})
				// 更改状态栏颜色
				uni.setTabBarStyle({
					 color: '#494949',
					 backgroundColor: '#ffffff',
					 borderStyle: 'black'
				})
			}
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
							console.log(that.list[e.index].image[e.current])
							uni.saveImageToPhotosAlbum({
								filePath:that.list[e.index].image[e.current],
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
						url:"./save",
						animationType:"slide-in-top"
					})
				}
			})
			
			
		}
		
	}
}
