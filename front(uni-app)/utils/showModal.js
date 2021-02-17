/**
 * @param {Object} res
 * 默认只当作‘提示’用的Modal
 */
function showModal(res){
	
		// #ifdef APP-PLUS
			uni.$emit('to_popup',{
				data:{
					title 		: res.title 		|| "温馨提示",
					content 	: res.content 	 	|| null,
					showCancel	: false,
					confirmText	: res.confirmText	|| "确认",
					confirmColor: res.confirmColor	|| null
					// showCancel: res.showCancel   == null? true: res.data.showCancel && true,
					// cancelColor  : res.cancelColor  || null,
					// cancelText   : res.cancelText 	|| "取消",
				}
			})
		// #endif
		
		// #ifndef APP-PLUS
			uni.showModal({
				title 		: res.title 		|| "温馨提示",
				content 	: res.content 	 	|| null,
				showCancel	: false,
				confirmText	: res.confirmText	|| "确认",
				cancelColor  : res.cancelColor  || null
				// showCancel 	: res.showCancel	&& true,
				// confirmColor : res.confirmColor	|| null,
				// cancelText	: res.cancelText	|| "取消",
			})
		// #endif
		
}

module.exports = {
	showModal:showModal
}