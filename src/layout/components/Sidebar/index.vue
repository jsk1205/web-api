<template>
  <div>
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!--    :default-active="activeMenu-->
      <el-menu
     
        :default-active="$route.path"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        router
      >
  
        
        <el-submenu  index="/index">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">分组管理
           
            </span>
          </template>
          <el-menu-item-group >
            <!-- <template slot="title">分组管理</template> -->
            
            <el-menu-item index="/CategoryDetail">详细信息</el-menu-item>
            <el-menu-item index='/CategoryManage'>标签管理</el-menu-item>
          </el-menu-item-group>
         

        </el-submenu>
        
        <el-menu-item index="/notary">
          <i class="el-icon-menu"></i>
          <span slot="title">API列表</span>
        </el-menu-item>
        <el-menu-item index="/execute">
          <i class="el-icon-document"></i>
          <span slot="title">流控管理</span>
        </el-menu-item>
        <el-menu-item index="/address">
          <i class="el-icon-setting"></i>
          <span slot="title">访问控制</span>
        </el-menu-item>

        <!-- <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Logo from './Logo'
import SidebarItem from "./SidebarItem";
import variables from "@/style/variables.scss";

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_routers", "sidebar"]),

    // defaultActive(){
    //   let pathname=this.$route.name
    //   console.log(this.$route.name)
    //   if (pathName == 'CategoryDetail') {
    //     let path ='/CategoryDetail';
    //     return path;
    //   } 
    //    if (pathName == 'CategoryManage') {
    //     let path ='/CategoryManage';
    //     return path;
    //   } 
    // },


    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
