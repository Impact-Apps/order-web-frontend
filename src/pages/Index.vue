<script>
    import navItems from '../constants/sideNavItems';

    export default {
        name: 'Index',
        data: () => ({
            navItems: navItems,
        }),
        components: {
            AppBar: () => import('@/components/navigation/AppBar'),
            NavigationDrawer: () => import('@/components/navigation/NavigationDrawer'),
            NavigationView: () => import('@/pages/View')
        },
      created() {
        console.log(localStorage.getItem('user'))
        console.log(localStorage.getItem('access_token'))
        console.log(localStorage.getItem('id_token'))
        console.log(localStorage.getItem('expires_at'))
        console.log(localStorage.getItem('user'))
      }
    }
</script>

<template>
  <v-app>
    <app-bar />
    <navigation-drawer :nav-items="navItems"/>
    <navigation-view />
  </v-app>
</template>
