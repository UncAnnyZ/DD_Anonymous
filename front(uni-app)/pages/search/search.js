export default {
	data() {
		return {
			current:0,
			EDiary:[
				{
					id:"1",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称1"
				},
				{
					id:"2",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称2"
				},
				{
					id:"3",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称3"
				},
				{
					id:"4",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称4"
				},
				{
					id:"1",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称1"
				},
				{
					id:"2",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称2"
				},
				{
					id:"3",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称3"
				},
				{
					id:"4",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称4"
				},
				{
					id:"1",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称1"
				},
				{
					id:"2",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称2"
				},
				{
					id:"3",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称3"
				},
				{
					id:"4",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称4"
				},
				{
					id:"1",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称1"
				},
				{
					id:"2",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称2"
				},
				{
					id:"3",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称3"
				},
				{
					id:"4",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称4"
				},
				{
					id:"1",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称1"
				},
				{
					id:"2",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称2"
				},
				{
					id:"3",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称3"
				},
				{
					id:"4",
					img:"../../static/picture/bg2.jpg",
					name:"记本名称4"
				}
			],
			User:[
				{
					avatar:"../../static/picture/logo.png",
					nickname:"昵称1",
					sign:"个性签名1"
				},
				{
					avatar:"../../static/picture/logo.png",
					nickname:"昵称2",
					sign:"个性签名2"
				},
				{
					avatar:"../../static/picture/logo.png",
					nickname:"昵称3",
					sign:"个性签名3"
				}
			]
		}
	},
	onLoad() {

	},
	methods: {
		back() {
			console.log("返回")
			uni.switchTab({
				url: "../index/index"
			})
		},
		search(e) {
			console.log("搜索:" + e.detail.value)
		},
		
		change(e){
			this.current = e.detail.current
		}


	}
}
