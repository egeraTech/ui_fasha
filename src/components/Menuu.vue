<template>
  <header>
    <nav>
      <div @click="goHome" class="brand">
          <img src="../assets/logo.png" loading="lazy" alt="..."/>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link @click="topFunction" class="link" to="/">Ikaze</router-link></li>
        <li><router-link @click="topFunction" class="link" >Twebwe</router-link></li>
        <li><router-link @click="topFunction" class="link" >Ibibazo</router-link></li>
        <li><router-link @click="topFunction" class="link" >Rondera</router-link></li>
        <li><router-link @click="topFunction" class="link" >Shigikira</router-link></li>
        <!-- <Button>Donate</Button> -->
      </ul>
      <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class="icon-menu" :class="{'icon-active': mobileNav}"></i>
      </div>
      <Transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link @click="toggleMobileNav" class="link" to="/">Ikaze</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" >Twebwe</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" >Ibibazo</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" >Rondera</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" >Shigikira</router-link></li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>


<script>
// import OurButton from '@/components/OurButton.vue'


export default {
name: 'our-navigation',
components: {
  // OurButton,
},
data() {
  return {
    mobile: true,
    mobileNav: true,
  };
},

methods: {
  checkScreen() {
    this.mobile = window.innerWidth <= 660;
    this.mobileNav = false
  },
  toggleMobileNav() {
    this.mobileNav = !this.mobileNav;
    this.topFunction()
  },
  goHome() {
    this.$router.push('/')
  },
  topFunction() {
    // go to Top of the page 
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
},
created() {
  this.checkScreen();
  window.addEventListener("resize", this.checkScreen);
},
};
</script>


<style >

header {
background-color: var(--white);
z-index: 99;
width: 100%;
position: fixed;
transition: 0.5s ease all;
box-shadow: 0px 2px 10px #aaa;
}
.navigation {
    display: flex; /*gatuma biryama */
    /* flex-direction: row; */
    padding: 16px 0;
    margin: 0 auto;
}

ul,
.link {
  font-weight: 500;
  color: var(--green);
  list-style: none;
  text-decoration: none;
  font-size: 20px;
}
li {
  padding: 10px;
  margin-left: 10px;
}
li .link:hover {
  color: var(--greenn);
}

nav a.router-link-exact-active {
  text-decoration: underline solid var(--greenn) 25%;
  text-underline-offset: 5px;
}

.brand {
  display: flex;
  align-items: center;
}
.brand img {
  width: 70px;
  height: 70px;
  padding: 15px;
}
nav {
  display: flex; /*gatuma biryama */
  flex-direction: row; /*gatuma biryama */
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
i {
  cursor: pointer;
  font-size: 22px;
  color: var(--green);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 70%;
  height: 100%;
  background-color: var(--white);
  top: 23px;
  left: 0;
  text-align: center;
  box-shadow: 0px 2px 10px #aaa;
}
.dropdown-nav Button {
  margin: 15px;
  margin-left: 28%;
  width: 50%;
}
.icon-active {
  transform: rotate(45deg);
  /* transform: skewY(20deg); */
  /* transform: scaleY(20deg); */
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.2s cubic-bezier(.71,.76,.02,.12)
}
.mobile-nav-enter-from {
  transform: translateX(-250px);
}
.mobile-nav-enter-to,
.mobile-nav-leave-to{
  transform: translateX(0);
}

</style>