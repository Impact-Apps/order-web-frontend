<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "Menu",
        methods: {
            ...mapActions({
                getMenu: 'getMenu'
            })
        },
        data: () => ({
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Vegetarian', value: 'isVegetarian' },
                { text: 'Cuisine Type', value: 'cuisine' },
                { text: 'Price', value: 'price' },
                { text: 'Label', value: 'label' },
            ]
        }),
        computed: {
            ...mapState({
                menu: state => state.menuState.menu,
                restaurantId: state => state.userStore.restaurantId,
            })
        },
        created() {
            this.getMenu(this.restaurantId)
        }
    }
</script>

<template>
  <v-data-table
          :headers="headers"
          :items="menu"
          :items-per-page="5"
          class="elevation-1"
  />
</template>

<style scoped>

</style>

