<template>
  <v-app>
    <app-bar />
    <navigation-drawer />
    <navigation-view />
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      AppBar: () => import('@/components/navigation/AppBar'),
      NavigationDrawer: () => import('@/components/navigation/NavigationDrawer'),
      NavigationView: () => import('@/components/View')
    },
  }
</script>
