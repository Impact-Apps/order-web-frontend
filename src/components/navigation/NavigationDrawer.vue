<script>
  import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'SideNavigation',
  props: {
    navItems: {
      type: Array,
      default: () => [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Account', icon: 'mdi-account' },
          { title: 'About', icon: 'mdi-help-box' },
      ]
    }
  },
  methods: {
    ...mapMutations({
      setDrawer: 'setDrawer'
    })
  },
  computed: {
    ...mapGetters({
      getDrawer: 'getDrawer'
    }),

    drawer: {
      get () {
        return this.getDrawer
      },
      set (val) {
        this.setDrawer(val)
      },
    },

  }
}
</script>

<template>
  <v-navigation-drawer
          app
          color="primary"
          v-model="drawer"
  >
    <router-link data-qa="logoLink" to="/">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Test Drawer
          </v-list-item-title>
          <v-list-item-subtitle>
            business/{businessId}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <v-divider class="mb-1" />

    <v-list>
      <v-list-item
              v-for="item in navItems"
              :key="item.title"
              link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<style lang="scss">

</style>
