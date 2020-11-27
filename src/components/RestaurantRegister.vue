<template>
  <div class="page-wrapper login-form">
    <h2 class="login-heading">Register</h2>
    <ValidationObserver v-slot="{ invalid,handleSubmit }">
      <form action="" @submit.prevent="handleSubmit(onSubmit)">
        <!--      <div v-if="successMessage" class="success-message">{{successMessage}}</div>-->
        <div v-if="serverErrors" class="server-error">
          <div v-for="(value,key) in serverErrors" :key="key">
            {{value[0]}}
          </div>
        </div>


        <ValidationProvider name="아이디" rules="required|min:3|max:20" :rules="`${idCertification === true ? 'certificateNumber' : 'required|lengthFalse'}`" v-slot="{ errors }" class="identification-wrap">
          <label for="identification">아이디<span class="validate-required">*</span></label>
          <div class="id-wrap">
            <input type="text"
                   @keydown.space.prevent name="identification" id="identification" minlength="3" maxlength="20" :class="{'input-error':errors[0]}" class="login-input form-control" v-model="identification">
            <button type="button" class="btn btn-primary"  @click="identificationCheck()">중복확인</button>
            <span  class="form-error">{{ errors[0] }}</span>

            <b-toast id="id-toast" v-if="idCertification" title="메세지" static>
              사용가능한 아이디입니다.
            </b-toast>
            <b-toast id="id-toast" v-else title="메세지" static no-auto-hide>
              등록된 아이디입니다.
            </b-toast>
          </div>

        </ValidationProvider>

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

        <ValidationProvider name="이메일" rules="required|email|max:20" v-slot="{ errors }">
          <label for="email">이메일<span class="validate-required">*</span></label>
          <input type="email" maxlength="20" @keydown.space.prevent name="email" id="email" class="login-input form-control" :class="{'input-error':errors[0]}" v-model="email" >
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>


        <ValidationProvider name="이름" rules="required|min:2|max:6" v-slot="{ errors }">
          <label for="name">이름<span class="validate-required">*</span></label>
          <input type="text" minlength="2" @keydown.space.prevent name="name" maxlength="6" id="name" class="login-input form-control" :class="{'input-error':errors[0]}" v-model="name">
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <div class="gender-wrap">
          <label for="name">성별<span class="validate-required">*</span></label>
          <label class="radio-container m-r-45">남성
            <input type="radio" v-model="gender" value="M">
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">여성
            <input type="radio" v-model="gender" value="W">
            <span class="checkmark"></span>
          </label>
        </div>
        <ValidationProvider name="생년월일" rules="required|min:6|max:6" v-slot="{ errors }">
          <label for="birthday">생년월일<span class="validate-required">*</span></label>
          <input type="number"
                 maxlength="6" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                 @keydown.space.prevent name="birthday" id="birthday" placeholder="주민등록번호 앞번호 6자리" class="login-input form-control" :class="{'input-error':errors[0]}" v-model="birthday">
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="전화번호" rules="required|min:10|max:12" v-slot="{ errors }">
          <label for="tel">전화번호<span class="validate-required">*</span></label>
          <div class="tel-sms-wrap">
            <input type="number"
                   maxlength="12" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                   @keydown.space.prevent name="tel" id="tel"
                   placeholder="전화번호를 입력하세요"  v-model="tel"
                   class="login-input form-control" :class="{'input-error':errors[0]}">
            <button type="button" class="btn btn-primary" :class="{ smsActive : timeLimit  }" @click="smsSend()" :disabled="timeLimit">인증번호 받기</button>
          </div>
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>


        <ValidationProvider name="인증번호" rules="required" :rules="`${smsCertification === true ? 'certificateNumber' : 'required|lengfalse'}`" v-slot="{ errors }">
          <input type="number"
                 maxlength="6" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                 @keydown.space.prevent v-model="certificationNumber" name="smsValidate" id="sms-validate" placeholder="인증번호를 입력하세요" class="login-input form-control" :class="{'input-error':errors[0]}">
          <span  class="form-error">{{ errors[0] }}</span>
        </ValidationProvider>
        <span id="sms-success-ment">{{certifi}}</span>
        <!--        {{smsNumber}}-->
        <!--      {{smsCertification}}-->
        <!--        {{smsCertification}}, {{timeLimit}}, {{certifi}}-->
        <!--      {{idCertification}}-->
        <div id="time"></div>
        <div class="">
          <button type="submit" class="btn-submit" :disabled="invalid">회원가입</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import valid from '@/components/mixin/validate'

