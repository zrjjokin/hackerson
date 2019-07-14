<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="nav" index="1">首页</el-menu-item>
      <el-menu-item class="nav" index="2">
        计划我的行程
      </el-menu-item>
      <el-menu-item v-if="user!=''" class="nav" index="3">个人空间({{user}})</el-menu-item>
      <el-menu-item v-if="user==''" class="nav" index="4">登录|注册</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
    props:['user'],
    data(){
        return {
            activeIndex:'1',
        }
    },
    methods:{
        
        handleSelect(index){
            //console.log(index);
            this.$emit('change-num',index)
        }
    }
};
</script>


<style>
.container{
    width:900px;
    heigth:200px;
    margin:auto;
}
.nav{
    float:left;
    width:33.3%;
    height:100%;
    border:1px solid;
}
</style>

