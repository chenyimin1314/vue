<template>
  <div>
    <div class="writeTitle">
        <!-- <span class="content_file">
            <input type="file" id="insert_img" ref="insert_img" @change="insert_img"/>
        </span> -->
        <span @click="articlePreview">预览</span>
        <span @click="articleAdd">保存</span>
    </div>
    <div class="imgBox">
        <span>文章图片:</span>
        <span class="uploadImg">
            <input type="file" ref="imgFiles">
        </span>
    </div>
    <div class="titleContent clearFloat">
        <!-- 标题框 -->
        <input type="text" placeholder="请输入标题" v-model="writeTuiwen.title">
    </div>
    <!-- 正文 -->
    <div class="mainContent">
        <textarea v-model="writeTuiwen.content" placeholder="请在此处输入正文……">
            <p ref="preview_file"></p>
        </textarea>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import store from "../store";
    export default {
        name: "write",
        data() {
            return {
                imageUrl: "",
                title: "",
                content: "",
                img: ""
            };
        },
        computed: {
            writeTuiwen() {
                return store.state.writeTuiwen;
            }
        },
        methods: {
            // 插入图片和文件
            insert_img() {
                // let img_path = this.$refs.insert_img.value;
                // let img_value = document.createElement('img');
                // img_value.src = img_path;
                // let preview_file = this.$refs.preview_file;
                // preview_file.appendChild(img_value);
                // let myAppendTo = Vue.extend({
                //     template: '<p>appendTo</p>'
                // });
                // new myAppendTo().$mount('#app');
                // new myAppendTo().$mount().$appendTo('#app');
                // console.log(img_path);
            },
            // 重置
            clearProd() {
                this.writeTuiwen.title = "";
                this.writeTuiwen.content = "";
                this.$refs.imgFiles.value = "";
            },
            // 上传文件
            formData() {
                let formData = new FormData();
                formData.append("title", this.writeTuiwen.title);
                formData.append("content", this.writeTuiwen.content);
                let files = this.$refs.imgFiles.files;
                if (files.length > 0) {
                    formData.append("file", files[0]);
                }
                return formData;
            },

            // 添加推文（保存）
            articleAdd() {
                var formData = this.formData();
                store.dispatch("articleAdd", formData);
                this.$router.push("/messageLibrary");
                this.clearProd();
            },
            // 添加推文（预览）
            articlePreview() {
                this.$router.push("/previewWrite");
                let writeTuiwenPreview = {
                    title: this.writeTuiwen.title,
                    content: this.writeTuiwen.content
                };
                localStorage.setItem(
                    "writeTuiwenPreview",
                    JSON.stringify(writeTuiwenPreview)
                );
            }
        }
    };
</script>

<style scoped>
    .writeTitle {
        width: 6rem;
        height: 0.5rem;
        background: #ffb901;
        color: white;
        font-size: 0.23rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .writeTitle span {
        margin-right: 30px;
    }
    
    .titleContent {
        width: 100%;
        padding: 0.1rem 0.1rem;
        border-bottom: 2px solid #eeeeee;
    }
    
    .titleContent input {
        width: 100%;
        font-size: 0.23rem;
        padding-left: 5px;
        padding-right: 5px;
        border: 0;
        outline: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    input::-webkit-input-placeholder {
        color: #cfcfcf;
        font-size: 0.23rem;
    }
    
    input:-moz-placeholder {
        color: #cfcfcf;
        font-size: 0.23rem;
    }
    
    input::-moz-placeholder {
        color: #cfcfcf;
        font-size: 0.23rem;
    }
    
    input:-ms-input-placeholder {
        color: #cfcfcf;
        font-size: 0.23rem;
    }
    
    .mainContent {
        width: 6rem;
        padding: 8px 10px;
        height: 100%;
    }
    
    .mainContent textarea {
        width: 100%;
        height: 70vh;
        font-size: 0.23rem;
        border: 0;
        outline: none;
        overflow-y: hidden;
    }
    
    .writeTitle .uploadImg {
        position: absolute;
        left: 2px;
        width: 60%;
    }
    
    .writeTitle .uploadImg input {
        width: 100%;
    }
    
    .imgBox {
        padding: 0.1rem 0.2rem;
    }
    
    .imgBox input {
        margin-left: 0.1rem;
    }
</style>