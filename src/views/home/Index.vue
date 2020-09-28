<template>
  <div class="dashboard-editor-container">
    <!--  -->
    <h3>分组列表</h3>
    <i class="line"></i>
    <el-row style="margin-top:10px">
      <el-button
        type="primary"
        class="el-icon-plus"
        @click="dialogFormVisible = true"
        >&nbsp;&nbsp;新建分组</el-button>

      <el-button type="primary">导入</el-button>
      <div class="right">
        <el-input
          placeholder="请输入组名称"
          v-model="input"
          clearable
          suffix-icon="el-icon-search"
          style="width:250px"
        >
        </el-input>
        <el-button icon="el-icon-refresh" style="margin-left:10px"></el-button>
      </div>
    </el-row>

    <!-- table区域 -->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%;margin-top:20px"
      :header-cell-style="headClass"
      @row-click='handleApiGateway()'
    >
      <el-table-column prop="name" label="组名称" width="180">
      </el-table-column>
      <el-table-column prop="descript" label="描述" width="400">
      </el-table-column>
      <el-table-column prop="count" label="API数量"> </el-table-column>
      <el-table-column prop="areaCount" label="绑定域名数量"> </el-table-column>
      <el-table-column prop="time" label="创建时间" width="200">
      </el-table-column>
      <el-table-column prop="option" label="操作">
        <template>
          <el-button
            type="text"
            size="small"
            @click="addwork(scope.row)"
            class="cumula"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="deletepost(scope.row.id)"
            class="cumula"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

     <!-- 弹层区域 -->
    <el-dialog title="创建分组" :visible.sync="dialogFormVisible" >
      <span class="text">温馨提示：每个用户只能创建50个分组</span>
      <el-form :model="form">
  
        <el-form-item label="*分组名称:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" maxlength="50" show-word-limit  style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="描述:" :label-width="formLabelWidth">
      
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="180"
            show-word-limit 
            clearable
            size="small"
            :rows="4"  
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
      <catrgoryDetail/>
      <categoryManage/>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: "DashboardAdmin",
  components: {},
  data() {
    return {
      input: "",
      tableData: [
        {
          name: "apigateway",
          descript: "上海市普陀区金沙江路 1518 弄",
          count: "4 管理",
          areaCount: "0 管理",
          time: "2020.08.10 10:31",
          options: ""
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      textarea:''
    };
  },
  methods: {
    headClass() {
      return "background:#ddd;"
    },
    handleApiGateway(){
      this.$router.push()
    }
  }
};
</script>

<style lang="scss">
.dashboard-editor-container {
  // padding: 32px;
  // background: #ddd;
  position: relative;
}
.line {
  display: inline-block;
  width: 100%;
  height: 1px;
  background: #ddd;
}
.right {
  position: absolute;
  right: 50px;
  top: 0;
}
.text {
  background: #ddd;
  display: inline-block;
  width: 280px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 15px;
}
.el-dialog__header{
  background: #ddd;
}
</style>
