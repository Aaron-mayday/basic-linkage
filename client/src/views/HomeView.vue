<template>
	<div class="home">
		<h1>数据:{{msg}}</h1>
		<button @click="logout">注销</button>
	</div>
</template>

<script>
	import request from "../../utils/request.js"
	export default {
		data(){
			return{
				msg:""
			}
		},
		methods: {
			logout(){
				localStorage.setItem("token","");
				location.reload();
			},
			getMsg(){
				// let token = localStorage.getItem("token");
				request.get(`/hello`).then((res)=>{
					this.msg = res.data.data[0].msg
				})
			}
			
		},
		created(){
			this.getMsg();
		}
	}
</script>
