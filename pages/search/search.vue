<template>
	<view class="all">

		<!-- 填充高度 -->
		<view class="status_toppadding"></view>
		<view class="status">
			<!-- 水滴屏高度 -->
			<view class="status_bar_top"></view>
			<view class="status_bar">
				<view class="status_bar_left">
					<image src="../../static/icon/back_icon.png" @click="back" mode="aspectFit"></image>
				</view>
				<view class="status_bar_center">
					<image src="../../static/icon/search_icon_search.png" mode="aspectFit"></image>
					<input type="text" value="" 
					 placeholder="请输入您要搜索的关键词"
					 placeholder-style="font-weight:100;font-size:13px;'"
					 confirm-type="search" @confirm="search"/>
				</view>
				
			</view>
		</view>
		
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
