<script>
export default {
  name: 'SideNavigation',
  props: {
    navItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <v-navigation-drawer app color="primary">
    <router-link data-qa="logoLink" to="/">
      <div class="logo pt-6 pb-6 pl-4 pr-4">
        <v-img contain max-width="50%" src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"></v-img>
      </div>
    </router-link>
    <v-list-item-group class="sidenav-item" active-class="sidenav-item--active" mandatory>
      <v-list-item
        v-for="item in navItems"
        :key="item.id"
        :to="item.href"
        link
      >
        <v-list-item-content>
          <v-list-item-title dense >{{item.label}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>
<style lang="scss">
.sidenav-item {
  & .v-list-item__title {
    color: #ffffff;
  }
  &--active {
    background-color : #2E7CBC;
  }
}
</style>
