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
    <v-app-bar color="accent" app max-height="88">
      <v-row justify="end" align="center">
        <template v-for="(item, index) in navItems">
          <router-link :key="item.id" :to="item.href" class="px-2 text-decoration-none">
            <template>
              <v-icon v-if="item.icon" color="primary">{{ item.icon }}</v-icon>
              <span class="body-2">{{ item.label }}</span>
            </template>
          </router-link>
          <v-divider
            :key="`${item.slug}--divider`"
            v-if="index < navItems.length - 1"
            vertical
          />
        </template>
      </v-row>
    </v-app-bar>
</template>
<style lang="scss">
  .text-decoration-none {
    text-decoration: none;
  }
</style>
