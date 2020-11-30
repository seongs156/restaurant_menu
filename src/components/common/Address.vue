<template>
  <div class="">
    <vue-daum-postcode @complete="addressReg($event)" class="daum_postcode"/>
    <div class="address-box-wrap">

      <label for="name">연락처<span class="validate-required">*</span></label>
      <select size="sm" placeholder="50자 이내로 입력하세요." class="form-control tel-width">
        <option value="" v-for="(number,index) in telNumbers">{{number}}</option>
      </select>
      <span class="tel-dash"> - </span>
      <input type="number" class="form-control d-inline tel-width"
             oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
             maxlength = "4" min="1" max="9999">
      <span class="tel-dash"> - </span>
      <input type="number" class="form-control d-inline tel-width"
             oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
             maxlength = "4" min="1" max="9999">


      <label for="name" class=" w-100">주소<span class="validate-required">*</span></label>

      <input type="text" id="zipcode" class="form-control zip-code d-inline"><button type="button" @click="openPopup" class="btn btn-dark addr-btn">우편번호</button>
      <div class="mt-10">
        <div class="addr-column">
          <input type="text" class="form-control d-inline" id="address1"><input type="text" class="form-control d-inline">
        </div>
      </div>

    </div>
  </div>

</template>
<script>
  import myMixin from '@/components/mixin/telSelect'
  export default {
    mixins: [myMixin],
    name: "Address",
    data() {
      return {
        telNumbers:this.telNumber
      }
    },
    methods: {
      maxLengthCheck(object) {
        if (object.value.length > object.maxLength) {
          object.value = object.value.slice(0, object.maxLength);
        }
      },
      addressReg() {
        this.zonecode = document.getElementById('zipcode').value
        this.roadAddress = document.getElementById('address1').value
        this.jibunAddress = document.getElementById('address3').value
        this.bname = document.getElementById('bname').value
        this.sido = document.getElementById('sido').value
        this.sigungu = document.getElementById('sigungu').value
        this.roadname = document.getElementById('roadname').value
        this.buildingName = document.getElementById('buildingName').value
        this.roadAddress = document.getElementById('roadAddress').value
      },
      openPopup() {
        new daum.Postcode({
          oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 우편번호와 주소 정보를 해당 필드에 넣고, 커서를 상세주소 필드로 이동한다.

            // document.getElementById('zipcode6').value = data.postcode;
            document.getElementById('zipcode').value = data.zonecode
            document.getElementById('address1').value = data.roadAddress
            // document.getElementById('address3').value = data.jibunAddress
            // document.getElementById('bname').value = data.bname
            // document.getElementById('sido').value = data.sido
            // document.getElementById('sigungu').value = data.sigungu
            // document.getElementById('roadname').value = data.roadname
            // document.getElementById('buildingName').value = data.buildingName
            // document.getElementById('roadAddress').value = data.roadAddress
            // document.getElementById('address2').focus();
          }
        }).open()
      },
      register(){
        this.$store.dispatch('registerRestaurant', {
          zonecode: this.zonecode,
          bname: this.bname,
          sido: this.sido,
          sigungu: this.sigungu,
          buildingName: this.buildingName,
          jibunAddress: this.jibunAddress,
          jibunAddressEnglish: this.jibunAddressEnglish,
          roadAddress: this.roadAddress,
          roadAddressEnglish: this.roadAddressEnglish,
          roadname: this.roadname,
          detailAddress: this.detailAddress,
          name: this.name,
          tel: this.tel,
          open_time: this.open_time,
          close_time: this.close_time,
          break_start_time: this.break_start_time,
          break_end_time: this.break_end_time,
        })
          .then(response => {
            console.log(response);
            this.successMessage = '등록이 완료되었습니다.'
          })
          .catch(error => {
            this.serverErrors = Object.values(error.response.data.error)
          })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/app.scss";

  label {

  }
  * {
  }

  input{
    border: 1px solid  #e5e5e5;

  }

  .daum_postcode{
    display:none;
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
</style>
