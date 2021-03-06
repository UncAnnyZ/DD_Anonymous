
export default {
	data() {
		return {
			top:[
				{
					id:"email",
					src:"../../static/icon/message_icon_email.png",
					text:"信箱",
					isHave:{
						status: true,
						count: 6
					}
				},
				{
					id:"pill",
					src:"../../static/icon/message_icon_pill.png",
					text:"时光胶囊",
					isHave:{
						status: true,
						count: 6
					}
				}
			],
			buttonList:[
				{
					id:"comment",
					src:"../../static/icon/message_icon_comment.png",
					text:"评论",
					isHave:{
						status: false,
						count: 6
					}
				},
				{
					id:"liked",
					src:"../../static/icon/message_icon_liked.png",
					text:"点赞",
					isHave:{
						status: true,
						count: 999
					}
				},
				{
					id:"notice",
					src:"../../static/icon/message_icon_notice.png",
					text:"通知",
					isHave:{
						status: true,
						count: 58
					}
				}
			]
		}
	},
	methods: {
		click(e){
			console.log(e)
		}
	}
}
