<template>
  <section class="restaurant-register">
    <div class="container">
      <div class="row">
        <div class="page-wrapper login-form">
          <vue-daum-postcode
            v-if="popup"
            class="daum_postcode"
            @complete="addressReg($event)"
          ></vue-daum-postcode>

          <h2 class="login-heading">식당등록</h2>
          <ValidationObserver v-slot="{ invalid,handleSubmit }">
            <form action="" @submit.prevent="onSubmit">
              <!--      <div v-if="successMessage" class="success-message">{{successMessage}}</div>-->
              <div v-if="serverErrors" class="server-error">
                <div v-for="(value,key) in serverErrors" :key="key">
                  {{value[0]}}
                </div>
              </div>
              <ValidationProvider class="full-width" name="매장" rules="required|min:2|max:15" vid="shop" v-slot="{ errors }">
                <label for="shop">매장<span class="validate-required">*</span></label>
                <input type="text"
                       @keydown.space.prevent id="shop" minlength="3" maxlength="20" class="login-input form-control"
                       v-model="shop">
                <span class="form-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider class="full-width" name="매장코드" rules="required|min:2|max:15" vid="shopCode" v-slot="{ errors }">
                <label for="shop">매장코드<span class="validate-required">*</span></label>
                <input type="text"
                       @keydown.space.prevent id="shopCode" minlength="3" maxlength="20" class="login-input form-control"
                       v-model="shopCode">
                <span class="form-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="address-box-wrap">
                <label for="name">연락처<span class="validate-required">*</span></label>
                <div class="tel-wrap">
                  <select size="sm" v-model="tel1" placeholder="50자 이내로 입력하세요." class="form-control tel-width">
                    <option :value="number" v-for="(number,index) in telNumbers">{{number}}</option>
                  </select>
                  <span class="tel-dash"> - </span>
                  <input type="number" class="form-control d-inline tel-width" v-model="tel2"
                         oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         maxlength="4" min="1" max="9999">
                  <span class="tel-dash"> - </span>
                  <input type="number" class="form-control d-inline tel-width" v-model="tel3"
                         oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                         maxlength="4" min="1" max="9999">
                </div>
              </div>


              <ValidationProvider class="full-width" name="비밀번호" rules="required|min:4|max:15" vid="password" v-slot="{ errors }">
                <label for="password">비밀번호<span class="validate-required">*</span></label>
                <input type="password" minlength="4" maxlength="15" @keydown.space.prevent name="password" id="password"
                       :class="{'input-error':errors[0]}" class="login-input form-control" v-model="password">
                <span class="form-error">{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider class="full-width" name="비밀번호 확인" rules="required|min:4|max:15|confirmed:password" v-slot="{ errors }">
                <label for="confirm_password">비밀번호 확인<span class="validate-required">*</span></label>
                <input type="password" minlength="4" maxlength="15" @keydown.space.prevent name="confirm_password"
                       id="confirm_password" :class="{'input-error':errors[0]}" class="login-input form-control"
                       v-model="confirm_password">
                <span class="form-error">{{ errors[0] }}</span>

              </ValidationProvider>
              <ValidationProvider name="우편번호" rules="" vid="zip" v-slot="{ errors }">
                <label for="zipcode" class=" w-100">주소<span class="validate-required">*</span></label>
                <input type="text" :value="zip" id="zipcode" class="form-control zip-code d-inline">
                <button type="button" @click="openPopup" class="btn btn-dark addr-btn">우편번호</button>

              </ValidationProvider>
              <div class="mt-10">
                <div class="addr-column">
                  <ValidationProvider name="도로명 주소" rules="" vid="address1" v-slot="{ errors }">
                    <input type="text" :value="address1" class="form-control d-inline" id="address1">
                  </ValidationProvider>
                  <ValidationProvider name="상세주소" rules="" vid="address2" v-slot="{ errors }">
                    <input type="text" v-model="address2" class="form-control d-inline">
                  </ValidationProvider>
                </div>
              </div>
              <label class="time" for="">아침시간</label>
              <div class="opening-time-wrap">


                <input type="text" class="form-control" v-model="breakfastOpening">
                <div> ~</div>
                <input type="text" class="form-control" v-model="breakfastClosing">
              </div>
              <label class="time" for="">점심시간</label>
              <div class="opening-time-wrap">


                <input type="text" class="form-control" v-model="launchOpening">
                <div> ~</div>
                <input type="text" class="form-control" v-model="launchClosing">
              </div>
              <label class="time" for="">저녁시간</label>
              <div class="opening-time-wrap">


                <input type="text" class="form-control" v-model="dinnerOpening">
                <div> ~</div>
                <input type="text" class="form-control" v-model="dinnerClosing">
              </div>
              <div class="">
                <button type="submit" class="btn" :disabled="invalid">회원가입</button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import valid from '@/components/mixin/validate'
  import AddressComponent from '@/components/common/Address'
  import myMixin from '@/components/mixin/telSelect'

  export default {
    components: {
      AddressComponent,
    },
    name: "RestaurantRegister",
    mixins: [valid, myMixin],
    data() {
      return {
        shop: '',
        shopCode: '',
        password: '',
        confirm_password: '',
        tel: '',
        serverErrors: '',
        successMessage: '',
        telNumbers: this.telNumber,
        zip: '',
        address1: '',
        address2: '',
        tel1: '010',
        tel2: '',
        tel3: '',
        popup: false,
        breakfastOpening: '',
        breakfastClosing: '',
        launchOpening: '',
        launchClosing: '',
        dinnerOpening: '',
        dinnerClosing: '',
      }
    },
    created() {
    },

    computed: {},
    methods: {
      register() {
        this.tel = this.tel1 + this.tel2 + this.tel3;
        this.$store.dispatch('restaurant/register', {
          'shop': this.shop,
          'shopCode': this.shopCode,
          'password': this.password,
          'zip': this.zip,
          'address1': this.address1,
          'address2': this.address2,
          'tel': this.tel,
          'breakfastTime': this.breakfastOpening + '~' + this.breakfastClosing,
          'launchTime': this.launchOpening + '~' + this.launchClosing,
          'dinnerTime': this.dinnerOpening + '~' + this.dinnerClosing,
        }).then(response => {
          if (response === true) {
            alert('매장등록이 완료되었습니다.');
            this.$router.push({path: '/'});
          } else {
            alert('매장등록이 실패하였습니다..');
          }
        }).catch(error => {
          alert('매장등록이 실패하였습니다..');
          console.log('error', error);
        })
      },

      onSubmit() {
        this.register();
      },
      addressReg(data) {
        this.zip = data.zonecode;
        this.address1 = data.roadAddress;
        this.popup = false;
      },
      openPopup() {
        this.popup = true;
      },
    }
  }

</script>

<style lang="scss" scoped>

  .daum_postcode {
    height: 439px;
    position: absolute;
    width: 570px;
    right: 15%;
    top: 18%;
    border: 1px solid #dedede;
  }

  select {
    display: inline-block;
  }




  .addr-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .address-box-wrap {
  }

  .opening-time-wrap {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    text-align: center;
  }
</style>
