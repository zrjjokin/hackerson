<template>
    <div class="main">
        
        <el-button class="add" @click="addnext()"> add plan</el-button>
        <div  v-for="plan in myplan" :key="plan.time">
            <el-table
    :data="myplan"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="time"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="place"
      label="地点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="plan"
      label="计划"
      width="120">
    </el-table-column>
    <el-table-column
      prop="people"
      label="同伴"
      width="120">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
            </el-table>
        </div>
        <el-dialog title="Add Plan" :visible.sync="addnextplan" width="50">
         <el-form :model="tempplan"  ref="tempplan" label-width="50px" >
             <el-form-item label="时间" prop="time">
                 <el-input v-model="tempplan.time"></el-input>
             </el-form-item>
             <el-form-item label="地点" prop="place">
                 <el-input v-model="tempplan.place"></el-input>
             </el-form-item>
             <el-form-item label="计划" prop="plan">
                 <el-input v-model="tempplan.plan"></el-input>
             </el-form-item>
             <el-form-item label="食物" prop="food">
                 <el-input v-model="tempplan.food"></el-input>
             </el-form-item>
             <el-form-item label="同伴" prop="people">
                 <el-input v-model="tempplan.people"></el-input>
             </el-form-item>
            <el-form-item>
                <el-button @click="addnextplan = false">取 消</el-button>
                <el-button type="primary" @click="saveplan()">添加</el-button>
            </el-form-item>
         </el-form>

        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'plan',

        data(){
            return {

                addnextplan:false,
                myplan:[
                    {

                        time:"2019-7-14",
                        place:"北京",
                        plan:"参加黑客马拉松",
                        food:"全聚德，驴打滚",
                        people:"nightli,zrj,hjm",
                        accompany:"",

                    }
                ],
                tempplan:{
                    time:"",
                    place:"",
                    plan:"",
                    food:"",
                    people:"",
                    accompany:"No",
                }
            }
        },
        methods:{
            addnext(){
                this.addnextplan=true;

            },
            saveplan(){

                this.myplan.push(this.tempplan);
                this.tempplan={
                    time:"",
                    place:"",
                    plan:"",
                    food:"",
                    people:"",
                    accompany:"No",
                };
                this.addnextplan=false;
            },


        }

    };
</script>
<style scoped>
    
    .main{
        margin:auto;
        width:900px;
    }
    .add{
        float:left;
    }
</style>