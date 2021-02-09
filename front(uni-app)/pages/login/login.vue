<template>
	<view class="all">
		<!-- 
		<view class="close_icon">
			<image src="../../static/icon/close.png" mode="aspectFit" @click="close"></image>
		</view> -->
		
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
				<image class="otherLogin_applogo_wx" id="wx" @click="otherLogin" src="../../static/icon/wx_logo.png" mode="aspectFit"></image>
				<image class="otherLogin_applogo_qq" id="qq" @click="otherLogin" src="../../static/icon/qq_logo.png" mode="aspectFit"></image>
				<image class="otherLogin_applogo_wb" id="wb" @click="otherLogin" src="../../static/icon/wb_logo.png" mode="aspectFit"></image>
			</view>
		</view>
		
	</view>
</template>

<script src="./login.js"> </script>
<style src="./login.css"> </style>
