<template>
  <header class="app-header">
    <el-row type="flex" align="middle" :gutter="10">
      <el-col class="header-logo-wrapper" :span="4">
        <h1>
          Forelle.io
        </h1>
      </el-col>
      <el-col :span="6" :offset="14">
        <el-row key="logged" type="flex" align="middle" justify="space-between">
          <el-col :span="3">
            <el-avatar
              shape="square"
              :size="40"
              fit="fill"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
          </el-col>
          <el-col :span="18">
            <el-dropdown>
              <span>
                admin@example.com<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <el-button
              size="small"
              @click="$router.push('login')"
            >
              Войти
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default {

}
</script>
<style scoped>
  .app-header {
    border-bottom: 1px solid #EBEDF5;
    padding: 12px 120px;
    margin-bottom: 40px;
  }
  .header-logo-wrapper {
    text-align: center;
    font-weight: 900;
    font-size: 22px;
    font-style: normal;
    text-transform: uppercase;

    color: #1B263D;
  }
</style>
