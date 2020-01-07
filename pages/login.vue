<template>
  <div class="auth-wrapper">
    <h3 class="auth-title">Авторизация</h3>
    <el-form
      label-position="top"
      label-width="100px"
      ref="loginForm"
      :rules="formValidationRules"
      :model="authForm">
      <el-form-item class="auth-form-phone" prop="phone">
        <template slot="label">
          <span class="auth-form-phone-label">
            Введите номер телефона
          </span>
        </template>
        <el-input v-model="authForm.phone" v-mask="'(###) ###-##-##'" placeholder="Номер телефона">
          <template slot="prepend">+7</template>
        </el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button
          type="primary"
          class="auth-form-submit-button"
          :loading="isLoadingState"
          @click="onSubmit">
          Далее
        </el-button>
      </el-form-item>
    </el-form>
    <div class="auth-footer">
      <span>Нет аккаунта? <nuxt-link to="/registration">Зарегистрироваться</nuxt-link></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    layout: 'auth',
    data () {
      return {
        authForm: {
          phone: ''
        },
        formValidationRules: {
          phone: {
            required: true,
            message: 'Введите номер телефона',
            trigger: 'blur'
          }
        },
        isLoadingState: false
      }
    },
    methods: {
      onSubmit () {
        this.$refs.loginForm.validate((isValid) => {
          if (isValid) {
            this.isLoadingState = true
            setTimeout(() => {
              this.isLoadingState = false
            }, 2500)
          } else {
            return false
          }
        })
      }
    }
  }
</script>
<style scoped>
.auth-form-submit-button {
  margin-top: 20px;
  width: 100%;
}
.auth-title {
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #1B263D;
  margin-bottom: 40px;
}
.auth-form-phone-label {
  padding: 0;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.02em;
  font-variant: small-caps;
  color: #58627A;
}
.auth-footer {
  text-align: center;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #1B263D;
}
a {
  color: inherit;
}
.auth-form-phone {
  margin-bottom: 20px;
}
.auth-form-phone-label::before {
  display: none !important;
}
</style>
