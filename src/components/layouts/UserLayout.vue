<template>
  <div>
    <header-component/>
    <router-view></router-view>
    <!--    <transition name="router-animation" enter-active-class="animated fadeIn"-->
    <!--                leave-active-class="animated fadeOut" mode="out-in">-->
    <!--    </transition>-->
  </div>
</template>

<script>
  import HeaderComponent from '@/components/layouts/Header'

  export default {
    name: "UserLayout",
    components: {
      HeaderComponent
    }
  }
</script>

<style scoped>

</style>
