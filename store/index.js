export const state = () => ({
    token: ''
})

export const mutations = {
  login(state, { token = ''} = {}) {
    state.token = token
  },
  logout(state) {
    state.token = ''
  }
}

export const getters = {
  isAuthorized: state => state.token.length > 0
}

export const actions = {
  login({ commit }, { phone = '', smsCode = ''} = {}) {
    return this.$axios({
      method: 'post',
      url: '/api/v1/auth/authenticate/user',
      data: {
        phone: phone,
        sms_code: smsCode
      }
    }).then(({ data }) => {
      commit('login', data)
      return
    })
  }
}
