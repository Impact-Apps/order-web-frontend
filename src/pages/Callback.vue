<template>
    <div />
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'callback',
        methods: {
            ...mapActions('restaurant', ['getRestaurant'])
        },
        mounted() {
            this.$auth.handleAuthentication().then(async () => {
                await this.getRestaurant(this.$auth.user.sub)
                this.$router.push({ path: '/' })
            })
        }
    }
</script>
