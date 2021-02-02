<template>
	<view class="container">

		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>


		<view>
			<text> {{msg}} </text>
		</view>
		<button type="default" @click="aaa()">点击显示</button>
		
		<view v-if="show"> 展示 </view>

	</view>
</template>


<script src="./index.js"> </script>
<style src="./index.css"> </style>
