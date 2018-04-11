<template>
    <div>
        <div class="reportPublicTop">
            {{rtTitle}}
        </div>
        <div class="reportDesign clearFloat">
            <div class="d-box">
                <div class="sd-top">
                    {{rdLeft}}
                </div>
                <div class="sd-bottom">
                    {{rdlNum}}
                </div>
            </div>
            <div class="d-box">
                <div class="sd-top">
                    {{rdRight}}
                </div>
                <div class="sd-bottom">
                    {{rdrNum}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'reportPublicTop',
        data() {
            return {

            }
        },
        props: {
            rtTitle: {
                type: String,
                default: '报表'
            },
            rdLeft: {
                type: String,
                default: 'rdLeft'
            },
            rdRight: {
                type: String,
                default: 'rdRight'
            },
            rdlNum: {
                type: String,
                default: 'rdlNum'
            },
            rdrNum: {
                type: String,
                default: 'rdrNum'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .reportPublicTop {
        width: 6rem;
        height: 0.5rem;
        background: #7EC9C2;
        font-size: 0.23rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .reportDesign {
        width: 6rem;
        height: 80px;
    }

    .reportDesign .d-box {
        width: 3rem;
        float: left;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .sd-top {
        font-size: 18px;
    }

    .sd-bottom {
        font-size: 16px;
        color: #FFB901;
    }
</style>