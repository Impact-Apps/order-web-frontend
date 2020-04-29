<template>
    <div>Register</div>
</template>

<script>
    // import axios from 'axios'
    export default {
        name: "Register",
        mounted() {
            // todo -> register restaurant with this id
            console.log(decodeURI(this.$route.query.user_id))
            window.location=`https://impact-apps.eu.auth0.com/continue?state=${this.$route.query.state}`
        }
    }
</script>

<style scoped>

</style>
