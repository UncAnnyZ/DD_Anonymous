<template>
	<view class="all">
		
		<view class="close_icon">
			<!-- .svg 真机会直接丢失 -->
			<!-- <image src="data:image/svg+xml;utf8,<svg t='1612368055924' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1132' width='200' height='200'><path d='M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z' p-id='1133' fill='#8a8a8a'></path><path d='M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' p-id='1134' fill='#8a8a8a'></path></svg>" mode="aspectFit"></image> -->
			<image src="../../static/icon/close.png" mode="aspectFit" @click="close"></image>
		</view>
		
		<view class="logo">
			<!-- <image class="logo_icon" src="" mode=""></image> -->
			<text class="logo_icon">DDDD</text>
			<text class="logo_idea">怎么摸鱼怎么来</text>
		</view>
		
		<view class="login">
			<view class="login_username">
				<label>帐号</label>
				<input type="text" id="username" placeholder="手机号码/登录邮箱" value="" @input="input"/>
			</view>
			<view class="login_validate">
				<label>验证码</label>
				<input type="number" id="code" placeholder="请输入验证码" maxlength="6" value=""  @input="input"/>
				<button type="default" @click="getCode" v-bind:disabled='sec!="获取验证码"'>{{sec}}</button>
			</view>
			<view class="login_agree">
				<label class="login_agree_checkbox" id="checkbox" @click="login_agree"> 
					<checkbox />
					<text>同意</text>
				</label>
				<text>《</text>
				<label class="login_agree_agreement" id="agreement" @click="login_agree">用户协议</label>
				<text>和</text>
				<label class="login_agree_clause" id="clause" @click="login_agree">隐私条款</label>
				<text>》</text>
			</view>
			
			<view class="login_btn">
				<button type="default" @click="login">
					<text>登录</text>
				</button>
			</view>
		</view>
		
		<view class="otherLogin">
			<view class="otherLogin_tips">
				<view class="otherLogin_tips_line"></view>
				<text>使用第三方登录</text>
				<view class="otherLogin_tips_line"></view>
			</view>
			<view class="otherLogin_applogo">
				<image class="otherLogin_applogo_wx" id="wx" @click="otherLogin" src="../../static/icon/wechat.png" mode="aspectFit"></image>
				<image class="otherLogin_applogo_qq" id="qq" @click="otherLogin" src="../../static/icon/qq.png" mode="aspectFit"></image>
				<image class="otherLogin_applogo_wb" id="wb" @click="otherLogin" src="../../static/icon/weibo.png" mode="aspectFit"></image>
			</view>
		</view>
		
	</view>
</template>

<script src="./login.js"> </script>
<style src="./login.css"> </style>
