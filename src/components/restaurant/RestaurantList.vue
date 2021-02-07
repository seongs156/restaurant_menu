<template>
  <section class="restaurant-list">
    <div class="container">
      <div class="row">
        <b-card-group deck>
          <b-card
            text-variant="white" :header="restaurant.shop" class="text-center"
            v-for="restaurant in remaining" :key="restaurant.id">
            <b-card-text>
              <div class="now update" v-if="restaurant.dateUpdate">오늘 등록됨</div>
              <div class="now not-update" v-else>오늘 등록안됨</div>
            </b-card-text>
            <b-card-text>
              <router-link style="color:orange;" :to="{ name: 'MenuView',params:{id:restaurant.id}}">상세보기</router-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </section>
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
