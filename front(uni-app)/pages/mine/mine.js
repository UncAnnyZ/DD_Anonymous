const utils = require("../../utils/showModal.js")
export default {
	data() {
		return {
			info:{
				nickname:"昵称",
				newNickname:"昵称"	// 同时用于展示
			},
			situation:{
				dynamic:0,	// 动态
				follow:0,	// 关注
				fans:0,		// 粉丝
				likes:0		// 点赞
			},
			changingNickname:false
		}
	},
	methods: {
		
		// 点击设置按钮
		setting() {
			console.log("点击设置")
			uni.navigateTo({
				url:"../setting/setting"
			})
		},
		// 点击头像
		avatar() {
			console.log("点击头像")
			uni.navigateTo({
				url:"../login/login"
			})
		},
		
		// 编辑用户名/昵称
		edit() {
			var that = this
			let state = this.changingNickname
			console.log("点击" + `${!state?'编辑':'保存'}`)
			// 改名状态（是否正在改名）
			this.changingNickname = !this.changingNickname
			if(!this.changingNickname && this.info.newNickname != this.info.nickname ){
				// 点击保存时，且新昵称与原来的不同
				
				// #ifdef APP-PLUS
					uni.$emit('to_popup',{
						data:{
							content:"确认将昵称修改为 " + this.info.newNickname + " 吗？",
							confirmText:"确认修改",
							cancelText:"暂不修改"
						}
					})
					uni.$once('from_popup',function(res){
						console.log(res)
						if(res.confirm){
							// (检查重名并)更新昵称
							that.check(that.info.newNickname)
						} else{
							that.info.newNickname = that.info.nickname
						}
					})
				// #endif
				
				// #ifndef APP-PLUS
					uni.showModal({
						title:"温馨提示",
						content:"确认将昵称修改为 " + this.info.newNickname + " 吗？",
						confirmText:"确认修改",
						cancelText:"暂不修改",
						success(res) {
							console.log(res)
							if(res.confirm){
								that.check(that.info.newNickname)
							} else{
								that.info.newNickname = that.info.nickname
							}
						}
					})
				// #endif

			}
		},
		// 输入用户名
		input(e) {
			console.log(e.detail.value)
			this.info.newNickname = e.detail.value
		},

		/*
		 *@method: check
		 *@param: nickname:新的用户名; 
		 * 
		 */
		check(nickname) {
			const utils = require("../../utils/showModal.js")
			var that = this
			uni.request({
				url:"",
				method:"POST",
				data:{
					nickname
				},
				success(res) {
					console.log(res)
					if(res.data == 1) {
						that.info.nickname = that.info.newNickname
						utils.showModal({ content:"修改成功" })
					} else if(res.data == 2){
						that.info.newNickname = that.info.nickname
						utils.showModal({ content:"用户名已存在" })
					} else {
						that.info.newNickname = that.info.nickname
						utils.showModal({ content:"修改失败，请稍后重试" })
					}
				},
				fail(res){
					console.log(res)
					that.info.newNickname = that.info.nickname
					utils.showModal({ content:"修改失败，请稍后重试" })
				}
			})
		}
	}
}
