<template>
  <div class="container">
    <ValidationObserver ref="form">
      <fieldset>
        <keep-alive>
          <div v-if="currentStep === 1">
            <form @submit.prevent="shopCodeSelect()">
              <ValidationProvider name="매장" rules="required|min:3|max:100" v-slot="{ errors }">
                <input class="form-control" type="text" id="shopCode" v-model="shopCode" required
                       minlength="1" maxlength="30" placeholder="매장코드를 입력해주세요">
              </ValidationProvider>
              <button type="submit" class="btn-submit">다음단계</button>
            </form>
          </div>
        </keep-alive>
        <keep-alive>
          <div v-if="currentStep === 2">

          </div>
        </keep-alive>
      </fieldset>
    </ValidationObserver>
  </div>
</template>

<script>
  import valid from '@/components/mixin/validate'

  export default {
    name: "MenuRegister",
    mixins: [valid],
    data() {
      return {
        currentStep: 1,
        shopCode: '',
      }
    },
    methods: {
      shopCodeSelect() {
        this.$store.dispatch('restaurant/shopCodeSelect', this.shopCode).then(response => {
          if(!response.message){
            alert('없는 매장코드입니다.');
          } else {
            console.log(response);
            this.currentStep++;
          }
        })
          .catch(error => {
            console.log('error',error);
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "@/assets/sass/app.scss";

</style>
