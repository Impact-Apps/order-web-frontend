<script>
  export default {
    name: 'Index',

    components: {
      AppBar: () => import('@/components/navigation/AppBar'),
      NavigationDrawer: () => import('@/components/navigation/NavigationDrawer'),
      NavigationView: () => import('@/pages/View')
    },
  }
</script>

<template>
  <v-app>
    <app-bar />
    <navigation-drawer :nav-items="navItems"/>
    <navigation-view />
  </v-app>
</template>
