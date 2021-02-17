<template>
	<view class="all">

		<!-- 填充高度 -->
		<view class="status_toppadding"></view>
		<!-- 导航栏 -->
		<view class="status">
			<!-- 水滴屏高度 -->
			<view class="status_bar_top"></view>
			<view class="status_bar">
				<view class="status_bar_left">
					<image src="../../static/icon/back_icon.png" @click="back" mode="aspectFit"></image>
				</view>
				<view class="status_bar_center">
					<image src="../../static/icon/search_icon_search.png" mode="aspectFit"></image>
					<input type="text" value="" placeholder="请输入您要搜索的关键词" placeholder-style="font-weight:100;font-size:13px;'"
					 confirm-type="search" @confirm="search" />
				</view>

			</view>
		</view>
		<!-- 滑块 导航栏 -->
		<view class="swiper_title">
			<view class="swiper_title_EDiary" v-bind:class="current==0?'swiper_title_choose':''" @click="change({detail:{current:0}})">
				<label>记本</label>
				<view v-bind:class="current==0?'swiper_title_choose_border':''"></view>
			</view>
			<view class="swiper_title_User" v-bind:class="current==1?'swiper_title_choose':''" @click="change({detail:{current:1}})">
				<label>用户</label>
				<view v-bind:class="current==1?'swiper_title_choose_border':''"></view>
			</view>
		</view>

		<swiper class="swiper" @change="change" :current="current">
			<!-- 记本 -->
			<swiper-item>
				<scroll-view scroll-y="true" scroll-with-animation="true" scroll-anchoring="true">
					<view class="swiper_item_EDiary">
						<view v-for="(item,index) in EDiary" :key="index" class="swiper_item_EDiary_block">
							<image :src="item.img" mode="scaleToFill"></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>

			<!-- 用户 -->
			<swiper-item>
				<scroll-view scroll-y="true" scroll-with-animation="true" scroll-anchoring="true">
					<view class="swiper_item_User">
						<view v-for="(item,index) in User" :key="index" class="swiper_item_User_block" :style="index!=User.length-1?'border-bottom: 1rpx solid #c4c4c4;':''">
							<!-- 头像 -->
							<view class="User_block_left">
								<image :src="item.avatar" mode="scaleToFill"></image>
							</view>

							<view class="User_block_right">
								<view class="User_block_right_nickname">
									<text>{{item.nickname}}</text>
								</view>
								<view class="User_block_right_sign">
									<text>{{item.sign}}</text>
								</view>
							</view>

						</view>
					</view>
				</scroll-view>
			</swiper-item>

		</swiper>

	</view>
</template>

<script src="./search.js"> </script>

<style src="./search.css"> </style>
