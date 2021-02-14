<template>
	<view class="all">
		
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		
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
					<!-- <image :src="status_bar.right_img" @click="search" mode="aspectFit"></image> -->
					<navigator url="../search/search"  hover-class="none">
						<image :src="status_bar.right_img" mode="aspectFit"></image>
					</navigator>
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
					<view class="list_image" v-bind:class="'list_image_' + item.image.length">
						
						<view class="list_image_first" v-if="item.image.length == 1">
							<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
						</view>
						
						<view class="list_image_second" v-if="item.image.length == 2 || item.image.length == 5">
							<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
							<image :src="item.image[1]" mode="center" @click="previewImage({index,current:1})"></image>
						</view>
						
						<view class="list_image_third_sixth" v-if="item.image.length == 3 || item.image.length == 6">
							<view class="list_image_third_left">
								<view class="list_image_third_left_img">
									<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
								</view>
							</view>
							<view class="list_image_third_right">
								<view class="list_image_third_right_top">
									<image :src="item.image[1]" mode="center" @click="previewImage({index,current:1})"></image>
								</view>
								<view class="list_image_third_right_bottom">
									<image :src="item.image[2]" mode="center" @click="previewImage({index,current:2})"></image>
								</view>
							</view>
						</view>
						
						<view class="list_image_forth" v-if="item.image.length == 4">
							<view class="list_image_forth_item">
								<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
								<image :src="item.image[1]" mode="center" @click="previewImage({index,current:1})"></image>
							</view>
							<view class="list_image_forth_item">
								<image :src="item.image[2]" mode="center" @click="previewImage({index,current:2})"></image>
								<image :src="item.image[3]" mode="center" @click="previewImage({index,current:3})"></image>
							</view>
						</view>
		
						<view class="list_image_seventh" v-if="item.image.length == 7">
							<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
						</view>
						
						<view class="list_image_eighth" v-if="item.image.length == 8">
							<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
							<image :src="item.image[1]" mode="center" @click="previewImage({index,current:1})"></image>
						</view>
						
						<view class="list_image_ninth" v-if="item.image.length == 9">
							<image :src="item.image[0]" mode="center" @click="previewImage({index,current:0})"></image>
							<image :src="item.image[1]" mode="center" @click="previewImage({index,current:1})"></image>
							<image :src="item.image[2]" mode="center" @click="previewImage({index,current:2})"></image>
						</view>
		
						<view class="list_image_center" v-if="item.image.length >= 7">
							<view class="list_image_center_left">
								<image :src="item.image[item.image.length-6]" mode="center" @click="previewImage({index,current:item.image.length-6})"></image>
							</view>
							<view class="list_image_center_middle">
								<image :src="item.image[item.image.length-5]" mode="center" @click="previewImage({index,current:item.image.length-5})"></image>
							</view>
							<view class="list_image_center_right">
								<image :src="item.image[item.image.length-4]" mode="center" @click="previewImage({index,current:item.image.length-4})"></image>
							</view>
						</view>
						
						<view class="list_image_bottom" v-if="item.image.length >= 5">
							<view class="list_image_bottom_left">
								<image :src="item.image[item.image.length-3]" mode="center" @click="previewImage({index,current:item.image.length-3})"></image>
							</view>
							<view class="list_image_bottom_middle">
								<image :src="item.image[item.image.length-2]" mode="center" @click="previewImage({index,current:item.image.length-2})"></image>
							</view>
							<view class="list_image_bottom_right">
								<image :src="item.image[item.image.length-1]" mode="center" @click="previewImage({index,current:item.image.length-1})"></image>
							</view>
						</view>
					</view>
					
					<!-- 来源 -->
					<view class="list_from">
						<text>来自 {{item.book}}</text>
					</view>
					
					<!-- 底部互动栏 -->
					<view class="list_bottom">
						<view class="list_bottom_comment" @click="comment(index)">
							<image src="../../static/icon/btn_icon_comment.png" mode="scaleToFill"></image>
							<text>66546</text>
						</view>
						<view class="list_bottom_like">
							<image :src="item.liked?(src.liked):(src.like)" mode="aspectFit" @click="like(index)"></image>
							<text>64242</text>
						</view>
						<view class="list_bottom_save" @click="save(index)">
							<image src="../../static/icon/btn_icon_save.png" mode="aspectFit"></image>
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>


<script src="./index.js"> </script>
<style src="./index.css"> </style>
