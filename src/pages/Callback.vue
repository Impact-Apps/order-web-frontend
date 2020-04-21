<template>
    <div />
</template>

<script>
    export default {
        name: 'callback',
        mounted() {
            this.$auth.handleAuthentication().then(() => {
                this.$router.push({ path: '/' })
            })
        }
    }
</script>
