<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(e) {
			// let title = e.show == "argeement"?"用户协议":(e.show == "clause"?"隐私条款":"无效空白页") )
			let title = function(e) {
				if (e.show == "agreement")
					return "用户协议"
				else if (e.show == "clause")
					return "隐私条款"
				else
					return "无效空白页"
			}
			uni.setNavigationBarTitle({
				title:title(e)
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
