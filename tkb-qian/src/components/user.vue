<template>
	<div>
		<div class="tuiuser"><span>奇扫，推客宝会员名</span><span>{{myselft.msg.wechat_name}}</span></div>
		<div class="bindphone"><router-link to="/bindMob"><span>手机绑定</span><span></span></router-link></div>
	</div>
</template>

<script>
	 import store from '../store'
     import lib from '../assets/js/Lib';
     import Ajax from '../assets/js/Ajax';
     export default {
    	name:'user',
    	data(){
    		return{
    			
    		}
    	},
    	  computed: {
            myselft() {
                return store.state.myselfams
            }
        },
        methods: {
            myself(){
            	store.dispatch("myselfa")
            }
        }
    	
    }
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		font-size: 0.25rem;
	}
	.tuiuser{
		background: #FFFFFF;
		color: #6b6b6b;
	    width: 6rem;
		padding: 0.1rem 0;
		border-bottom: 0.15rem solid #EFEFEF;
		display: flex;
	}
	.tuiuser span:first-child{
		 flex: 1;
		 padding: 0 0 0 0.1rem;
	}
	.tuiuser span:last-child{
		 flex: 1;
		 text-align: right;
		 line-height: 0.5rem;
		  padding: 0 0.1rem 0 0;
	}
	.bindphone {
		background: #FFFFFF;
		color: #6b6b6b;
         width: 6rem;
		padding: 0.1rem 0;
		border-bottom: 0.15rem solid #EFEFEF;
	}
	.bindphone span:first-child{
		 flex: 1;
		 padding: 0 0 0 0.1rem;
	}
	.bindphone a{
		color: #6b6b6b;
		 text-decoration: none;
		 display: block;
		width: 100%;
	}
</style>