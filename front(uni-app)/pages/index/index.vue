<template>
	<view class="all">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<view class="status_toppadding"></view>
		<view class="status">
			<view class="status_bar_top"></view>
			<view class="status_bar">
				<view class="status_bar_left">
					<image :src="status_bar.left_img" @click="change_css" mode="aspectFit"></image>
				</view>
				<view class="status_bar_center">
					<text>DDDD</text>
				</view>
				<view class="status_bar_right">
					<image :src="status_bar.right_img" @click="search" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		
		<view class="container">
			<view v-for="(item,index) in list" :key="index" class="list">
				<!-- 不知名的填充物 -->
				<view class="list_padding">
					
					<!-- 首栏信息栏 -->
					<view class="list_top">
						<view class="list_top_avatar">
							<image src="../../static/picture/logo.png" mode="center"></image>
						</view>
						<view class="list_top_right">
							<view class="list_top_right_nickname">
								<text>{{item.userinfo.nickname}}</text>
							</view>
							<view class="list_top_right_date">
								<text>{{item.time}}</text>
							</view>
						</view>
					</view>
					
					<!-- 文案 -->
					<view class="list_msg">
						<text>{{item.text}}</text>
					</view>
					
					<!-- 图片 -->
					<view class="list_image">
						<view class="list_image_left">
							<view class="list_image_left_img" v-if="item.image.length >= 1">
								<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
							</view>
						</view>
						<view class="list_image_right">
							<view class="list_image_right_top" v-if="item.image.length >= 2">
								<image :src="item.image[0]" mode="aspectFill" @click="previewImage({index,current:1})"></image>
							</view>
							<view class="list_image_right_bottom" v-if="item.image.length >= 3">
								<image :src="item.image[0]" mode="aspectFill" @click="previewImage({index,current:2})"></image>
							</view>
						</view>
					</view>
					
					<!-- 底部互动栏 -->
					<view class="list_bottom">
						<button type="default" @click="comment(index)">评论</button>
						<view class="list_bottom_img">
							<image :src="item.liked?(src.liked):(src.like)" mode="aspectFit" @click="like(index)"></image>
							<image src="../../static/icon/btn_icon_more.png" mode="aspectFit" @click="more(index)"></image>
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>


<script src="./index.js"> </script>
<style src="./index.css"> </style>
