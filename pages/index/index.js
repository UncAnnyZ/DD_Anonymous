
export default {
	data() {
		return {
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
						"",
						"",
						""
					]
				},{
					userinfo:{
						avatar:"",
						nickname:"昵称2"
					},
					time:"2021-2-4 18:00",
					text:"《青春伤痛文学》",
					image:[
						"",
						"",
						""
					]
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
		},
		
	}
}
