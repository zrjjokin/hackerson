<template>
  <div class="back">
    <div class="mainpage" v-for="blog in blogLists" :key="blog.id">
      <div class="img">
        <img style="width:100%;height:100%;" :src="blog.pic" />
      </div>
      <div class="content">
        <div class="title"><a href="#"><strong>{{blog.title}}</strong></a></div>
        <div class="article"><a href="#">{{blog.content}}</a></div>

        <div class="detail">
          <ul style="margin:0;padding:5px;">
            <li class="user">
              <i class="el-icon-user-solid">{{blog.userId}}</i>
            </li>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  computed:{

  },
  data() {
    return {

      color:0,
      //文章列表
      blogLists: [
        {
          id: "1",
          pic: require("@/assets/hacker.jpg"),
          title: "黑客马拉松两日游",
          tags: ["relaxed","happiness","challenge"],
          content:
            "转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧",
          userId: "zrj",
          hot: "1",
          location: "中关村",
          date: "2019-10-29"
        },
        {
          id: "2",
          pic: require("@/assets/bupt.jpg"),
          title: "北京邮电大学三年游",
          tags: ["tired","rich"],
          content:
            "转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧",
          userId: "ljj",
          hot: "10",
          location: "北京邮电大学",
          date: "2019-10-29"
        },
        {
          id: "3",
          pic: require("@/assets/gugong.jpg"),
          title: "故宫半日游",
          tags: ["historical"],
          content:
            "转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧",
          userId: "hjm",
          hot: "100",
          location: "北京故宫",
          date: "2019-10-29"
        }
      ]
    };
  }
};
</script>
<style scoped>

li {
  list-style-type: none;
}
.mainpage {
  margin: 10px auto;
  width: 900px;
  height:180px;
}
.img {
  width: 230px;
  height: 160px;
  float: left;
  
}
.content {
  width: 664px;
  height: 160px;
  float: left;
  
}
.title {
  width: 600px;
  height: 40px;
  
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  padding: 5px;
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /*要显示的行数*/
  -webkit-box-orient: vertical;
}
.article {
  margin: 5px;
  width: 600px;
  height: 60px;
  
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3; /*要显示的行数*/
  -webkit-box-orient: vertical;
  font-family: "Arial";
  font-size: 16px;
  text-align: left;
  padding: 5px;
  color:#666;
}
.detail {
  width: 600;
  height: 25px;
  
}
.user {
  display: inline-block;
  height: 23px;
  float: left;
  margin-left: 30px;
}
.el-tag{
    
    height:20px;
    line-height:18px;
    font-size:15px;
}
a{
    text-decoration: none;
    color: inherit;
}
</style>

