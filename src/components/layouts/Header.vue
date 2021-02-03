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
              <router-link :to="{ name: 'RestaurantRegister'}">매장 등록</router-link>
            </li>
            <li class="header__list">
              <router-link :to="{ name: 'MenuRegister'}">메뉴 등록</router-link>
            </li>
            <li class="header__list"></li>

          </ul><!-- .header__navitems ends -->

<!--          <div class="header__search">-->

<!--            <i @click="searchShow()" class="ri-search-line search-icon" id="search-form"></i>-->

<!--            <form action="" class="form form&#45;&#45;search" id="form&#45;&#45;search">-->

<!--              <div class="form__group">-->
<!--                <input type="text" class="search" id="search" placeholder="Search...">-->
<!--                <i @click="searchClose()" class="ri-close-line" id="close-search"></i>-->
<!--              </div>-->

<!--            </form>&lt;!&ndash;  .form ends  &ndash;&gt;-->

<!--          </div>&lt;!&ndash;  .header__search ends  &ndash;&gt;-->

          <div class="header__mobile" @click="menuShow()">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div> <!-- .header__mobile ends -->
        </nav><!-- .header__nav ends -->

      </div>
    </header><!-- header ends -->
    <!-- SITE HEADER ENDS HERE-->
    <!-- MAIN STARTS -->
    <main>

      <!-- HERO SECTION START  -->
      <section class="hero">

        <div class="hero__content">

          <div class="container position-relative">

            <h1 class="hero__heading">
<!--              <span class="light">Guro<span>.</span></span>-->
<!--              <br>-->
<!--              <span class="regular">Restaurant Menu</span>-->
<!--              <br>-->
              <span class="bold">식단을 확인하세요!</span>
            </h1><!-- .hero__heading ends -->

            <div class="hero__cta">

              <router-link class="button" :to="{ name: 'RestaurantList'}">리스트</router-link>
              <router-link class="button button--outline" :to="{ name: 'MenuRegister'}">메뉴등록</router-link>
<!--              <a href="" class="button button&#45;&#45;outline">메뉴등록</a>-->

            </div><!-- hero__cta ends -->
            <div class="indicator">
<!--              <img src="/static/images/mars/indicator.png" alt="">-->
            </div>
          </div><!-- .container ends -->

        </div><!--  .hero__content ends -->

      </section><!-- .hero ends -->
      <!-- HERO SECTION ENDS  -->

      <!-- PORTFOLIO SECTION STARTS-->
      <section class="portfolio">

        <div class="portfolio__content">
          <div class="row">

            <div class="flex-3-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-1.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->

            </div><!-- .flex-* ends-->

            <div class="flex-3-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-2.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->

            </div><!-- .flex-* ends-->

            <div class="flex-3-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-3.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->

            </div><!-- .flex-* ends-->

            <div class="flex-3-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-4.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->

            </div><!-- .flex-* ends-->

          </div><!-- .row ends -->

          <div class="row">
            <div class="flex-6-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-7.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->
            </div><!-- .flex-* ends-->

            <div class="flex-3-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-5.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->
            </div><!-- .flex-* ends-->

            <div class="flex-3-of-12">

              <div class="card">
                <img src="/static/images/mars/portfolio-6.jpg" alt="" class="card__image">
                <div class="card__overlay">

                  <div class="portfolio__info">
                    <h3>Project name</h3>
                    <a href="" class="button">View more</a>
                  </div>

                </div><!-- .card__overlay ends -->
              </div><!-- .card ends -->
            </div><!-- .flex-* ends-->

          </div><!-- .row ends -->

          <div class="indicator">
            <img src="/static/images/mars/indicator.png" alt="">
          </div>

        </div><!--  .portfolio__content ends -->

      </section><!-- .portfolio ends -->
      <!-- PORTFOLIO SECTION ENDS-->

      <!-- ABOUT SECTION STARTS -->
      <section class="about default-section-spacing">

        <div class="about__content">

          <div class="container position-relative">

            <div class="section-heading">
              <h2>About me</h2>
            </div>

            <div class="row">

              <div class="flex-6-of-12">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores error eum fugit impedit
                  incidunt magnam porro quidem tempora totam!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eveniet ipsam ipsum iste nobis
                  quia ratione ut vitae voluptatum. Consequatur incidunt ipsa labore minima nam nemo non odit optio
                  possimus quae. A commodi doloribus earum esse ex harum nemo nulla placeat. Culpa deleniti quam rerum
                  voluptas! Culpa cum dolore dolorum ea eaque enim expedita iusto numquam, quae quod vero
                  voluptatum.</p>

              </div>

            </div><!-- .row ends -->

            <div class="indicator">
              <img src="/static/images/mars/indicator.png" alt="">
            </div>

          </div><!-- .container ends -->

        </div><!-- .about__content ends -->

      </section><!-- .about ends-->
      <!-- ABOUT SECTION ENDS -->

      <!-- CONTACT SECTION STARTS -->
      <section class="contact default-section-spacing">

        <div class="container position-relative">

          <div class="contact__content">

            <div class="section-heading">
              <h2>Contact me</h2>
            </div><!-- .section-heading ends -->

            <form v-on:submit.prevent="onSubmit" class="form" id="contact-form">

              <div class="dflex">
                <div class="form__group">
                  <label for="fullName" class="form__label">Your name <span>*</span></label>
                  <input type="text" id="fullName" value="" class="form__input required"
                         data-validate-error="This field is required. Please enter your name"
                         placeholder="Enter your full name">
                  <span class="error">This is required</span>
                </div><!-- .form__group ends -->

                <div class="form__group">
                  <label for="email" class="form__label">Your email address<span>*</span></label>
                  <input type="email" id="email" value="" class="form__input required"
                         data-validate-error="This field is required. Please enter your a valid email address"
                         placeholder="Enter your email address">
                  <span class="error"></span>
                </div><!-- .form__group ends -->
              </div><!-- .dflex ends -->

              <div class="form__group">
                <label for="subject" class="form__label">Your subject<span>*</span></label>
                <input type="text" id="subject" value="" class="form__input required"
                       data-validate-error="This field is required. Please enter your subject"
                       placeholder="Enter your subject">
                <span class="error"></span>
              </div><!-- .form__group ends -->

              <div class="form__group">
                <label for="message" class="form__label">Your message<span>*</span></label>
                <textarea id="message" cols="30" rows="10"
                          data-validate-error="This field is required. Please enter your message"
                          placeholder="Enter your message" class="form__input form__textarea required"></textarea>
                <span class="error"></span>
              </div><!-- .form__group ends -->

              <div class="submit">
                <button type="submit" class="button">Send message</button>
              </div>

            </form><!-- .form ends -->

            <div class="indicator">
              <img src="/static/images/mars/indicator.png" alt="">
            </div>

          </div><!-- .contact__content ends -->

        </div><!-- .container ends -->

      </section><!-- .contact ends -->
      <!-- CONTACT SECTION ENDS -->

    </main><!-- main ends -->
    <!-- MAIN ENDS -->

    <!-- FOOTER STARTS -->
    <footer class="footer">

      <div class="container">

        <div class="dflex">

          <div class="footer__copyright">&copy; 2020 - All Rights Reserved</div>

          <div class="footer__social">
            <a href=""><i class="ri-facebook-line"></i></a>
            <a href=""><i class="ri-twitter-line"></i></a>
            <a href=""><i class="ri-dribbble-line"></i></a>
            <a href=""><i class="ri-linkedin-line"></i></a>
          </div>
        </div><!-- .dflex ends-->

      </div><!-- .container ends -->

    </footer>
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
