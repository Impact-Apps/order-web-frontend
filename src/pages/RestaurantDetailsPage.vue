<script>
    import Review from "../components/Review";
    import {mapActions, mapState} from "vuex";
    export default {
        name: "RestaurantDetailsPage",
        components: {Review},
        methods: {
            ...mapActions({
                getReviews: 'getReviews'
            }),
        },
        computed: {
            ...mapState({
                restaurantId: state => state.user.restaurantId,
                reviews: state => state.restaurant.reviews
            })
        },
        created() {
            this.getReviews(this.restaurantId)
        }
    }
</script>

<template>
  <v-container>
    <h1>Reviews</h1>
    <v-list>
      <template v-for="(item, index) in reviews">
        <Review
                :key="index"
                :review="item.review"
                :rating=item.rating
                :date-created="item.createdAt"
        />
      </template>
    </v-list>
  </v-container>

</template>


<style scoped>

</style>
