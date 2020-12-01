<template>
  <div class="header-wrap">
    <header class="with-background" id="topnav" >
      <div id="logo-header" class="flex justify-center">

      </div>
      <div class="container" id="nav-wrap">
        <ul>
          <li class="category">
            <router-link :to="{ name: 'RestaurantList'}">매장 리스트</router-link>
            <router-link :to="{ name: 'RestaurantRegister'}">매장 등록</router-link>
            <router-link :to="{ name: 'MenuRegister'}">메뉴 등록</router-link>
          </li>
<!--          <li class="category">-->
<!--            <router-link :to="{ name: 'todo'}">할일</router-link>-->
<!--          </li>-->
<!--          <li class="category">-->
<!--            <router-link :to="{ name: 'shop'}">SHOP</router-link>-->
<!--          </li>-->
        </ul>
        <ul>

<!--          <li class="category" v-if="!loggedIn">-->
<!--            <router-link :to="{ name: 'login'}">로그인</router-link>-->
<!--          </li>-->
<!--          <li class="category" v-if="!loggedIn">-->
<!--            <router-link :to="{ name: 'register'}">회원가입</router-link>-->
<!--          </li>-->
<!--          <li v-if="loggedIn">-->
<!--            <router-link :to="{ name: 'admin'}">관리자</router-link>-->
<!--          </li>-->
<!--          <li class="category" id="my-shopping" v-if="loggedIn" @click="myShoppingBar">-->
<!--            <a href="#">나의쇼핑</a>-->
<!--            <ul id="pc-nav-sub">-->
<!--              <li><router-link :to="{ name: 'cart'}">카트</router-link></li>-->
<!--              <li><a href="#">내정보</a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="category" v-if="loggedIn">-->
<!--            <router-link :to="{ name: 'logout'}">로그아웃</router-link>-->
<!--          </li>-->
        </ul>
      </div>
    </header>
    <div id="mobile-nav">
      <header class="flex items-center">
        <div class="">
          <div class="menu-toggle" @click="navOpen()">
            <div class="hamburger"></div>
          </div>
        </div>
        <div class="landing-search-icon">
          <div class="cart grid-center" id="mobile-cart">
            <a href=""></a>
          </div>
        </div>
        <div class="landing-logo">

        </div>
        <div class="grid-center">
          <div class="grid-center">

            <a href="">
              <span class="cart-count"><span></span></span>
            </a>
          </div>
        </div>

        <nav class="site-nav">
          <ul>

            <li class="category" v-if="loggedIn">
              <router-link :to="{ name: 'myinfo'}">내 정보</router-link>
              <router-link :to="{ name: 'logout'}">로그아웃</router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        scroll : '',
        toggle : false,
        shoppingBar : false
      }
    },
    computed: {
      loggedIn() {
        return this.$store.getters['user/loggedIn']
        // return this.$store.getters['user/loggedIn']
      }
    },
    created () {
      // window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll (event) {
        var scrollTop = document.documentElement.scrollTop

        if (scrollTop > 49) {
          // $('#logo-header').fadeOut(400);
          document.querySelector('.with-background').style.transform  = 'translate3d(0px, -60px, 0px)';
        } else {
          // $('#logo-header').fadeIn(400);
          document.querySelector('.with-background').style.transform = 'translate3d(0px, 0px, 0px)';
        }
      },
      navOpen(){
        document.querySelector('.site-nav').classList.toggle('site-nav--open')
        if(this.toggle == false){
          this.toggle = true
          document.querySelector('.menu-toggle').classList = 'menu-toggle open';
        } else {
          document.querySelector('.menu-toggle').classList = 'menu-toggle';
          this.toggle = false
        }
      },
      myShoppingBar(){
        this.shoppingBar = !this.shoppingBar
        if(!this.shoppingBar){
          document.getElementById('my-shopping-angle-up').style.display = 'none';
          document.getElementById('my-shopping-angle-down').style.display = 'inline-block';
          document.getElementById('pc-nav-sub').style.maxHeight = '0px';
        } else {
          document.getElementById('my-shopping-angle-up').style.display = 'inline-block';
          document.getElementById('my-shopping-angle-down').style.display = 'none';
          document.getElementById('pc-nav-sub').style.maxHeight = '200px';
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  /*@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");*/
  /*@import url('/node_modules/cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css');*/

  #logo-header{
    display: flex;
    justify-content: center;
  }
  .header-wrap{
    padding-bottom:121px;
    @media (max-width: 625px) {
      padding-bottom: 0px;
    }
  }
  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem;
  }

  .left {
    display:flex;
    align-items: center;
  }
  .logo a {
    color:#000;
  }
  .logo h1 {
    font-size: 1.1rem;
  }
  .logo p {
    font-size:1rem;
  }
  .nav {
    display: flex;
    align-items:center;
  }
  .nav li {
    margin-right:1.2rem;
  }

  .nav li a {
    font-size:14px;
    font-weight:550;
  }
  .nav li:last-child a{
    display:block;
    background:#3cb46e;
    color:#fff;
    padding:0.5rem 0.6rem;
    border-radius: 5px;
    transition: filter 0.5s;
  }
  .nav li:last-child a:hover {
    filter: brightness(85%);
  }
  .nav-search-form {
    margin-left:1rem;
  }
  .nav-search-form input {
    padding:0.7rem;
    border-radius:20px;
    border:none;
    background-color:#eee;
    width:600px;
    font-size:0.9rem;
    color:#333;
  }
  .nav-search-form input:focus{
    background: #fff;
  }

  /* Category Nav */
  .category-nav {
    display:flex;
    padding-left:0.6rem;
    overflow: hidden;
  }
  .category-nav .category {
    padding: 0.8rem;
  }
  .category a {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;

  }
  #app {
    font-family: 'Helvetica', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 24px;
    height: 100vh;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }

  /* Hero */

  .hero {
    height:600px;
    background:url('/static/img/unsplash_search.jpg') no-repeat right center;
    background-size:100% 770px;
    width:100%;
    position:relative;
  }
  .hero-overlay {
    position:absolute;
    background:rgba(0,0,0,0.4);
    top:0;
    left:0;
    height:100%;
    width:100%;
  }
  .hero-container {
    max-width: 60%;
    margin: auto;
  }
  .hero-content {
    height:600px;
    display:flex;
    flex-direction:column;
    justify-content: center;
  }
  .hero-content h1 {
    font-size:4rem;
    color:#fff;
    z-index:2;
  }
  .hero-content p {
    color:#fff;
    z-index:2;
    margin: 1rem 0;
    line-height:1.5;
  }
  .hero-search-form {
    z-index: 2;
    margin: 1rem 0.6rem 0 0 ;
  }
  .hero-search-form input {
    width: 100%;
    padding: 1.2rem;
    border-radius: 5px;
    border:none;
    font-size:0.9rem;
    color:#000;
  }
  .trending-search-tags {
    z-index:2;
  }
  .trending-search-tags a {
    color:#999;
    transition: 0.5s color;
  }
  .trending-search-tags a:hover{
    color:#fff;
  }
  /* Media quries */
  @media(max-width:900px) {
    .nav-search-form {
      display:none;
    }
    .hero{
      background-size:200% 700px;
    }
    .hero-container {
      max-width:90%;
    }
    .category-nav {
      display:none;
    }
    .images {
      margin:0.5rem;
    }
  }
  /*.nav {*/
  /*  display: flex;*/
  /*  list-style: none;*/
  /*  padding: 15px 0;*/
  /*  margin: 0;*/
  /*  justify-content: flex-end;*/
  /*  background: #F5F8FA;*/
  /*  border-bottom: 1px solid lightgrey;*/
  /*  !*margin-bottom: 24px;*!*/
  /*}*/
  /*.nav a {*/
  /*  color: #636b6f;*/
  /*  padding: 0 25px;*/
  /*  font-size: 14px;*/
  /*  font-weight: 600;*/
  /*  letter-spacing: .1rem;*/
  /*  text-decoration: none;*/
  /*  text-transform: uppercase;*/
  /*}*/
  // Auth Pages
  label {
    display: block;
    margin-bottom: 4px;
  }
  .login-heading {
    margin-bottom: 16px;
  }
  .form-control {
    margin-bottom: 24px;
  }
  .mb-more {
    margin-bottom: 42px;
  }
  .login-form {
    max-width: 500px;
    margin: auto;
  }
  .login-input {
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
    outline: 0;
    border-radius: 3px;
    border: 1px solid lightgrey;
  }

  .server-error {
    margin-bottom: 12px;
    font-size: 16px;
    padding: 10px 16px;
    color: #a94442;
    background: #F3DEDE;
    border-radius: 4px;
  }
  .success-message {
    background-color: #dff0d8;
    color: #3c763d;
    margin-bottom: 12px;
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 4px;
  }



  // CSS Spinner
  .lds-ring-container {
    position: absolute;
    right: 50%;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    // margin: 6px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .server-error{
    margin-bottom:12px;
    font-size:16px;
    color:#a94442;
    padding:10px 16px;
    background:#F#DEDE;
    border-radius: 4px;
  }
  #nav-wrap{
    height:60px;
    display:flex;
    justify-content: space-between;
  }
  #nav-wrap li {
    height:100%;
    padding:0px 15px;
    align-items: center;
    display: grid;
    margin:0;
    text-align: center;
    float: left;
  }
  #nav-wrap li a {
    vertical-align: middle;
  }
  #nav-wrap ul {

  }
  #pc-nav-sub{
    position:relative;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    text-align: center;
    width:120px;
    background: azure;
    margin-top:17px;
  }

  #pc-nav-sub li {
    padding:5px 0;
    text-align: center;
    width:100%;
  }
  #pc-nav-sub li a {

    font-weight:300;
  }
  /*#my-shopping:hover .sub {*/
  /*  max-height:200px;*/
  /*}*/
  #my-shopping-angle-up{
    display:none;
  }
</style>
