<template>
    <div>
        <ul class="message-list">
            <li v-for="(item,index) in listd.msg.data">
                <div class="message-title clearfix">
                    <span class="message-type">{{item.title}}</span>
                    <span class="message-time">{{time}}</span>
                </div>
                <div class="message-content">
                    <span>{{item.content}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: 'message',
        data() {
            return {
                message_list: {}
            }
        },
        mounted() {
//            this.getMessages();
        },
        created(){
        	this.message()
        },
        computed: {
        	time(){
        		let _this=this.listd.msg.data[0].createtime
        		var d=new Date(_this*1000)
        		return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        	},
            listd() {
                return store.state.messageams
            }
        },
        methods: {
            getMessages: function () {
//              self.fullscreenLoading = true;
////                Ajax.getToken();
//              Ajax.ajax({
//                  'type': 'get',
//                  'url': 'article_list',
//                  'data': {
//                      "pageSize": "10",
//                      "page": "1"
//                  },
//                  'success': function (datas) {
//                      self.articlelist = datas;
//
//                      setTimeout(() => {
//                          self.fullscreenLoading = false;
//                      }, 1000);
//
//                  }
//              });
            },
            message(){
            	store.dispatch('messagea')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../assets/css/common.less";

    body {
        background-color: red;
    }
    .message-list {

        li {
            .pad(10px);
            background-color: @color-white;
            border-bottom: 1px solid #D8D8D8;
            .message-title {
                font-size: 0.24rem;
                padding: 5px;

                .message-type {
                    font-size: 0.24rem;
                    float: left;
                    color: #444444;
                }

                .message-time {
                    font-size: 0.24rem;
                    float: right;
                    color: #939393;
                }

            }
            .message-content {
                .pad(10px);
                font-size: 0.28rem;
                line-height: 30px;
            }

        }
    }

</style>