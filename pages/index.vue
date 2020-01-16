<template>
    <el-row>
      <el-col :span="17">
        <section class="reports-container">
          <report-preview/>
          <report-preview/>
        </section>
      </el-col>
      <el-col :span="7">
        <reports-filter/>
      </el-col>
    </el-row>
</template>

<script>
import ReportPreview from "../components/ReportPreview";
import ReportsFilter from '../components/ReportsFilter'
export default {
  components: {
    ReportPreview,
    ReportsFilter
  }
}
</script>

<style>
  .reports-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

