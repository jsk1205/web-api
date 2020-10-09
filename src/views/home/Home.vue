<template>
  <div class="wrap">
    
    <el-container>
    <el-header>
        <div>
            <!-- <img src="../../assets/logo.png" class="imgs" alt=""> -->
            <span class="Tit"> API网关</span>
        </div>
        <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
           <el-menu
                :default-active="activeMenu"
                class="el-menu-vertical-demo"
                :unique-opened="true"
                background-color="#fff"
                text-color="#333744"
                active-text-color="#409EFF"
                router
                >
                <el-submenu :index="route.path">
                    <!-- 一级菜单 -->
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>分组管理</span>
                    </template>
                    <!-- 二级菜单 -->
                   <el-menu-item :index="route.path">详细信息</el-menu-item>
                   <el-menu-item :index="route.path">标签管理</el-menu-item>
                </el-submenu>

                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">api列表</span>
                </el-menu-item>
              
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">流量管理</span>
                </el-menu-item>
                   <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">访问控制</span>
                </el-menu-item>
            </el-menu>
        </el-aside>


        <!-- 右侧内容体 -->
        <el-main>
            <router-view>
                
            </router-view>
        </el-main>
    </el-container>
    </el-container>
 </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
      return{
          
      }
    },
    methods:{
        logout(){
            
        }
    },
    computed:{
        activeMenu(){
            const route=this.$route
            const {meta,path}=route
            if(meta,this.activeMenu){
                return meta.activeMenu
            }
            return path
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap{
    width:100%;
    height: 100%;
}
.el-container{
    height: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
// .imgs{
//     display:block;
//     width:200px;
//     height: 60px;
// }
.Tit{
    display: block;
    width:80px;
    height: 60px;
    font-size: 18px;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
}
.el-aside {
    background-color: #fff;
    // color: #333;
    text-align: center;
    line-height: 200px;
    height: calc(100%-200px);
    height: 100%;
}
.el-menu{
    border-right:none;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
