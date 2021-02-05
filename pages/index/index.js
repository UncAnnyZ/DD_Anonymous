
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/component/README?id=uniui',
			msg:"this is msg",
			show:false
		}
	},
	onNavigationBarButtonTap() {  
			console.log("点击了自定义按钮");  
	},  
	onLoad(){
		uni.$on('from_popup',function(res){
			console.log(res)
		})
	},
	
	methods: {
		aaa(){
			this.show = !this.show
			// const subNVue = uni.getSubNVueById('popup')
			// subNVue.show()
			uni.$emit('to_popup',{
				data:{
					title:"温馨提示222",
					content:"账号密码错误222",
					showcancel:true
					// cancelColor:"#f00"
				}
			})
		},
		nat(){
			uni.navigateTo({
				url:"../test/test"
			})
		}
	}
}
