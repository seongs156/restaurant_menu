<template>
  <component :is="layout">
    <!--    <slot />-->
  </component>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import UserLayout from "./UserLayout";
  export default {
    name: "TheLayout",
    components: {
      UserLayout,
    },
    setup(props, { root }){
      const layout = computed(() => root.$route.meta.layout);
      return {
        layout,
      }
    }
  }
</script>

<style scoped>

</style>
