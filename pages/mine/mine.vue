<template>
	<view class="all">
				
<!-- 		<popup ref="dialog" :showCancel="dialog.showCancel" :content="dialog.content" :cancelText="dialog.cancelText" :confirmText="dialog.confirmText" @hide='pop'></popup> -->
		
		<view class="status" v-if="showStatus">
			<view class="status_bar_top" :style="'opacity:' + percent + ';'"></view>
		</view>
		
		<view class="background" id="background" >
			<image :src="info.background" mode="scaleToFill"></image>
		</view>
		
		<view class="setting">
			<image src="../../static/icon/mine_icon_setting.png" mode="aspectFit" @click="setting()"></image>
		</view>
		
		<view class="personalInfo" id="personalInfo">
			<view class="personalInfo_avatar">
				<image :src="info.avatar" mode="aspectFit" @click="avatar"></image>
			</view>
			<view class="personalInfo_introduce">
				<text class="personalInfo_introduce_nickname">{{info.nickname}}</text>
				<text class="personalInfo_introduce_sign">{{info.sign}}</text>
			</view>
			<view class="personalInfo_edit">
				<button @click="edit()">编 辑</button>
			</view>
		</view>
		
		<view class="situation">
			<view class="situation_follow">
				<text>{{situation.follow}}</text>
				<label>关注</label>
			</view>
			<view class="situation_fans">
				<text>{{situation.fans}}</text>
				<label>粉丝</label>
			</view>
			<view class="situation_integral">
				<text>{{situation.integral}}</text>
				<label>积分</label>
			</view>
			
		</view>
		
		<view class="swiper_title">
			<view class="swiper_title_EDiary" v-bind:class="current==0?'swiper_title_choose':''" @click="change({detail:{current:0}})">
				<label>记本</label>
				<view v-bind:class="current==0?'swiper_title_choose_border':''"></view>
			</view>
			<view class="swiper_title_Record" @click="change({detail:{current:1}})">
				<label>记录</label>
				<view v-bind:class="current==1?'swiper_title_choose_border':''"></view>
			</view>
		</view>
				
		<swiper class="swiper" @change="change" :current="current">
			<!-- 记本 -->
			<swiper-item>
				<scroll-view :scroll-y="scrollY" scroll-with-animation="true" scroll-anchoring="true">
					<view class="swiper_item_EDiary">
						<view v-for="(item,index) in EDiary" :key="index" class="swiper_item_EDiary_block">
							<image :src="item.img" mode="scaleToFill"></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
				
			</swiper-item>
		
			<!-- 记录 -->
			<swiper-item>
				<scroll-view :scroll-y="scrollY" scroll-with-animation="true" scroll-anchoring="true">
					<view class="record">
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
				</scroll-view>
			</swiper-item>
		
		</swiper>
		
		<!-- 添加按钮 -->
		<view class="add_EDiary" @click="add">
			<image src="../../static/icon/mine_icon_add.png" mode="aspectFit"></image>
		</view>
		
	</view>
</template>

<script src="./mine.js"> </script>
<style src="./mine.css"> </style>