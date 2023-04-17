<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="users"
      :pagination-options="paginationOptions"
      :search-options="searchOptions"
      :line-numbers="true"
    />
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Users',
  components: {
    VueGoodTable,
  },
  computed: {
    ...mapState('users', ['users']),
    columns() {
      return [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Username',
          field: 'username',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Last Login',
          field: 'last_login',
        },
      ]
    },
    paginationOptions() {
      return {
        enabled: true,
        mode: 'pages',
        perPage: 14,
        position: 'bottom',
        perPageDropdown: [3, 7, 9],
        dropdownAllowAll: true,
        setCurrentPage: 1,
        nextLabel: 'Next',
        prevLabel: 'Previous',
        rowsPerPageLabel: 'Records per page',
        ofLabel: 'of',
        pageLabel: 'page',
      }
    },
    searchOptions() {
      return {
        enabled: true,
      }
    }
  },
  async fetch({store}) {
    await store.dispatch('users/fetchUsers')
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
  },
}
</script>

