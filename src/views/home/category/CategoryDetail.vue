<template>
  <div>
    <el-row style="display:flex" class="detailRow">
         <el-button class="el-icon-arrow-left" size="small" ></el-button>
         <span class="catgory">分组:ApiGateway</span>
         <div class="btns">
            <el-button >编辑</el-button>
            <el-button >刷新</el-button>
         </div>
    </el-row>
    <div >
        <!-- <span class="lineIcon"></span> -->
        <span style="font-size:22px" class="detailMess">基本信息</span>
    </div>
    <table  style="width:100%">
      
        <tr  class="detailTr">
            <td>名称:apigateway</td>
           

            <td>API分组ID:apigwgp-iszwgateway</td>
           

            <td>默认域名:aewferpigateway</td>
            
        </tr>
        <tr  class="detailTr">
            <td>描述:</td>
            

            <td>合法状态: 合法</td>
          

            <td>是否支持多Region:不支持</td>
          
        </tr>
    </table>
</div>
</template>

<script>
export default {
  name: 'CategoryDetail',
}
</script>

<style lang="scss" scoped>
.catgory{
    font-weight: bolder;
    margin:0 20px;
    font-size: 24px;
}
.btns{
    margin-left: 10px;
}
.detailRow{

    line-height: 50px;
    height: 50px;
}
.detailTr{
    height: 50px;
    line-height: 50px;
    
}
.detailTr>td{
    width:30%;
    padding-left: 10px;
    font-size: 16px;
}
.detailMess{
    display: inline-block;
    border-left: 4px solid blue;
    margin:10px 20px 0;
}
</style>
