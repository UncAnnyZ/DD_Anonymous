<template>
	<view>
		<view class="top">
			<view class="top_block" v-for="(item,index) in top" :key="index">
				<image :src="item.src" mode="aspectFit"></image>
				<text>{{item.text}}</text>
				<view class="top_block_tips" v-if="item.isHave.status"></view>
			</view>
		</view>
		
		<view class="bottom">
			<view class="bottom_button" v-for="(item,index) in buttonList" :key="index" :id="item.id" @click.stop="click(item.id)">
					<view class="bottom_button_img">
						<image :src="item.src" mode="aspectFit"></image>
					</view>
					<view class="bottom_button_text">
						<text>{{item.text}}</text>
					</view>
					<view class="bottom_button_tips">
						<view class="bottom_button_tips_none" v-if="!item.isHave.status">
							<image src="../../static/icon/message_icon_navigator.png" mode="aspectFit"></image>
						</view>
						<view class="bottom_button_tips_have" v-else >
							<text >{{item.isHave.count <= 99 ? item.isHave.count:'···'}}</text>
						</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script src="./message.js"> </script>
<style src="./message.css"> </style>