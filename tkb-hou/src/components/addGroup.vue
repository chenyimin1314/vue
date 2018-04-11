<template>
    <div>
        <div class="addGroupBox">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="微信号" prop="wechatNum">
                    <el-input v-model="ruleForm.wechatNum" placeholder="请输入微信号"></el-input>
                </el-form-item>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号码" prop="phone">
                        <el-input v-model="ruleForm.phone" type="number" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                </el-form>
            </el-form>
        </div>
        <div class="addGroupBtn">生成群组</div>
    </div>
</template>

<script>
    export default {
        name: 'addGroup',
        data() {
            return {
                ruleForm: {
                    wechatNum: '',
                    name: '',
                    phone: ''
                },
                rules: {
                    wechatNum: [
                        { required: true, message: '请输入微信号', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ]
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* 
    按钮
     */

    .addGroupBox {
        width: 6rem;
        padding: 50px 0 80px;
    }

    .addGroupBtn {
        width: 3rem;
        padding-top: 8px;
        padding-bottom: 8px;
        background: #FFB901;
        margin: auto;
        text-align: center;
        border-radius: 5px;
        color: white;
        font-size: 16px;
    }
</style>