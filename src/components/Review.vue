<script>
    export default {
        name: "Rating",
        props: {
            review: {
                type: String,
                default: null
            },
            rating: {
                type: Number,
                required: true
            },
            dateCreated: {
                type: String,
                default: null
            }
        }
    }
</script>

<template>
  <v-card>
    <v-card-text v-text="review">

      <div class="text-center mt-12">
        <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-card-text>Date Created: {{dateCreated}}</v-card-text>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
