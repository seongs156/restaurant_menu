<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <header class="header">
      <div class="container">

        <nav class="header__nav">

          <div class="header__logo">
            <router-link :to="{ path: '/'}">Menu</router-link>
          </div>

          <ul class="header__navitems">
            <li class="header__list">
              <router-link :to="{ name: 'RestaurantList'}">매장 리스트</router-link>
            </li>
            <li class="header__list">
              <router-link :to="{ name: 'restaurantRegister'}">매장 등록</router-link>
            </li>
            <li class="header__list">
              <router-link :to="{ name: 'MenuRegister'}">메뉴 등록</router-link>
            </li>
            <li class="header__list"></li>

          </ul><!-- .header__navitems ends -->

          <div class="header__search">

            <i @click="searchShow()" class="ri-search-line search-icon" id="search-form"></i>

            <form action="" class="form form--search" id="form--search">

              <div class="form__group">
                <input type="text" class="search" id="search" placeholder="Search...">
                <i @click="searchClose()" class="ri-close-line" id="close-search"></i>
              </div>

            </form><!--  .form ends  -->

          </div><!--  .header__search ends  -->

          <div class="header__mobile" @click="menuShow()">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div> <!-- .header__mobile ends -->
        </nav><!-- .header__nav ends -->

      </div>
    </header><!-- header ends -->
    <!-- SITE HEADER ENDS HERE-->

    <!-- FOOTER ENDS -->
  </div>

</template>

<script>
  export default {
    name: "Mars",
    data() {
      return {
        fullName: null,
        email: null,
        subject: null,
        message: null,
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      // Opening menu
      menuShow() {
        let menu = document.querySelector('.header__navitems');
        menu.classList.toggle('is-showing');
      },
      //opening search Form
      searchShow() {
        let searchForm = document.querySelector('#form--search');
        searchForm.classList.add('show-search');
      },

      searchClose() {
        let searchForm = document.querySelector('#form--search');
        searchForm.classList.remove('show-search');

      },
      handleScroll(event) {
        let scrolled = window.scrollY;
        let header = document.querySelector('.header');
        if (scrolled > 50) {
          header.classList.add('is-fixed');
        } else {
          header.classList.remove('is-fixed');
        }
        // Any code to be executed when the window is scrolled
      },
      onSubmit() {
        let requiredFields = document.querySelectorAll('.form .required');

        requiredFields.forEach((el, index) => {
          let validationError = requiredFields[index].getAttribute('data-validate-error');
          let errorHolder = requiredFields[index].nextElementSibling;
          let inputValue = requiredFields[index].value;

          if (inputValue === '') {
            errorHolder.innerText = validationError;
            errorHolder.style.display = 'block';
            requiredFields[index].classList.add('is-invalid');
          } else {
            errorHolder.innerText = '';
            errorHolder.style.display = '';
            requiredFields[index].classList.remove('is-invalid');

            inputValue = '';
          }
        });
      }
    }
  }

</script>

<style lang="scss">
  @import "@/assets/sass/restaurant.scss";

  body {
    margin: 0 !important;
  }

</style>
