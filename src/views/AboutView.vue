<template>
  <Menu/>
  <section class="section1">

  </section>
  <section class="section2">
     <div class="container">
    <div class="content1">
      <h2 class="title-content">We are here to help the helpless</h2>
      <p class="txt-section">In a world often fraught with challenges and uncertainties, our unwavering mission stands clear: we are here to help the helpless. With hearts brimming with compassion and hands ready to extend support, we step forward to be a guiding light for those who find themselves in the shadows of adversity.</p> <br>
      <p class="txt-section">We stand united, driven by the profound belief that by helping the helpless, we not only elevate lives but also cultivate a spirit of compassion that ripples through communities and generations, creating a tapestry of support and care that binds us all together.</p>
    </div>
    <div class="content2">
      <img src="../assets/images/children.jpg" alt="Image non disponible" class="img1">
    </div>
  </div>
  </section>
 <section class="section3">
      <div class="container1">
    <div class="ttle-contain">
      <h5 class="h5-contain">Make your impact</h5>
      <h2 class="ttle-contain">Donate For ...</h2>
    </div>
    <div class="call">
      <div class="call-box">
        <img src="../assets/images/hands.svg" alt="image non disponible" class="img-box">
        <h3 class="call-title">Yourself</h3>
        <a href="#" class="go-action"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div class="call-box">
        <img src="../assets/images/friends.svg" alt="image non disponible" class="img-box">
        <h3 class="call-title">Friends & Family</h3>
        <a href="#" class="go-action"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div class="call-box">
        <img src="../assets/images/charity.svg" alt="image non disponible" class="img-box">
        <h3 class="call-title">Charity</h3>
        <a href="#" class="go-action"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
  </section>
   <section class="section4">
     <div class="donation">
    <div class="count">
      <h2 class="title-count">6000+</h2>
      <p class="p-count">Donation</p>
    </div>
    <div class="count">
      <h2 class="title-count">80+</h2>
      <p class="p-count">Fund Raised</p>
    </div>
    <div class="count">
      <h2 class="title-count">245+</h2>
      <p class="p-count">Volunteers</p>
    </div>
    <div class="count">
      <h2 class="title-count">605+</h2>
      <p class="p-count">Project</p>
    </div>
  </div>
  </section>
  <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
  name:"AboutView",
  components:{
    Menu,
    Footer
  }
}
</script>
<style scoped>
.section1{
  height:600px;
  background-image:url('../assets/images/jeune.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: grayscale(100%);
}
/* ============================================================================== */
.section2{
  width:100%;
  padding:3rem 4rem 3rem 10rem;
  background:#f9f9f9;
}
.container{
  display:flex;
  justify-content: space-between;
}
.content1{
  width:40rem;
  padding:2rem 0.5rem;
}
.title-content{
  font-size:2.5rem;
  color:#e89abc;
  padding:1.5rem 0;
  text-align: justify;
}
.txt-section{
  font-size:1.2rem;
  text-align: justify;
  color:#7e7c7c;
}

.content2{
  margin:0 10rem 0 5rem;
  padding:1rem;
  width:30rem;
}
.img1{
  height:500px;
  width:500px;
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}
/* ====================================================================== */
.section3{
  width:100%;
  padding:3rem 4rem 3rem 10rem;
}
.container1{
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.h5-contain{
  color:#7e7c7c;
  font-size:1.2rem;
}
.ttle-contain{
  font-size:2.5rem;
  font-weight:700;
  color:#e89abc;
}
.call{
  display:flex;
  align-items:center;
  justify-content: space-between;
 
}
.call-box{
  height:400px;
  width:280px;
  background:#f9f9f9;
  border-radius:5px;
   margin:0.5rem;
   border:none;
}
.call-box:hover{
  border:2px solid #e89abc;
  transition:1s;
}
.call-box i{
  display:flex;
  align-items:center;
  justify-content: center;
  padding:1rem 0;
}
.img-box{
  display:block;
  margin-left:auto;
  margin-right:auto;
  padding:1rem 0;
  height:150px;
  width:150px;
}
.call-title{
  text-align:center;
  font-size:1.4rem;
  padding:3rem 0;
  color:#7e7c7c;
}
.go-action{
  padding:1rem;
  text-decoration: none;
   display:flex;
  align-items:center;
  justify-content: center;
  
}
.go-action i{
  font-size:2rem;
  border:1px solid #7e7c7c;
  width:25%;
  border-radius:50%;
  background:#f9f9f9;
 color:#e89abc;
}
.go-action i:hover{
  background:#e89abc;
  color:#fff;
  transition:0.5s;
}
/* ===================================================================== */
.section4{
  width:100%;
  margin:3rem 0 3rem 0;
}
.donation{
  /* background:#e89abc; */
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:7rem 5rem 7rem 10rem;
  background-image: url("../assets/images/mon.jpg");
  background-size: 100%;
  background-position:bottom;
}
.title-count{
  font-size:2rem;
  font-weight:800;
  color:#fff;
}
.p-count{
  font-size:1rem;
  font-weight:600;
  color:#fff;
}

/* ==================================MEDIA QUERIE=================================== */

@media (max-width: 768px) {
  .section1{
  height:600px;
  width:auto;
  background-attachment: fixed;
  /* background-size: 100%; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* =========================SECTION 2================= */
  .section2 {
    padding: 3rem 2rem;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .content1,
  .content2 {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }

  .img1 {
    height: auto;
    width: 100%;
    clip-path: none;
  }
  /* ========================SECTION 3======================= */
  .section3 {
    padding: 3rem 2rem;
  }

  .container1 {
    flex-direction: column;
    align-items: center;
  }

  .call {
    flex-direction: column;
    align-items: center;
  }

  .call-box {
    width: 100%;
    padding:1rem 5rem;
    margin: 1rem 0;
    border-radius:5px;
box-shadow: 0px 0px 5px 0px #aaa;
  }
  .call-title {
    padding: 1.5rem 0;
  }
  /* ====================SECTION 4======================= */
  .section4 {
  width: 100%;
  margin: 3rem 0;
}

.donation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 2rem;
  background-image: url("../assets/images/mon.jpg");
  background-size: cover;
  background-position: center;
}

.count {
  flex: 0 0 calc(50% - 2rem);
  margin: 1rem;
  text-align: center;
}

.title-count {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
}

.p-count {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}

}
</style>
