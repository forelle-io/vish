<template>
  <section class="container">
    <report-preview/>
    <report-preview/>
  </section>
</template>

<script>
import ReportPreview from "../components/ReportPreview";
export default {
  components: {
    ReportPreview
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

