<template>
  <div class="back">
    <el-button class="buttonadd" @click="addnext">Add My travel</el-button>
    <div class="mainpage" v-for="blog in blogLists" :key="blog.id">
      <div class="img">
        <img style="width:100%;height:100%;" :src="blog.pic" />
      </div>
      <div class="content">
        <div class="title">
          <a href="#" @click="change_num(blog)">
            <strong>{{blog.title}}</strong>
          </a>
        </div>
        <div class="article">
          <a href="#">{{blog.content}}</a>
        </div>

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
              <el-tag type="success" v-for="tag in blog.tags" class="tag">{{tag}}</el-tag>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <el-dialog title="Add Plan" :visible.sync="addnextblog" width="50">
      <el-form :model="tempblog" ref="tempplan" label-width="50px">
        <el-form-item label="标题" prop="time">
          <el-input v-model="tempblog.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="place">
          <el-input v-model="tempblog.content"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="plan">
          <el-input v-model="tempblog.userId"></el-input>
        </el-form-item>
        <el-form-item label="地点" prop="food">
          <el-input v-model="tempblog.location"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="people">
          <el-input v-model="tempblog.date"></el-input>
        </el-form-item>

        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
        <el-form-item>
          <el-button @click="addnextblog = false">取 消</el-button>
          <el-button type="primary" @click="saveplan()">添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "index",
  computed: {},
  data() {
    return {
      color: 0,
      dialogImageUrl: '',
      dialogVisible: false,
      addnextblog:false,
      tempblog:{
                    id:0,
                    title:"",
                    tags:"",
                    content:"",
                    userId:"",
                    location:"",
                    date:"",
                    hot:"10"
                },
      //文章列表
      blogLists: [
        {
          id: "1",
          pic: require("@/assets/hacker.jpg"),
          title: "黑客马拉松两日游",
          tags: ["relaxed", "happiness", "challenge"],
          content:
            "转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧",
          userId: "zrj",
          hot: "1",
          location: "中关村",
          date: "2019-10-29"
        },
        {
          id: "2",
          pic: require("@/assets/bupt.jpg"),
          title: "北京邮电大学三年游",
          tags: ["tired", "rich"],
          content:
            "转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧",
          userId: "zrj",
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
            "转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧转眼已有两年半没出去玩了重开这个页面时忽然有点触动，一种回家的熟悉感又带着点陌生两年间马蜂窝蜕变了很多有很多没见过的ID书写着他们热血的故事和无限可能的人生偶尔有久违的蜂友问我去哪了对于一个女孩子来说，突然长久的消失除了失恋大概就是去生娃了吧",
          userId: "zrj",
          hot: "100",
          location: "北京故宫",
          date: "2019-10-29"
        }
      ]
    };
  },
  methods: {
    toDetail(blog) {
      console.log(blog);
      this.$router.push({ name: "blogDetail", params: { blog: blog } });
    },
    change_num(blog) {
      console.log(blog);
      this.$emit("change-tag", blog);
      
    },
    addnext(){
                this.addnextblog=true;

            },
            saveplan(){

                this.tempblog.id=this.blogLists.length+1;
                this.blogLists.push(this.tempplan);
                this.tempplan={
                    time:"",
                    place:"",
                    plan:"",
                    food:"",
                    people:"",
                    accompany:"No",
                };
                this.addnextblog=false;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
  }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
.back {
  margin: 10px auto;
  width: 900px;
  height: 180px;
}
.buttonadd{
  
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
  color: #666;
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
.el-tag {
  height: 20px;
  line-height: 18px;
  font-size: 15px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

