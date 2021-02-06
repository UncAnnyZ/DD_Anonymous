
export default {
	data() {
		return {
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
						avatar:"",
						nickname:"昵称"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					image:[
						"../../static/picture/bg2.jpg",
						"../../static/picture/bg2.jpg",
						"../../static/picture/bg2.jpg"
					],
					liked:false,
					liked_status:true	// true 时可发送更新数据，防止连续触发
				},{
					userinfo:{
						avatar:"",
						nickname:"昵称2"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					image:[
						"../../static/picture/bg2.jpg",
						"../../static/picture/bg2.jpg",
						"../../static/picture/bg2.jpg"
					],
					liked:false,
					liked_status:true
				}
			]
		}
	},
	
	onLoad(){
		
	},
	
	methods: {
		// 更改样式（白天模式/深夜模式）
		change_css(){
			let css = getApp().globalData.css
			console.log(css)
			if(css == 'light'){
				getApp().globalData.css = 'dark'
				this.status_bar.left_img = "../../static/icon/css_icon_light.png"
			} else if(css == 'dark'){
				getApp().globalData.css = 'light'
				this.status_bar.left_img = "../../static/icon/css_icon_dark.png"
			}
		},
		search(){
			console.log("点击搜索按钮")
			uni.navigateTo({
				url:"../search/search",
				animationType:"pop-in",
				animationDuration:5000
			})
		},
		
		// 预览图片
		previewImage(e){
			var that = this
			uni.previewImage({
				current:e.current,
				urls: that.list[e.index].image,
				indicator:"default",
				longPressActions: {	
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success(res) {
						console.log('选中了第' + (res.index + 1) + '张图片,第' + (res.tapIndex + 1) + '个按钮');
						if(res.tapIndex == 1){
							// 保存图片到本地相册
							console.log(that.list[e.index].image[e.current])
							// uni.saveImageToPhotosAlbum({
							// 	filePath:that.list[e.index].image[e.current],
							// 	success(res) {
							// 		console.log(res.path)
							// 	},
							// 	fail:console.error()
							// })
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
			this.list[e].liked = !this.list[e].liked
			console.log(this.list[e].liked_status)
			setTimeout(() => {
				if(that.list[e].liked_status){
					console.log(e + "发送数据")
					that.list[e].liked_status = false
					uni.request({
						url:"",
						data:"",
						success(res){
							
						},
						fail(res){
							console.log(res)
							that.list[e].liked = false
						},
						complete() {
							setTimeout(()=>{
								that.list[e].liked_status = true
							},1000)
						}
					})
				}
			},2000)
		},
		
		// 点击更多
		more(e){
			console.log(e + "点击更多")
		}
	}
}
