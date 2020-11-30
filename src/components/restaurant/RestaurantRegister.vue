<template>
  <div class="page-wrapper login-form">
    <vue-daum-postcode
      v-if="popup"
      class="daum_postcode"
      @complete="addressReg($event)"
    ></vue-daum-postcode>

    <h2 class="login-heading">Register</h2>
    <ValidationObserver v-slot="{ invalid,handleSubmit }">
      <form action="" @submit.prevent="onSubmit">
        <!--      <div v-if="successMessage" class="success-message">{{successMessage}}</div>-->
        <div v-if="serverErrors" class="server-error">
          <div v-for="(value,key) in serverErrors" :key="key">
            {{value[0]}}
          </div>
        </div>
        <ValidationProvider name="매장" rules="required|min:2|max:15" vid="shop" v-slot="{ errors }">
        <label for="shop">매장<span class="validate-required">*</span></label>
            <input type="text"
                   @keydown.space.prevent id="shop" minlength="3" maxlength="20"  class="login-input form-control" v-model="shop">
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <div class="address-box-wrap">

          <label for="name">연락처<span class="validate-required">*</span></label>
          <select size="sm" v-model="tel1" placeholder="50자 이내로 입력하세요." class="form-control tel-width">
            <option :value="number" v-for="(number,index) in telNumbers">{{number}}</option>
          </select>
          <span class="tel-dash"> - </span>
          <input type="number" class="form-control d-inline tel-width" v-model="tel2"
                 oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                 maxlength = "4" min="1" max="9999">
          <span class="tel-dash"> - </span>
          <input type="number" class="form-control d-inline tel-width" v-model="tel3"
                 oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                 maxlength = "4" min="1" max="9999">
        </div>

        <ValidationProvider name="비밀번호" rules="required|min:4|max:15" vid="password" v-slot="{ errors }">
          <label for="password">비밀번호<span class="validate-required">*</span></label>
          <input type="password" minlength="4" maxlength="15" @keydown.space.prevent name="password" id="password" :class="{'input-error':errors[0]}" class="login-input form-control" v-model="password">
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="비밀번호 확인" rules="required|min:4|max:15|confirmed:password" v-slot="{ errors }">
          <label for="confirm_password">비밀번호 확인<span class="validate-required">*</span></label>
          <input type="password" minlength="4" maxlength="15" @keydown.space.prevent name="confirm_password" id="confirm_password" :class="{'input-error':errors[0]}" class="login-input form-control" v-model="confirm_password">
          <span  class="form-error">{{ errors[0] }}</span>

        </ValidationProvider>
        <ValidationProvider name="우편번호" rules="" vid="zip" v-slot="{ errors }">
          <label for="zipcode" class=" w-100">주소<span class="validate-required">*</span></label>
          <input type="text" :value="zip" id="zipcode" class="form-control zip-code d-inline">
        </ValidationProvider>
        <button type="button" @click="openPopup" class="btn btn-dark addr-btn">우편번호</button>
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
        <label for="">아침시간</label>
        <div class="opening-time-wrap">


        <input type="text" class="form-control" v-model="breakfastOpening">
        <div> ~ </div>
        <input type="text" class="form-control" v-model="breakfastClosing">
        </div>
          <label for="">점심시간</label>
        <div class="opening-time-wrap">


        <input type="text" class="form-control" v-model="launchOpening">
        <div> ~ </div>
        <input type="text" class="form-control" v-model="launchClosing">
        </div>
          <label for="">저녁시간</label>
        <div class="opening-time-wrap">


        <input type="text" class="form-control" v-model="dinnerOpening">
        <div> ~ </div>
        <input type="text" class="form-control" v-model="dinnerClosing">
        </div>
          <div class="">
          <button type="submit" class="btn-submit" :disabled="invalid">회원가입</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
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
  mixins: [valid,myMixin],
  data() {
    return {
      shop: '',
      password: '',
      confirm_password: '',
      tel: '',
      serverErrors: '',
      successMessage: '',
      telNumbers:this.telNumber,
      zip:'',
      address1:'',
      address2:'',
      tel1:'010',
      tel2:'',
      tel3:'',
      popup:false,
      breakfastOpening:'',
      breakfastClosing:'',
      launchOpening:'',
      launchClosing:'',
      dinnerOpening:'',
      dinnerClosing:'',
    }
  },
  created() {
  },

  computed: {

  },
  methods: {
    register() {
      console.log(this.zip);
      console.log(this.address1);
      console.log(this.address2);
      this.tel = this.tel1+this.tel2+this.tel3;
      this.$store.dispatch('restaurant/register', {
          'shop': this.shop,
          'password': this.password,
          'zip': this.zip,
          'address1': this.address1,
          'address2': this.address2,
          'tel': this.tel,
          'breakfastTime':this.breakfastOpening+'~'+this.breakfastClosing,
          'launchTime':this.launchOpening+'~'+this.launchClosing,
          'dinnerTime':this.dinnerOpening+'~'+this.dinnerClosing,
      })
      //   .then(response => {
      //     if(response.data.success === true){
      //       this.successMessage = "회원가입이 완료되었습니다."
      //       this.$router.push({name: 'login', params: {dataSuccessMessage: this.successMessage, appendToast: true}})
      //     } else if(response.data.success !== true){
      //       if(response.data.errorType === 'password_confirm'){
      //         alert(response.data.data.message.confirm_password)
      //         return false
      //       }
      //       console.log(response)
      //       alert(response.data.data.message)
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     // console.log(Object.values(error.response.data.errors))
      //     // this.serverErrors = Object.values(error.response.data.error)
      //   })
    },

    onSubmit() {
      // this.$validator.validateAll().then((result) => {
      //   if (result) {
      // eslint-disable-next-line
      this.register();
      // }

      // alert('Correct them errors!');
      // });
    },
    addressReg(data) {
      this.zip = data.zonecode;
      this.address1 = data.roadAddress;
      this.popup = false;
    },
    openPopup() {
      this.popup = true;
      // console.log(event);

              //
              // this.zip = data.zonecode;
              // this.address1 = data.roadAddress;

          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
          // 우편번호와 주소 정보를 해당 필드에 넣고, 커서를 상세주소 필드로 이동한다.

          // document.getElementById('zipcode6').value = data.postcode;
      //     document.getElementById('zipcode').value = data.zonecode;
      //     document.getElementById('address1').value = data.roadAddress;
      //     this.zip = data.zonecode;
      //     this.address1 = data.roadAddress;
      //     console.log(this.zip);
      //     console.log(this.address1);

    },
  }
}

</script>

<style lang="scss" scoped>
  @import "@/assets/sass/app.scss";

  .daum_postcode{
    height: 439px;
    position: absolute;
    width: 570px;
    right: 15%;
    top: 18%;
    border: 1px solid #dedede;
  }
  .form-control{
    border-radius: inherit;
  }
  select{
    display:inline-block;
  }
  .addr-btn{
    margin-left: 14px;
    border-radius:inherit;
    max-height: 33.5px;
    height: 33.5px;
  }
  .zip-code{
    width:90px;
    vertical-align: bottom;
  }
  .addr-column{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  .address-box-wrap{
  }
  .opening-time-wrap{
    display:grid;
    grid-template-columns: 3fr 1fr 3fr;
    text-align: center;
  }
</style>
