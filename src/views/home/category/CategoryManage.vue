<template>
  <div>
    <el-button class="el-icon-plus" type="primary"
      >&nbsp;&nbsp;新增标签</el-button
    >
    <el-table :data="tableData" style="width: 100%" :header-cell-style="detail">
      <el-table-column prop="name" label="名称"  style="width: 50%" > </el-table-column>
      <el-table-column prop="options" label="操作"  style="width: 50%">
          <template>
              <el-button
                type="text"
                size="small"
                @click="addwork(scope.row)"
                class="cumula"

            >编辑</el-button>
              <el-button
                type="text"
                size="small"
                @click="addwork(scope.row)"
                class="cumula"
              >删除</el-button>
          </template>
          
      </el-table-column>
     
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CategoryManage",
  data(){
    return{
        tableData: [{
            name: 'api_rway',
            options: '',
     
          }
          
        ]
    }
  },
  methods:{
      detail(){
          return "background:#ddd";
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
