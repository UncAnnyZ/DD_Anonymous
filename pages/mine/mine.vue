<template>
	<view class="all">
		
		<view class="background">
			<image src="../../static/picture/bg2.jpg" mode="scaleToFill"></image>
		</view>
		
		<view class="setting">
			<image src="../../static/picture/templateHL.png" mode="aspectFit" @click="setting()"></image>
		</view>
		
		<view class="personalInfo">
			<view class="personalInfo_image">
				<image src="../../static/picture/uni.png" mode="center" @click="avatar"></image>
			</view>
			<view class="personalInfo_nickname">
				<input v-bind:disabled='!changingNickname' :style='!changingNickname?"":"border-bottom: #E6E6E6 1px solid;"' :value="info.newNickname" @input="input"></input>
				<button @click="edit()">{{!changingNickname?"编辑":"保存"}}</button>
			</view>
		</view>
		
		<view class="situation">
			<view class="situation_dynamic">
				<label>动态</label>
				<text>{{situation.dynamic}}</text>
			</view>
			<view class="situation_follow">
				<label>关注</label>
				<text>{{situation.follow}}</text>
			</view>
			<view class="situation_fans">
				<label>粉丝</label>
				<text>{{situation.fans}}</text>
			</view>
			<view class="situation_likes">
				<label>点赞</label>
				<text>{{situation.likes}}</text>
			</view>
			
		</view>
		
	</view>
</template>

<script src="./mine.js"> </script>
<style src="./mine.css"> </style>