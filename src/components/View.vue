<template>
  <v-content>
    <router-view />

    <navigation-footer />
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      NavigationFooter: () => import('@/components/navigation/Footer'),
    },
  }
</script>