export default {
  name: "RestaurantRegister",
  mixins: [valid],
  data() {
    return {
      identification: '',
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      gender: 'M',
      birthday: '',
      tel: '',
      serverErrors: '',
      successMessage: '',
      smsCertification: false,
      idCertification: false,
      timeLimit:false,
      smsNumber:'',
      certificationNumber:'',
      test:''
    }
  },
  created() {
  },
  watch: {
    identification: function () {
      this.idCertification = false
    }
  },
  computed: {
    certifi(){
      if(this.certificationNumber.length > 0){
        var ment = ''
        if(this.smsNumber === this.certificationNumber && this.timeLimit === true){
          this.smsCertification = true
          ment = '인증에 성공하였습니다.'
        } else {
          this.smsCertification = false
          ment = ''
        }
        return ment
      }
    }
  },
  methods: {
    register() {
      this.$store.dispatch('user/register', {
        identification: this.identification,
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        gender: this.gender,
        birthday: this.birthday,
        tel: this.tel,
      })
        .then(response => {
          if(response.data.success === true){
            this.successMessage = "회원가입이 완료되었습니다."
            this.$router.push({name: 'login', params: {dataSuccessMessage: this.successMessage, appendToast: true}})
            // this.$bvToast.toast(this.successMessage, {
            //   title: `Variant ${variant || 'default'}`,
            //   variant: 'warning',
            //   solid: true
            // })
            // this.$toast.success({
            //   title:this.successMessage,
            //   message:'로그인 하세요!'
            // })
          } else if(response.data.success !== true){
            if(response.data.errorType === 'password_confirm'){
              alert(response.data.data.message.confirm_password)
              return false
            }
            console.log(response)
            alert(response.data.data.message)
          }
        })
        .catch(error => {
          console.log(error)
          // console.log(Object.values(error.response.data.errors))
          // this.serverErrors = Object.values(error.response.data.error)
        })
    },
    identificationCheck() {
      if(this.identification === '') {
        alert('아이디를 입력바랍니다.')
        return false
      } else if(this.identification.length < 3) {
        alert('아이디는 3글자 이상 입력바랍니다.')
        return false
      }
      this.$store.dispatch('user/idCheck', {
        identification: this.identification,
      })
        .then(response => {
          if(response.data) {
            this.idCertification = true
          }
          this.$bvToast.show('id-toast')
        })
        .catch(error => {
          console.error(error)
        })
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
    smsSend() {
      if(this.tel.length < 10 || this.tel.substr(0,1) !== '0'){
        alert('올바른 번호를 입력바랍니다.')
        return false
      }

      if(!this.smsCertification && !this.timeLimit){

        this.timeLimit = true


        this.$store.dispatch('user/certification', {
          tel: this.tel,
          type: 'register'
        })
          .then(response => {
            console.log('인증번호', response)
            this.smsNumber = response.data.success.certification_number
          })
          .catch(error => {
            console.error(error)
          })


        let time = 180; //기준시간
        let min = ''; //분
        let sec = ''; //초
        let x = setInterval(() => {
          //parselnt() : 정수를 반환
          min = parseInt(time/60)
          sec = time%60
          document.getElementById("time").innerHTML = min + "분" + sec + "초"
          time--
          if(time < 0) {
            clearInterval(x)
            document.getElementById("time").innerHTML = '시간초과'
            this.smsCertification = false
            this.timeLimit = false
          }
        }, 1000)
      } else {

      }
    }
  }
}

</script>

<style scoped>

</style>
