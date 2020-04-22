<script>
    import Review from "../components/Review";
    export default {
        name: "RestaurantDetailsPage",
        components: {Review},
        data: () => ({
            items: [
                {
                    review: "Test1",
                    rating: 4.0,
                    dateCreated: '17/05/2020'
                },
                {
                    review: "Test2",
                    rating: 3.5,
                    dateCreated: '17/06/2020'
                }
            ]
        }),
    }
</script>

<template>

  <v-list>
    <template v-for="(item, index) in items">
      <Review
              :key="index"
              :review="item.review"
              :rating=item.rating
              :date-created="item.dateCreated"
      />
    </template>
  </v-list>
</template>


<style scoped>

</style>
