<template>

</template>

<script>
export default {
  name: "MenuView",
  created() {
    this.idRemaining();
  },
  methods: {
    idRemaining() {
      this.$store.dispatch('commerce/showProduct', {
        id: this.$route.params.id
      })
      .then(response => {

      })
      .catch(error => {
        alert('정보가 없습니다')
        console.log(error)
      })



      this.$store.dispatch('restaurant/register', {

      });
      return this.$store.getters['restaurant/idRemaining']
    },
  }
}
</script>

<style scoped>

</style>
