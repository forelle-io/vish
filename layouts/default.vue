<template>
  <div>
    <app-header/>
    <el-row class="app-main" type="flex" :gutter="10">
      <el-col :span="4">
        <app-navigation/>
      </el-col>
      <el-col :span="14">
        <main>
          <nuxt/>
        </main>
      </el-col>
      <el-col :span="6">
        Фильтры
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Заявки на выезд" name="1">
            <div>Consistent with real life that the users are used to</div>
          </el-collapse-item>
          <el-collapse-item title="Водоем" name="2">
            <div>Operation feedback: enable</div>
          </el-collapse-item>
          <el-collapse-item title="Отчеты" name="3">
            <div>Simplify the process: keep operating process simple and intuitive</div>
          </el-collapse-item>
        </el-collapse>
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

