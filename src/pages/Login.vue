<script>
    export default {
        name: "Login",
        data () {
            return {
                hidePassword: true,
                userEmail: null,
                password: null,
                error: false,
                rules: {
                    required: value => !!value || 'Required.'
                }
            }
        },
        methods: {
            login() {
                if (this.$refs.form.validate()) {
                    this.$router.push('/')
                }
            }
        }
    }
</script>

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

              <v-form ref="form">
                <v-text-field
                        id="email"
                        prepend-icon="mdi-account-circle"
                        label="E-mail"
                        type="text"
                        v-model="userEmail"
                        :error="error"
                        :rules="[rules.required]"/>
                <v-text-field
                        id="password"
                        prepend-icon="mdi-lock"
                        :type="hidePassword ? 'password' : 'text'"
                        :append-icon="hidePassword ? 'mdi-eye-off' : 'mdi-eye'"
                        label="Password"
                        :rules="[rules.required]"
                        v-model="password"
                        :error="error"
                        @click:append="hidePassword = !hidePassword"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn id="login" color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>

</style>
