<template>
	<view class="all">
<<<<<<< HEAD

		<!-- 填充高度 -->
		<view class="status_toppadding"></view>
		<view class="status">
			<!-- 水滴屏高度 -->
=======
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<view class="status_toppadding"></view>
		<view class="status">
>>>>>>> c7fde996b4f27db77a83943173be62358fe0ff33
			<view class="status_bar_top"></view>
			<view class="status_bar">
				<view class="status_bar_left">
					<image src="../../static/icon/back_icon.png" @click="back" mode="aspectFit"></image>
				</view>
				<view class="status_bar_center">
					<image src="../../static/icon/search_icon_search.png" mode="aspectFit"></image>
<<<<<<< HEAD
					<input type="text" value="" 
					 placeholder="请输入您要搜索的关键词"
					 placeholder-style="font-weight:100;font-size:13px;'"
					 confirm-type="search" @confirm="search"/>
=======
					<input type="text" value="" />
>>>>>>> c7fde996b4f27db77a83943173be62358fe0ff33
				</view>
				
			</view>
		</view>
		
<<<<<<< HEAD
		<view class="container">
			<view class="swiper_title">
				<view class="swiper_title_EDiary" v-bind:class="current==0?'swiper_title_choose':''">
					<label>记本</label>
				</view>
				<view class="swiper_title_User" v-bind:class="current==1?'swiper_title_choose':''">
					<label>用户</label>
				</view>
			</view>
			<view class="swiper">
				<swiper class="swiper" @change="change">
					<!-- 记本 -->
					<swiper-item>
						<view class="swiper_item">
							<view v-for="(item,index) in EDiary" :key="index">
								<image :src="item.img" mode="aspectFit"></image>
								<text>{{item.name}}</text>
							</view>
						</view>
					</swiper-item>
					
					<!-- 用户 -->
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					
				</swiper>
			</view>
			
		</view>
		
	</view>
</template>

<script src="./search.js"> </script>

<style src="./search.css"> </style>
=======
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				console.log("返回")
				uni.navigateBack({
					delta:1,
					animationType:"pop-out",
					animationType:200
				})
			},
			
		}
	}
</script>

<style>

</style>
>>>>>>> c7fde996b4f27db77a83943173be62358fe0ff33
