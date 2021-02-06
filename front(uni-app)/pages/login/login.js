
export default {
	data() {
		return {
			info:{
				username:"",
				code:""
			},
			agree:false,
			sec:"获取验证码"
		}
	},
	methods: {
		close(){
			console.log("点击关闭")
		},
		input(e){
			switch(e.currentTarget.id){
				case "username":{
					this.info.username = e.detail.value
					break
				}
				case "code":{
					this.info.code = e.detal.value
					break
				}
			}
		},
		getCode(){
			console.log("获取验证码")
			this.sec = 60
			this.settime()
		},
		settime(){
			if(this.sec){
				this.sec--
			} else{
				this.sec = "获取验证码"
				return
			}
			setTimeout(() => {
				this.settime()
			},1000)
		},
		
		login_agree(e){
			switch(e.currentTarget.id){
				case "checkbox":{
					this.agree = !this.agree
					console.log("当前同意:" + this.agree)
					break
				}
				case "agreement":{
					console.log("点击 用户协议")
					break
				}
				case "clause":{
					console.log("点击 隐私条款")
					break
				}
			}
		},
		login(){
			console.log("点击登录")
			uni.hideLoading()
			// uni.showLoading({
			// 	title:"加载中"
			// })
			uni.showModal({
				title:"温馨提示",
				content:"点击登录",
				showCancel:false,
				success(res){
					console.log(res)
					uni.showToast({
						title:"温馨提示",
						icon:"none"
					})
				}
			})
			setTimeout(() => {
				uni.hideLoading()
			},3000)
		},
		otherLogin(e){
			switch(e.currentTarget.id){
				case "wx":{
					console.log("微信登录")
					break
				}
				case "qq":{
					console.log("QQ登录")
					break
				}
				case "wb":{
					console.log("微博登录")
					break
				}
			}
		}
	}
}
