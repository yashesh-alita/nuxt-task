import { supabase } from '~/plugins/supabase'

const state = () => ({
  users: [],
})

const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

const actions = {
  async fetchUsers({ commit }) {
    const { data, error } = await supabase
      .from('users')
      .select('name, username, email, last_login')

    if (error) {
      console.error(error)
    } else {
      commit('setUsers', data)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
