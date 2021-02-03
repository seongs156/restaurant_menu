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
            <form @submit.prevent="menuSubmit()">
            <div>{{shop}}</div>
            <div v-if="dateUpdate">오늘 업로드됨</div>
            <div v-else>오늘 업로드 안됨</div>
            <b-row class="mt-2">
              <b-col sm="2">
                <label for="breakfast">morning:</label>
              </b-col>
              <b-col sm="10">
                <b-form-textarea
                  cols="20"
                  wrap="hard"
                  rows="8"
                  id="breakfast"
                  placeholder="Default textarea"
                  v-model="breakfastMenu"
                ></b-form-textarea>
              </b-col>
            </b-row>

            <b-row class="mt-2">
              <b-col sm="2">
                <label for="lunch">lunch:</label>
              </b-col>
              <b-col sm="10">
                <b-form-textarea
                  cols="20"
                  wrap="hard"
                  rows="8"
                  id="lunch"
                  placeholder="Default textarea"
                  v-model="lunchMenu"
                ></b-form-textarea>
              </b-col>
            </b-row>

            <b-row class="mt-2">
              <b-col sm="2">
                <label for="dinner">dinner:</label>
              </b-col>
              <b-col sm="10">
                <b-form-textarea
                  cols="20"
                  wrap="hard"
                  rows="8"
                  id="dinner"
                  placeholder="Default textarea"
                  v-model="dinnerMenu"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <button type="submit" class="btn-submit">메뉴등록</button>
            </form>
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
        timestamp: '',
        id:'',
        shop:'',
        dateUpdate:false,
        breakfastMenu:'',
        lunchMenu:'',
        dinnerMenu:'',
      }
    },
    created() {
    },
    methods: {
      shopCodeSelect() {
        this.$store.dispatch('restaurant/shopCodeSelect', this.shopCode).then(response => {
          if(!response.message){
            alert('없는 매장코드입니다.');
          } else {
            console.log(response);
            this.id = response.id;
            this.shop = response.data.shop;
            this.breakfastMenu = response.data.breakfastMenu;
            this.lunchMenu = response.data.lunchMenu;
            this.dinnerMenu = response.data.dinnerMenu;
            this.timestamp = response.data.timestamp;
            var timestamp = response.data.timestamp.seconds * 1000;
            var shopDate = new Date(timestamp);
            var nowDate = new Date();
            var shopDateConvert =  shopDate.getFullYear()+'-'+(shopDate.getMonth()+1)+'-'+shopDate.getDate();
            var nowDateConvert =  nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();
            if(nowDateConvert == shopDateConvert){
              this.dateUpdate = true;
            }
            this.currentStep++;
          }
        })
          .catch(error => {
            console.log('error',error);
          })
      },
      menuSubmit() {
        this.$store.dispatch('restaurant/addMenu', {
          id:this.id,
          breakfastMenu:this.breakfastMenu,
          lunchMenu:this.lunchMenu,
          dinnerMenu:this.dinnerMenu,
          timestamp:new Date(),
        }).then(response => {
          if(response === true) {
            alert('등록이 안료되었습니다.');
          }
        }).catch(error => {
          alert('등록이 실패하였습니다..');
          console.log('error', error);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
