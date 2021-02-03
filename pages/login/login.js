
export default {
	data() {
		return {
			info:{
				username:"",
				code:""
			},
			agree:false
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
