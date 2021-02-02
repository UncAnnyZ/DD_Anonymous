
export default {
	data() {
		return {
			info:{
				nickname:"昵称",
				newNickname:"昵称"
			},
			situation:{
				dynamic:0,
				follow:0,
				fans:0,
				likes:0
			},
			changingNickname:false
		}
	},
	methods: {
		
		// 点击头像
		avatar() {
			console.log("点击头像")
		},
		
		// 编辑用户名/昵称
		edit() {
			var that = this
			let state = this.changingNickname
			console.log("点击" + `${!state?'编辑':'保存'}`)
			this.changingNickname = !this.changingNickname
			if(!this.changingNickname && this.info.newNickname != this.info.nickname ){
				uni.showModal({
					title:"温馨提示",
					content:"确认将昵称修改为 " + this.info.newNickname + " 吗？",
					confirmText:"确认修改",
					cancelText:"暂不修改",
					success(res) {
						console.log(res)
						if(res.confirm){
							check(that.info.newNickname)
						} else{
							that.info.newNickname = that.info.nickname
						}
					}
				})
			}
		},
		
		// 输入用户名
		input(e) {
			console.log(e.detail.value)
			this.info.newNickname = e.detail.value
		},
		
		// 点击设置按钮
		setting() {
			console.log("点击设置")
			uni.request({
				url:"http://localhost:3000/",
				success(res) {
					console.log(res)
					console.log(res.data.name)
				}
			})
		},
		
		/*
		 *@method: check
		 *@param: nickname:新的用户名; 
		 * 
		 */
		check(nickname) {
			uni.request({
				url:"",
				data:{
					nickname
				},
				success(res) {
					console.log(res)
					if(res.result) {
						this.info.nickname = this.info.newNickname
						uni.showModal({
							title:"温馨提示",
							content:"修改成功",
							showCancel:false
						})
					} else {
						uni.showModal({
							title:"温馨提示",
							content:"用户名已存在，修改失败",
							showCancel:false
						})
					}
				},
				fail:console.error()
			})
		}
	}
}
