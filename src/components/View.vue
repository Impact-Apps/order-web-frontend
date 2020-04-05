<template>
  <v-content>
    <router-view />

    <navigation-footer :footer-links="footerLinks"/>
  </v-content>
</template>

<script>
  import footerLinks from '@/constants/footer'

  export default {
    name: 'DashboardCoreView',

    components: {
      NavigationFooter: () => import('@/components/navigation/Footer'),
    },
    data: () => ({
      footerLinks: footerLinks,
    }),
  }
</script>
