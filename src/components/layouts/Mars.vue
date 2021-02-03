<template>
  <div class="">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <header class="header">
      <div class="container">

        <nav class="header__nav">

          <div class="header__logo">
            <a href="#">mars</a>
          </div>

          <ul class="header__navitems">


            <li class="header__list"><a href="">Home</a></li>
            <li class="header__list"><a href="">About</a></li>
            <li class="header__list"><a href="">Work</a></li>
            <li class="header__list"><a href="">Contact</a></li>

          </ul><!-- .header__navitems ends -->

          <div class="header__search">

            <i class="ri-search-line search-icon" id="search-form"></i>

            <form action="" class="form form--search" id="form--search">

              <div class="form--group">
                <input type="text" class="search" id="search" placeholder="Search...">
                <i class="ri-close-line"></i>
              </div>

            </form><!--  .form ends  -->

          </div><!--  .header__search ends  -->

          <div class="header__mobile">
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
              <span class="light">My name is Mars<span>.</span></span>
              <br>
              <span class="regular">I am*</span>
              <br>
              <span class="bold">Graphic designer</span>
            </h1><!-- .hero__heading ends -->

            <div class="hero__cta">

              <a href="" class="button">Contact me</a>
              <a href="" class="button button--outline">View my portfolio</a>

            </div><!-- hero__cta ends -->
            <div class="indicator">
              <img src="@/assets/images/indicator.png" alt="">
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
                <img src="@/assets/images/portfolio-1.jpg" alt="" class="card__image">
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
                <img src="@/assets/images/portfolio-2.jpg" alt="" class="card__image">
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
                <img src="@/assets/images/portfolio-3.jpg" alt="" class="card__image">
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
                <img src="@/assets/images/portfolio-4.jpg" alt="" class="card__image">
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
                <img src="@/assets/images/portfolio-7.jpg" alt="" class="card__image">
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
                <img src="@/assets/images/portfolio-5.jpg" alt="" class="card__image">
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
                <img src="@/assets/images/portfolio-6.jpg" alt="" class="card__image">
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
            <img src="@/assets/images/indicator.png" alt="">
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

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores error eum fugit impedit incidunt magnam porro quidem tempora totam!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eveniet ipsam ipsum iste nobis quia ratione ut vitae voluptatum. Consequatur incidunt ipsa labore minima nam nemo non odit optio possimus quae. A commodi doloribus earum esse ex harum nemo nulla placeat. Culpa deleniti quam rerum voluptas! Culpa cum dolore dolorum ea eaque enim expedita iusto numquam, quae quod vero voluptatum.</p>

              </div>

            </div><!-- .row ends -->

            <div class="indicator">
              <img src="@/assets/images/indicator.png" alt="">
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

            <form action="" class="form" id="contact-form">

              <div class="dflex">
                <div class="form__group">
                </div>

              </div><!-- .dflex ends -->


              <div class="form__group">
                <label for="fullName" class="form__label">Your name <span>*</span></label>
                <input type="text" id="fullName" class="form__input required"
                       data-vailidate-error="This field is required. Please enter your name"
                       placeholder="Enter your full name">
                <span class="error"></span>
              </div><!-- .form__group ends -->

              <div class="form__group">
                <label for="email" class="form__label">Your email address<span>*</span></label>
                <input type="email" id="email" class="form__input required"
                       data-vailidate-error="This field is required. Please enter your a valid email address"
                       placeholder="Enter your email address">
                <span class="error"></span>
              </div><!-- .form__group ends -->

              <div class="form__group">
                <label for="subject" class="form__label">Your subject<span>*</span></label>
                <input type="text" id="subject" class="form__input"
                       data-vailidate-error="This field is required. Please enter your subject"
                       placeholder="Enter your subject">
                <span class="error"></span>
              </div><!-- .form__group ends -->

              <div class="form__group">
                <label for="message" class="form__label">Your message<span>*</span></label>
                <textarea name="" id="message" cols="30" rows="10"
                          data-vailidate-error="This field is required. Please enter your message"
                          placeholder="Enter your message" class="form__input form__textarea required"></textarea>
                <span class="error"></span>
              </div><!-- .form__group ends -->

              <div class="submit">
                <button type="submit" class="button">Send message</button>
              </div>

            </form><!-- .form ends -->

            <div class="indicator">
              <img src="@/assets/images/indicator.png" alt="">
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
        name: "Mars"
    }
</script>

<style lang="scss" scoped>
//@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

  @import "@/assets/sass/app.scss";

</style>
