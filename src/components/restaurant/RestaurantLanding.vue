<template>

  <!-- MAIN STARTS -->
  <main>

    <!-- HERO SECTION START  -->
    <section class="hero">

      <div class="hero__content">

        <div class="container position-relative">

          <h1 class="hero__heading">

            <span class="bold">식단을 확인하세요!</span>
          </h1><!-- .hero__heading ends -->

          <div class="hero__cta">

            <router-link class="button" :to="{ name: 'RestaurantList'}">리스트</router-link>
            <router-link class="button button--outline" :to="{ name: 'MenuRegister'}">메뉴등록</router-link>

          </div><!-- hero__cta ends -->
          <div class="indicator">
          </div>
        </div><!-- .container ends -->

      </div><!--  .hero__content ends -->

    </section><!-- .hero ends -->
    <!-- HERO SECTION ENDS  -->

    <!-- CONTACT SECTION STARTS -->
    <section class="contact default-section-spacing">

      <div class="container position-relative">

        <div class="contact__content">

          <div class="section-heading">
            <h2>업체 문의</h2>
          </div><!-- .section-heading ends -->

          <form v-on:submit.prevent="onSubmit" class="form" id="contact-form">

            <div class="dflex">
              <div class="form__group">
                <label for="fullName" class="form__label">성함<span>*</span></label>
                <input type="text" id="fullName" value="" class="form__input required"
                       data-validate-error="This field is required. Please enter your name"
                       placeholder="Enter your full name">
                <span class="error">This is required</span>
              </div><!-- .form__group ends -->

              <div class="form__group">
                <label for="email" class="form__label">이메일<span>*</span></label>
                <input type="email" id="email" value="" class="form__input required"
                       data-validate-error="This field is required. Please enter your a valid email address"
                       placeholder="Enter your email address">
                <span class="error"></span>
              </div><!-- .form__group ends -->
            </div><!-- .dflex ends -->

            <div class="form__group">
              <label for="subject" class="form__label">제목<span>*</span></label>
              <input type="text" id="subject" value="" class="form__input required"
                     data-validate-error="This field is required. Please enter your subject"
                     placeholder="Enter your subject">
              <span class="error"></span>
            </div><!-- .form__group ends -->

            <div class="form__group">
              <label for="message" class="form__label">내용<span>*</span></label>
              <textarea id="message" cols="30" rows="10"
                        data-validate-error="This field is required. Please enter your message"
                        placeholder="Enter your message" class="form__input form__textarea required"></textarea>
              <span class="error"></span>
            </div><!-- .form__group ends -->

            <div class="submit">
              <button type="submit" class="button">보내기</button>
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


</template>

<script>
export default {
name: "RestaurantLanding"
}
</script>

<style scoped>
  h1 {
    font-size:3.5rem;
  }
  .section-heading {
    margin-bottom: 3.5rem;
  }
  button[type="submit"] {
    width: 100%;
    border: 3px;
    font-size: 1.7rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
</style>
