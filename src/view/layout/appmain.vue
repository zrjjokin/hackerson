<template>
  <div>
    <div v-if="tag_num=='1'">       
        <index></index>
    </div>
    <div v-if="tag_num=='2'">       
        <plan></plan>
    </div>
    <div v-if="tag_num=='3'">
        <myself v-on:change-tag="change_nums"></myself>
    </div>
    <div v-if="tag_num=='4'">
        <login></login>
    </div>
    <div v-if="tag_num=='5'">
      <blogDetail :blog="blog"></blogDetail>
    </div>
  </div>
</template>

<script>
import { compileFunction } from 'vm';
import index from '../index'
import plan from '../plan'
import login from '../login'
import myself from '../myselft'
import blogDetail from '../blogDetail'
export default {
  name: "appmain",
  props: {
    tag_num: String
  },
  data(){
    return {
      blog:{}
    }
  },
  components:{index,plan,login,myself,blogDetail},
  methods:{
    change_nums(blog){
      this.tag_num='5';
      this.blog=blog;

    }
  }
};
</script>