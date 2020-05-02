<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-card class="elevation-1 pa-3">
            <div class="layout column align-center">
              <v-card-title class="flex my-4 primary--text">Login</v-card-title>
            </div>
            <v-card-text>

              <!-- Check that the SDK client is not currently loading before accessing is methods -->
              <div v-if="!$auth.loading">
                <!-- show login when not authenticated -->
                {{$auth.isAuthenticated()}}
                <button v-if="!$auth.isAuthenticated()" @click="login">Log in</button>
                <!-- show logout when authenticated -->
                <button v-if="$auth.isAuthenticated()" @click="logout">Log out</button>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  // .. imports removed for brevity

  export default {
    methods: {
      // Log the user in
      login() {
        this.$auth.login();

      },
      // Log the user out
      logout() {
        this.$auth.logout()
      }
    }
  };
</script>

<style scoped>

</style>
