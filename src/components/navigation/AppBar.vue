<script>
export default {
  name: 'TopNavbar',
  props: {
    navItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
    <v-app-bar
            id="app-bar"
            absolute
            color="transparent"
            app
            max-height="75"
    >
        <v-app-bar-nav-icon/>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<style lang="scss">

</style>
