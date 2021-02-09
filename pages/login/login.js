
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
	onUnload(){
		console.log("login 页面卸载")
		uni.$off("to_popup")
	},
	methods: {
		close(){
			console.log("点击关闭")
		},
		
		// 键盘输入
		input(e){
			switch(e.currentTarget.id){
				case "username":{
					this.info.username = e.detail.value
					break
				}
				case "code":{
					this.info.code = e.detail.value
					break
				}
			}
		},
		
		// 校验帐号格式
		checkUsername(username){
			var phone = /^1[3-9][0-9]{9}$/;
			var email = /^([a-zA-Z0-9])(\w|\-)+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
			console.log(phone.test(username))
			console.log(email.test(username))
			return phone.test(username) || email.test(username)
		},
		// 点击获取验证码
		getCode(){
			var that = this
			console.log("获取验证码")
			if(this.info.username == ""){
				showModal("账号不能为空");
			} 
			else {
				this.sec = 60
				this.settime()
				uni.request({
					url:getApp().globalData.host + "getcode",
					method:"POST",
					data:{
						username: that.info.username
					},
					success() {
						uni.showToast({
							title:"验证码已发送，注意查收",
							icon:"none"
						})
					},
					fail() {
						uni.showToast({
							title:"获取失败，请稍后重试",
							icon:"none"
						})
						that.sec = 0
					}
				})
			}
		},
		// 验证码倒计时
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
		
		// 同意协议、条款
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
		
		// 点击登录
		login(){
			console.log("点击登录")
			if(!this.agree){
				this.showModal('暂未同意"用户协议"和"隐私条款"')
			} else if(this.info.username == ""){
				this.showModal("帐号不能为空");
			} else if( !this.checkUsername(this.info.username) ){
				this.showModal("帐号格式不正确")
			} else if(this.info.code == ""){
				this.showModal("验证码不能为空");
			} else if(this.info.code.length != 6){
				this.showModal("验证码不正确");
			} else {
				uni.showLoading({
					title:"登录中"
				})
				
				// APP指定弹窗样式
				// #ifdef APP-PLUS
					uni.$once('from_popup',function(res){
						// 接收到返回的信息
						console.log(res)
					})
					uni.$emit('to_popup',{
						data:{
							title: "温馨提示",
							content: "提示的信息",
							showCancel: false
						}
					})
				// #endif
				
				// #ifndef APP-PLUS
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
				// #endif
				
				setTimeout(()=>{
					uni.hideLoading()
				},3000)
			}
			
		},
		
		// 第三方登录
		otherLogin(e){
			switch(e.currentTarget.id){
				case "wx":{
					console.log("微信登录")
					uni.showToast({
						title:"暂不支持微信登录哦",
						icon:"none"
					})
					break
				}
				case "qq":{
					console.log("QQ登录")
					uni.showToast({
						title:"暂不支持QQ登录哦",
						icon:"none"
					})
					break
				}
				case "wb":{
					console.log("微博登录")
					uni.showToast({
						title:"暂不支持微博登录哦",
						icon:"none"
					})
					break
				}
			}
		},
		
		showModal(msg){
			const res = uni.getSystemInfoSync();
			console.log(res)
			
			// #ifdef APP-PLUS
			uni.$emit('to_popup',{
				data:{
					content: msg,
					showCancel: false
				}
			})
			// #endif
			
			// #ifndef APP-APP-PLUS
			uni.showModal({
				title:"温馨提示",
				content:msg,
				showCancel:false
			})
			// #endif
			
		}
	}
}
