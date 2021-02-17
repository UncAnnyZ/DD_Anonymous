<template>
  <view>
    <text>renderjs区域</text>
        <view @click="renderScript.emitData" :msg="msg" :change:msg="renderScript.receiveMsg" >
			ttttt
        </view>
        <button @click="changeMsg" class="app-view">app-view</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      };
    },
    methods: {
      // 触发逻辑层出入renderjs数据改变
      changeMsg() {
        this.msg = 'hello renderjs' + Math.random() * 10;
      },
      // 接收renderjs发回的数据
      receiveRenderData(val) {
        console.log('receiveRenderData-->', val);
      },
	  test(text){
		  console.log(text)
	  }
    }
  };
</script>

<script module="renderScript" lang="renderjs">
    export default {
      data() {
        return {
          name: 'render-vm'
        }
      },
      mounted() {
        // const view = document.getElementById('renderjs-view')
        // const button = document.createElement('button')
        // button.innerText = '一个按钮'
        // view.appendChild(button)
      },
      methods: {
        // 接收逻辑层发送的数据
        receiveMsg(newValue, oldValue, ownerVm, vm) {
          console.log('newValue', newValue)
          console.log('oldValue', oldValue)
          console.log('ownerVm', ownerVm)
          console.log('vm', vm)
		  ownerVm.callMethod('test',"success")
        },
        // 发送数据到逻辑层
        emitData(e, ownerVm) {
          ownerVm.callMethod('receiveRenderData', this.name)
        }
      }
    };
</script>