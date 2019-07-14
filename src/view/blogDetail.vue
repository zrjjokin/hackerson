<template>
    <div class="main">
        
        <h2>{{blog.title}}</h2>
        <div class="detail">
            <ul style="margin:0;padding:5px;">
            <li class="user">
              <i class="el-icon-date">{{blog.date}}</i>
            </li>
            <li class="user">
              <i class="el-icon-location-outline">{{blog.location}}</i>
            </li>
            <li class="user">
                <i class="el-icon-view">{{blog.hot}}</i> 
            </li>
            <li class="user">
                <el-tag type="success" v-for="tag in blog.tags" class="tag">
                    {{tag}}
                </el-tag>            
            </li>
          </ul>
        </div>
        <p class="content">{{blog.content}}</p>
    </div>
</template>
<script>
export default {
 
  props:['blog'],
  data() {
    return {
      
  }
  }
}
</script>

<style scoped>
.main{
    margin: 10px auto;
    width: 900px;
    
}
.detail {
  width: 600;
  height: 30px;
  
}
li{
  list-style-type: none;
}
.user {
  display: inline-block;
  height: 23px;
  float: left;
  margin-left: 30px;
  
}
.content{

      font-family: 'Courier New', Courier, monospace; 
     text-transform:capitalize; 
     word-spacing:10px; 
     background-color:#678; 
     color:white; 
     letter-spacing: 1px; 
     text-indent: 2em;
     padding: 5px;
     text-align:left;
}
</style>

