<template>
 <Menu/>
 <section class="section1">
  <div class="content">
    <h1 class="title">Let's be Kind for <br><span>Everyone</span></h1>
  <p class="txt1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quos! Officiis veniam asperiores voluptatibus amet natus reprehenderit incidunt.</p>
  <button class="btn-donate" @click="Donate">DONATE NOW</button>
  </div>
  
 </section>
 <section class="section3">
  <div class="container">
    <div class="content1">
      <h2 class="title-content">We are here to help the helpless</h2>
      <p class="txt-section">In a world often fraught with challenges and uncertainties, our unwavering mission stands clear: we are here to help the helpless. With hearts brimming with compassion and hands ready to extend support, we step forward to be a guiding light for those who find themselves in the shadows of adversity.</p> <br>
      <p class="txt-section">We stand united, driven by the profound belief that by helping the helpless, we not only elevate lives but also cultivate a spirit of compassion that ripples through communities and generations, creating a tapestry of support and care that binds us all together.</p>
    </div>
    <div class="content2">
      <img src="../assets/images/children.jpg" alt="Image non disponible" class="img1" loading="lazy">
    </div>
  </div>
 </section>
  <section class="section2">
  <h2 class="title-section">We are in the mission to help the helpless</h2>
  <div class="boxes">
    <div class="box">
      <img src="../assets/images/221.png" alt="image non disponible" class="imgi" loading="lazy">
      <h3 class="title-box">Find a solution</h3>
      <p class="txt-box">Let's work together to find the solution that takes your fundraising efforts to new heights. Your cause deserves nothing less. </p>
    </div>
    <div class="box">
      <img src="../assets/images/flag.svg" alt="image non disponible" class="imgi">
      <h3 class="title-box">Start with the basics</h3>
      <p class="txt-box">Every journey begins with a single step, and every significant change starts with understanding and embracing the basics. </p>
    </div>
    <div class="box">
      <img src="../assets/images/speech.svg" alt="image non disponible" class="imgi">
      <h3 class="title-box">Tell your story</h3>
      <p class="txt-box">When you tell your story, you open a window into your world, allowing others to glimpse the challenges you've faced and the milestones you've achieved.</p>
    </div>
    <div class="box">
      <img src="../assets/images/speak.svg" alt="image non disponible" class="imgi">
      <h3 class="title-box">Share with everyone</h3>
      <p class="txt-box">Sharing is caring, and your support is invaluable in helping us reach our fundraising goal.</p>
    </div>
  </div>
 </section>
 <section class="section4">
  <h2 class="title01">Popular causes What you should know</h2>
  <div class="grid">
    <div class="grid-box">
      <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
      <h3 class="ttle-fund">Help me Restoring my Jeep</h3>
      <div class="action">
        <h4 class="number-fund">1 Donation</h4>
        <button class="btn-fund"><router-link class="route" :to="`/details`">Donate Now</router-link></button>
      </div>
    </div>
     <div class="grid-box">
       <img src="../assets/images/1.jpg" alt="image non disponible" class="img-fund" loading="lazy">
      <h3 class="ttle-fund">Attending school this year</h3>
      <div class="action">
        <h4 class="number-fund">21 Donation</h4>
        <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
    </div>
    </div>
     <div class="grid-box">
       <img src="../assets/images/funer.jpg" alt="image non disponible" class="img-fund" loading="lazy">
      <h3 class="ttle-fund">fundraising for a funeral</h3>
      <div class="action">
        <h4 class="number-fund">189 Donation</h4>
        <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
    </div>
    </div>
   </div>
   <button class="btn-more"><router-link to="/allfund" class="btn-route"> More </router-link></button>
 </section>
 <section class="section6">
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
 <section class="section5">
  <div class="container1">
    <div class="ttle-contain">
      <h5 class="h5-contain">Make your impact</h5>
      <h2 class="ttle-contain">Donate For ...</h2>
    </div>
    <div class="call">
      <div class="call-box">
        <img src="../assets/images/hands.svg" alt="image non disponible" class="img-box">
        <h3 class="call-title">Yourself</h3>
        <a href="/newfund" class="go-action"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div class="call-box">
        <img src="../assets/images/friends.svg" alt="image non disponible" class="img-box">
        <h3 class="call-title">Friends & Family</h3>
        <a href="/newfund" class="go-action"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div class="call-box">
        <img src="../assets/images/charity.svg" alt="image non disponible" class="img-box">
        <h3 class="call-title">Charity</h3>
        <a href="/newfund" class="go-action"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
 </section>
 <section class="section7">
  <div class="container-start">
    <div class="contain-start1">
      <h1 class="title-start">Ready to get started? Join thousands of others today.</h1>
      <div class="btn-div">
        <button class="btn-start" @click="Donate">Start Donation</button>
        <button class="btn-how" @click="Howitwork">How It Works</button>
      </div>
    </div>
    <div class="contain-start2">
      <img src="../assets/images/join.png" alt="image non disponible" class="img-contain">
    </div>
  </div>
 </section>
 <Footer/>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Menu,
    Footer
  },
  methods:{
    Donate(){
      this.$router.push('/allfund')
    },
    Howitwork(){
      this.$router.push('/howitwork')
    }
  }
}
</script>
<style scoped>
.section1{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  padding:16rem 3.5rem 5rem 10rem;
  background-image: url('../assets/images/cov.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

.title{
  font-size:3rem;
  letter-spacing: 3px;
  color:#f9f9f9;
}
.title span{
  color:#fff;
  background:linear-gradient(to right, #095fab 10%, #25abe5 50%, #be7b7b 68%);
  background-size:auto auto;
  background-clip:border-box;
  background-size:200% auto;
  color:#fff;
  background-clip:text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  display:inline-block;
}
@keyframes textclip{
  to{
    background-position:200% center;
  }
}
.txt1{
  width:30rem;
  margin:1rem 0rem;
  font-size:1.2rem;
  color:#f9f9f9;
}
.btn-donate{
  color:#fff;
  padding:1rem 2rem;
  border-radius:5px;
  border:1px solid #e89abc;
  font-size:1.5rem;
  background:#e89abc;
  cursor: pointer;
}
.btn-donate:hover{
  background:#f9f9f9;
  color:#e89abc;
  transition:0.5s;
}

/* =========================================================================== */
.section2{
  width:100%;
  padding:3rem 2.5rem 5rem 10rem;
  background:#f9f9f9;
}
.title-section{
  text-align:center;
  font-size:2.5rem;
  color:#e89abc;
}
.boxes{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.box{
  margin:2rem 1.5rem 0 0;
  border:1px solid #e89abc;
  border-radius:5px;
}
.imgi{
  width:110px;
  height:110px;
  display:block;
margin-left:auto;
margin-right:auto;
padding:0.5rem 0;
}
.box .title-box{
  font-size:1.3rem;
  text-align:center;
  padding:0.5rem 0;
  color:#e89abc;
}
.box .txt-box{
  text-align:justify;
  padding:0.5rem;
  color:#7e7c7c;
}
/* ==================================================================================== */
.section3{
  width:100%;
  padding:3rem 4rem 5rem 10rem;
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
  margin:0 3rem 0 5rem;
  padding:1rem;
  width:50rem;
  overflow:hidden;
  cursor:pointer;
}
.img1{
  transition:transform 0.5s;
  height:500px;
  width:500px;
 clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
.content2:hover .img1{
  transform:scale(1.1);
}
/* ================================================================================ */
.section4{
  width:100%;
  padding:3rem 4rem 5rem 10rem;
  background:#fff;
}
.title01{
  color:#e89abc;
  font-size:2rem;
}
.grid{
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin:3rem 0;
}
.grid-box{
  border-radius:5px;
  width:350px;
  height:auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
}
.img-fund{
  width:350px;
  height: 260px;
  border-radius:inherit;
}
.ttle-fund{
  text-align:center;
  font-size:1.4rem;
  color:#e89abc;
  margin:1rem 0;
  font-weight: 100;
}
.number-fund{
  color:#7e7c7c;
  padding:1rem 0;
}
.action{
  display:flex;
  justify-content: space-between;
  padding:0.5rem 1rem;
}
.btn-fund{
  padding:0.5rem 1rem;
  font-size:1rem;
  border:none;
  border-radius:5px;
  color:#e89abc;
  cursor:pointer;
  font-weight:600;
}
.btn-fund:hover{
  background:#e89abc;
  color:#fff;
  transition:0.5s;
}
.btn-more{
   padding:1rem 1rem;
  font-size:1rem;
  border:none;
  background:#e89abc;
  border-radius:5px;
  color:#fff;
  cursor:pointer;
  font-weight:600;
  display: block;
  margin:0 auto;
}
.btn-more:hover{
  background:#d1b7c2;
  color:#fff;
  transition:0.5s;
}
.btn-route{
  text-decoration: none;
  color:#fff;
  padding:1rem 2rem;
}
.route{
    padding:1rem 1.2rem;
    text-decoration: none;
     color:#e89abc;
     font-size:1rem;
}
.route:hover{
     background:#e89abc;
  color:#fff;
  transition:0.5s;
}
/* ============================================================================= */
.section5{
  width:100%;
   padding:3rem 4rem 5rem 10rem;
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
/* ================================================================================= */
.section6{
  width:100%;
}
.donation{
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
/* =============================================================================== */
.section7{
  width:100%;
  padding:4rem 4rem 4rem 10rem;
}
.container-start{
  display:flex;
  align-items:center;
  justify-content: space-between;
  background:#7e7c7c;
  padding:1rem;
  border-radius:10px;
}
.contain-start1{
  width:50%;
  padding:1rem;
}
.title-start{
  font-size:2.5rem;
  color:rgb(44, 44, 44);
}
.btn-div{
  margin-top:3rem;
}
.btn-start{
  padding:1rem 2rem;
  background:#e89abc;
  color:#fff;
  font-size:1.4rem;
  border:1px solid #e89abc;
  border-radius:5px;
  margin-right:1rem;
  cursor:pointer;
}
.btn-start:hover{
  color:#e89abc;
  background:#f9f9f9;
  transition:0.5s;
}
.btn-how{
   padding:1rem 2rem;
  color:#e89abc;
  font-size:1.4rem;
  border:none;
  border-radius:5px;
  cursor:pointer;
}
.contain-start2{
  width:50%;
  padding:1rem;
}
.contain-start2 i{
  font-size:400px;
}
.img-contain{
  height:400px;
  width:400px;
  filter:brightness(0.4);
}
/* ==================================MEDIA QUERRY====================================== */

/* ========================================================================== */

/* Add a media query for screens with a maximum width of 768px (typical for mobile devices) */
@media (max-width: 768px) {
  .section1{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 5rem 2rem; /* Adjusted padding for smaller screens */
  background-image: url('../assets/images/cov.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover; /* Changed background-size to cover */
  background-repeat: no-repeat;
  height:650px;
}
.content{
  text-align: justify;
}
.title {
  font-size: 2rem; /* Reduced font size for smaller screens */
}
.txt1 {
  width: 100%; /* Full width for text on smaller screens */
  margin: 1rem 0;
  font-size: 1rem; /* Reduced font size for smaller screens */
}

.btn-donate {
  padding: 0.8rem 1.5rem; /* Adjusted padding for smaller screens */
  font-size: 1.2rem; /* Reduced font size for smaller screens */
}
/* ============================================Section 2========================================== */
.section2 {
  width: 100%;
  padding: 3rem 2.5rem 5rem;
  background: #f9f9f9;
}

.title-section {
  text-align: center;
  font-size: 2.5rem;
  color: #e89abc;
}

.boxes {
  display: flex;
  flex-wrap: wrap; /* Allow boxes to wrap on smaller screens */
  justify-content: space-between;
  align-items: flex-start; /* Adjust alignment for smaller screens */
  gap: 2rem; /* Add some spacing between boxes */
}

.box {
  width: calc(50% - 1rem); /* Display two boxes per row */
  margin-bottom: 2rem;
  border: 1px solid #e89abc;
  border-radius: 5px;
  padding: 1.5rem; /* Increase padding for better spacing */
  box-sizing: border-box;
}

.imgi {
  width: 110px;
  height: 110px;
  display: block;
  margin: 0 auto 0.5rem; /* Adjust margin for better positioning */
}

.box .title-box {
  font-size: 1.3rem;
  text-align: center;
  padding: 0.5rem 0;
  color: #e89abc;
}

.box .txt-box {
  text-align: justify;
  color: #7e7c7c;
}
 .boxes {
    flex-direction: column; /* Display boxes in a single column */
    align-items: center; /* Center-align boxes */
  }

  .box {
    width: 100%; /* Boxes take up full width on smaller screens */
  }
/* ================================SECTION 3========================================= */
  .section3 {
    padding: 2rem;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .content1 {
    width: 100%;
    padding: 1rem 0.5rem;
  }

  .content2 {
    margin: 2rem 0;
    width: 100%;
    text-align: center;
  }

  .img1 {
    width: 100%;
    height: auto;
    clip-path: none;
  }
  /* ===================================================SECTION 4============================== */
   .section4 {
    padding: 2rem;
  }
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
}
  .grid-box {
    width: 100%;
  }

  .img-fund {
    width: 100%;
    height: auto;
  }

  .ttle-fund {
    font-size: 1.2rem;
  }
  /* ======================================SECTION 5=================================== */
  .section5 {
  padding: 3rem 2rem; /* Adjust padding for smaller screens */
}
.container1 {
  flex-direction: column; /* Stack items vertically on small screens */
  text-align: center; /* Center text content */
}

.call {
  flex-direction: column; /* Stack call-boxes vertically */
}

.call-box {
  height: auto; /* Let the height adjust based on content */
  width: 300px; /* Make call-boxes full width on small screens */
  margin: 1rem 0;
}

.img-box {
  margin: 0 auto; /* Center the image */
}

.call-title {
  padding: 1rem 0; /* Reduce padding for spacing */
}

.go-action {
  display: block; /* Take up full width on small screens */
  text-align: center;
}

.go-action i {
  font-size: 2rem;
  border: 1px solid #7e7c7c;
  width: 25%;
  border-radius: 50%;
  margin: 0 auto; /* Center the icon */
}
/* ========================================SECTION 6=============================== */
.section6 {
  width: 100%;
}
 .donation {
    padding: 3rem 1rem; /* Adjust padding for smaller screens */
  }
  .count {
  margin-bottom: 2rem; /* Add margin between count elements */
  text-align: center; /* Center the text */
}
.donation {
  display: flex;
  flex-direction: column; /* Change to column for mobile layout */
  align-items: center;
  padding: 5rem 2rem; /* Adjust padding for mobile layout */
  background-image: url("../assets/images/mon.jpg");
  background-size: cover; /* Use cover to ensure the image covers the entire background */
  background-position: center bottom; /* Adjust background position */
  background-attachment: fixed;
}
/* ===============================SECTION 7==================================== */
.section7 {
  padding: 2rem 1rem; /* Adjust the padding for smaller screens */
}

.container-start {
  display: flex;
  flex-direction: column; /* Stack the elements vertically */
  background: #7e7c7c;
  padding: 1rem;
  border-radius: 10px;
}

.contain-start1,
.contain-start2 {
  padding: 1rem;
  width:320px;
}

.title-start {
  font-size: 1.8rem; /* Adjust font size for smaller screens */
  margin-bottom: 1rem; /* Add some space below the title */
}

.btn-div {
  margin-top: 1.5rem; /* Reduce the top margin */
  display: flex;
  flex-direction: column; /* Stack the buttons vertically */
}

.btn-start,
.btn-how {
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 1.2rem; /* Adjust font size for smaller screens */
  border-radius: 5px;
  cursor: pointer;
}

.img-contain {
  max-width: 100%; /* Make sure the image doesn't overflow */
  height: auto; /* Maintain aspect ratio */
}
}
</style>
