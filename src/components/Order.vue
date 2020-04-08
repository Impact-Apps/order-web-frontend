<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="orders"
                :items-per-page="5"
                class="elevation-1"
        />
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    export default {
        name: "Order",
        methods: {
            ...mapActions({
                getOrders: 'getOrders'
            }),

        },
        data: () => ({
            headers: [
                { text: 'order', value: '_id' },
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
                restaurantId: state => state.userStore.restaurantId,
                orders: state => state.orderStore.orders
            })
        },
        created() {
            this.getOrders(this.restaurantId)
        }
    }
</script>

<style scoped>

</style>
