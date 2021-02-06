
# 
 + 调用自定义nvue弹窗
		// 打开本次事件监听
		uni.$once('from_popup',function(res){
			// 传递参数信息
			uni.$emit('to_popup',{
				data:{
					title = "温馨提示"
					content = "提示的信息"
					showcancel = true
					cancelColor = "#999999"
					confirmColor = "#007aff"
					cancelText  = "取消"
					confirmText = "确认"
				}
			})
			// 接收到返回的信息
			console.log(res)
			# res.data = {
			#	 cancel: false,
			#	 confirm: false
			# }
		})
		
	