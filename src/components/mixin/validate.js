import Vue from "vue";

import { ValidationProvider,ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/ko.json';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message

  });
});

//validate 커스텀 종류
extend('certificateNumber',  value => {
  return true;
});

extend('lengthFalse', {
  validate(value,{}){
    if (value.length > 60) {
      return true;
    }
  },
  message: (fieldName, placeholders) => {
    switch (fieldName) {
      case '아이디':
        return '확인되지 않았습니다.';
      case '인증번호':
        return '인증번호가 일치하지 않습니다.';
    }
    // return `The ${fieldName} field must have at least ${placeholders.min} characters and ${placeholders.max} characters at most`;
  }
});

var myMixin = {
  created() {

  },
  methods: {

  }
}

// // mixin을 사용할 컴포넌트 정의
// var Component = Vue.extend({
//   mixins: [myMixin]
// })
//
// var component = new Component()

export default myMixin;
