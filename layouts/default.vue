<template>
  <div>
    <app-header/>
    <el-row class="app-main" type="flex" :gutter="10">
      <el-col :span="4">
        <app-navigation/>
      </el-col>
      <el-col :span="20">
        <main>
          <nuxt/>
        </main>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AppHeader from "../containers/AppHeader"
import AppNavigation from "../containers/AppNavigation";

export default {
  components: {
    AppHeader,
    AppNavigation
  },
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>
<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
  .app-main {
    padding: 0 120px;
  }
</style>

