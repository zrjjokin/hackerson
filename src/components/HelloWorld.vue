<template>
  <div class="hello">
    <el-container>
      <el-header>
        <navbar v-on:change-num="createProps" :user="userId"></navbar>
      </el-header>
      <el-main>
        <appmain :tag_num="number"></appmain>
      </el-main>
    </el-container>    
  </div>
</template>
<script>
import awsconfig from "../aws-exports";
import navbar from "../view/layout/navbar";
import appmain from "../view/layout/appmain";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      userId:'',
      number:"1",
      signInConfig: "",
      path: "s3://amplifytest-dev-20190713120649-deployment/1.jpg",
      url: `https://us-east-1.console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/629bf2e7d1974acba68e0042e4b86930/analytics/overview`,
      eventsSent: 0,
      analyticsEventSent: false
    };
  },
  created(){
    this.userId=localStorage.getItem("CognitoIdentityServiceProvider.7fhagqau2krkin7jgr6u6l2s3v.LastAuthUser")
    console.log(this.userId)
  },
  methods: {
    handleAnalyticsClick: function() {
      this.$Amplify.Analytics.record("AWS Amplify Tutorial Event").then(() => {
        ++this.eventsSent;
        this.analyticsEventSent = true;
      });
    },
    createProps(index){
      //console.log(index)
      this.number=index;
      console.log(this.number)
    }
  },
  components: { navbar, appmain }
};
</script>
<style scoped>

body{
    background-color: #aaa;
}
</style>

