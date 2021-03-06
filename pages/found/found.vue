<template>
	<view>
		<view class="status_toppadding"></view>
		<view class="status">
			<view class="status_bar_top"></view>
			<view class="status_bar">
				<view class="status_bar_left">
					<!-- <image :src="status_bar.left_img" @click="change_css" mode="aspectFit"></image> -->
				</view>
				<view class="status_bar_center">
					<text>广场</text>
				</view>
				<view class="status_bar_right">
					<!-- <image :src="status_bar.right_img" @click="search" mode="aspectFit"></image> -->
					<navigator open-type="navigate" url="../search/search"  hover-class="none">
						<image :src="status_bar.right_img" mode="aspectFit"></image>
					</navigator>
				</view>
			</view>
		</view>
		
		<view class="container">
			<view class="list" v-for="(item,index) in list" :key="index">
				<view class="list_EDiary">
					<view class="EDiary_img">
						<image :src="item.EDiary.img" mode="center"></image>
					</view>
					<view class="EDiary_text">
						<view class="EDiary_text_name">
							<text>{{item.EDiary.name}}</text>
						</view>
						<view class="EDiary_text_introduce">
							<text>{{item.EDiary.introduce}}</text>
						</view>
					</view>
					
				</view>
				
				<view class="list_situation">
					<view class="list_situation_record">
						<text>{{item.record}}</text>
						<label>记录</label>
					</view>
					<view class="list_situation_liked">
						<text>{{item.liked}}</text>
						<label>点赞</label>
					</view>
					<view class="list_situation_follow">
						<text>{{item.follow}}</text>
						<label>关注</label>
					</view>
					
				</view>
				
			</view>
				
		</view>
		
	</view>
</template>


<script src="./found.js"> </script>
<style src="./found.css"> </style>
