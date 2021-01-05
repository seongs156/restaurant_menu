<template>
  <div>
    <mars/>
<!--    <header-component/>-->
<!--    <router-view></router-view>-->
    <!--    <transition name="router-animation" enter-active-class="animated fadeIn"-->
    <!--                leave-active-class="animated fadeOut" mode="out-in">-->
    <!--    </transition>-->
  </div>
</template>

<script>
  import HeaderComponent from '@/components/layouts/Header'
  import Mars from '@/components/layouts/Mars'

  export default {
    name: "UserLayout",
    components: {
      // HeaderComponent,
      Mars
    }
  }
</script>

<style scoped>

</style>
