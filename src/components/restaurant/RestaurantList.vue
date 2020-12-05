<template>
  <div>
    <b-card-group deck >
      <b-card v-if="restaurant.dateUpdate" bg-variant="info" text-variant="white" :header="restaurant.shop" class="text-center" v-for="restaurant in remaining" :key="restaurant.id">
        <b-card-text>
          <router-link style="color:orange;" :to="{ name: 'MenuView',params:{id:restaurant.id}}">상세보기</router-link>
        </b-card-text>
        <b-card-text>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "RestaurantList",
  created() {
    this.$store.dispatch('restaurant/retrieveRestaurant')
  },
  computed: {
    remaining() {
      return this.$store.getters['restaurant/remaining']
    },
  }
}
</script>

<style scoped>

</style>
