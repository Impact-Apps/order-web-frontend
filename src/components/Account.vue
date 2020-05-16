<template>
    <div class="account">
        <v-row>
            <v-col class="d-flex justify-center" cols="12">
                <v-btn color="primary" @click="navigateToStripeSetUp()">Set up payments</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center" cols="12">
                <v-row>
                    <v-col cols="12">
                    <div id="iban-element">
                    <!-- A Stripe Element will be inserted here. -->
                    </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn color="primary" @click="createToken()">Submit account</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <!-- Used to display form errors. -->
                    <div id="error-message" role="alert"></div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
            iban: null,
            stripe: null,
        }
    },
    methods: {
        ...mapActions('restaurant', ['getStripeSetUpLink', 'setUpPayouts', 'setUpBankAccount']),
        async navigateToStripeSetUp() {
            const formLink = await this.getStripeSetUpLink()
            window.location = formLink
        },
        async setupStripePayouts() {
            await this.setUpPayouts()
        },
        async createToken() {
            const sourceData = {
                currency: 'eur',
                account_holder_name: 'Test',
                account_holder_type: 'individual',
            };

            const result = await this.stripe.createToken(this.iban, sourceData)
            if (result.error) {
                var errorElement = document.getElementById('error-message');
                errorElement.textContent = result.error.message;
            } else {
                await this.setUpBankAccount(result.token.id)
            }
        }
    },

    mounted() {
        this.stripe = window.Stripe('pk_test_0DYU1GynXrFGaouWABMCkA5c00JGZLaKwO')
        let elements = this.stripe.elements()
        var style = {
            base: {
                // Add your base input styles here. For example:
                fontSize: '16px',
                color: "#32325d",
            }
        };

        var options = {
            style: style,
            supportedCountries: ['SEPA'],
            // If you know the country of the customer, you can optionally pass it to
            // the Element as placeholderCountry. The example IBAN that is being used
            // as placeholder reflects the IBAN format of that country.
            placeholderCountry: 'IE',
        }

        // Create an instance of the iban Element.
        this.iban = elements.create('iban', options);

        // Add an instance of the iban Element into the `iban-element` <div>.
        this.iban.mount('#iban-element');

        this.iban.on('change', function(event) {
            var displayError = document.getElementById('error-message');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
    }

}
</script>

<style>

input,
.StripeElement {
  height: 40px;
  padding: 10px 12px;

  color: #32325d;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

input:focus,
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

</style>

