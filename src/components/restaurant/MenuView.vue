<template>
  <div class="container">
    <form @submit.prevent="menuSubmit()">
      <div>{{ shop }}</div>
<!--      <div v-if="dateUpdate">오늘 업로드됨</div>-->
<!--      <div v-else>오늘 업로드 안됨</div>-->
      <b-row class="mt-2">
        <b-col sm="2">
          <label for="breakfast">아침 {{breakfastTime}}</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            cols="20"
            wrap="hard"
            rows="8"
            id="breakfast"

            v-model="breakfastMenu"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label for="lunch">점심 {{launchTime}}</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            cols="20"
            wrap="hard"
            rows="8"
            id="lunch"

            v-model="lunchMenu"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label for="dinner">저녁 {{dinnerTime}}</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            cols="20"
            wrap="hard"
            rows="8"
            id="dinner"

            v-model="dinnerMenu"
          ></b-form-textarea>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import valid from '@/components/mixin/validate'

export default {
  name: "MenuView",
  mixins: [valid],
  data() {
    return {
      timestamp: '',
      shop:'',
      breakfastMenu:'',
      lunchMenu:'',
      dinnerMenu:'',
      breakfastTime:'',
      launchTime:'',
      dinnerTime:'',
      zip:'',
      address1:'',
      address2:'',
    }
  },
  created() {
    this.idRemaining();
  },
  methods: {
    idRemaining() {
      this.$store.dispatch('restaurant/retrieveMenus', this.$route.params.id)
        .then(response => {
          console.log(response);
            this.timestamp = response.data.timestamp;
            this.shop = response.data.shop;
            this.breakfastMenu = response.data.breakfastMenu;
            this.lunchMenu = response.data.lunchMenu;
            this.dinnerMenu = response.data.dinnerMenu;
            this.breakfastTime = response.data.breakfastTime;
            this.launchTime = response.data.launchTime;
            this.dinnerTime = response.data.dinnerTime;
            this.zip = response.data.zip;
            this.address1 = response.data.address1;
            this.address2 = response.data.address2;
        })
        .catch(error => {
          alert('정보가 없습니다')
        })
    },
  }
}
</script>

<style scoped>
  textarea{
    text-align: center;
  }
</style>
