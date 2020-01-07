<template>
  <div class="auth-template-wrapper">
    <div class="auth-template-content">
      <div class="auth-template-header">
        <h1 class="auth-template-header-title">Forelle</h1>
        <h2 class="auth-template-header-label">Сеть для настоящих рыболовов</h2>
      </div>
      <el-divider></el-divider>
      <div>
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.auth-template-wrapper {
  height: 100vh;
  background-color: #F6F7FA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auth-template-content {
  padding: 50px 60px;
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
}
.auth-template-header {
  text-align: center;
}
.auth-template-header-title {
  font-weight: 900;
  font-size: 36px;
  line-height: 24px;
  letter-spacing: 0.06em;
  font-variant: small-caps;
  color: #1B263D;
  margin-bottom: 16px;
}
.auth-template-header-label {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #58627A;
  margin-bottom: 32px;
}
</style>
