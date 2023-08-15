<template>
    <!-- <MenuLog/> -->
    <section class="section1">

    </section>
     <section class="section2">
        <h1 class="title-principal">How it works</h1>
        <div class="container">
            <div class="contain1">
                <h2 class="title-contain">Find Your solution</h2>
                <p class="txt-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas perspiciatis! Sunt, corporis nemo? Ducimus, quasi! Delectus iure dolorem aut architecto, a, vel tempore dolorum quia voluptates modi doloremque minus!</p>
            </div>
            <div class="contain2">
                <h2 class="step">Step</h2>
                <span>01</span>
                <img src="../assets/images/line.png" alt="image non disponible" class="line">
            </div>
            <div class="contain3">
                <img src="../assets/images/221.png" alt="image non disponible" class="img-contain">
            </div>
        </div>
    </section>
   <section class="section3">
        <div class="container">
            <div class="contain3">
                <img src="../assets/images/flag.svg" alt="image non disponible" class="img-contain">
            </div>
            
            <div class="contain2">
                <h2 class="step">Step</h2>
                <span>02</span>
                <img src="../assets/images/line1.png" alt="image non disponible" class="line">
            </div>
            <div class="contain1">
                <h2 class="title-contain">Start with the basics</h2>
                <p class="txt-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas perspiciatis! Sunt, corporis nemo? Ducimus, quasi! Delectus iure dolorem aut architecto, a, vel tempore dolorum quia voluptates modi doloremque minus!</p>
            </div>
        </div>
    </section>
    <section class="sectionsample">
        <div class="container">
            <div class="contain1">
                <h2 class="title-contain">Start with the basics</h2>
                <p class="txt-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas perspiciatis! Sunt, corporis nemo? Ducimus, quasi! Delectus iure dolorem aut architecto, a, vel tempore dolorum quia voluptates modi doloremque minus!</p>
            </div>
            <div class="contain2">
                <h2 class="step">Step</h2>
                <span>02</span>
                <img src="../assets/images/line1.png" alt="image non disponible" class="line">
            </div>
            <div class="contain3">
                <img src="../assets/images/flag.svg" alt="image non disponible" class="img-contain">
            </div>
        </div>
    </section>
    <section class="section4">
         <div class="container">
            <div class="contain1">
                <h2 class="title-contain">Tell your story</h2>
                <p class="txt-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas perspiciatis! Sunt, corporis nemo? Ducimus, quasi! Delectus iure dolorem aut architecto, a, vel tempore dolorum quia voluptates modi doloremque minus!</p>
            </div>
            <div class="contain2">
                <h2 class="step">Step</h2>
                <span>03</span>
                <img src="../assets/images/line.png" alt="image non disponible" class="line">
            </div>
            <div class="contain3">
                <img src="../assets/images/speech.svg" alt="image non disponible" class="img-contain">
            </div>
        </div>
    </section>
     <section class="section5">
        <div class="container">
            <div class="contain3">
                <img src="../assets/images/speak.svg" alt="image non disponible" class="img-contain">
            </div>
            
            <div class="contain2">
                <h2 class="step">Step</h2>
                <span>04</span>
                <img src="../assets/images/line3.png" alt="image non disponible" class="line">
            </div>
            <div class="contain1">
                <h2 class="title-contain">Share with everyone</h2>
                <p class="txt-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas perspiciatis! Sunt, corporis nemo? Ducimus, quasi! Delectus iure dolorem aut architecto, a, vel tempore dolorum quia voluptates modi doloremque minus!</p>
            </div>
        </div>
    </section> 
    <section class="section5sample">
        <div class="container">
            <div class="contain1">
                <h2 class="title-contain">Share with everyone</h2>
                <p class="txt-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas perspiciatis! Sunt, corporis nemo? Ducimus, quasi! Delectus iure dolorem aut architecto, a, vel tempore dolorum quia voluptates modi doloremque minus!</p>
            </div>
            
            <div class="contain2">
                <h2 class="step">Step</h2>
                <span>04</span>
                <img src="../assets/images/line3.png" alt="image non disponible" class="line">
            </div>
            
            <div class="contain3">
                <img src="../assets/images/speak.svg" alt="image non disponible" class="img-contain">
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import MenuLog from '@/components/MenuLog.vue'
export default {
  name:'Howitwork',
  components:{
    Menu,
    MenuLog,
    Footer
  }
}
</script>
<style scoped>
.section1{
    background-image:url("../assets/images/children.jpg");
    background-attachment: fixed;
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height:600px;
    width:100%;
}
/* ============================================================================== */
.section2{
    width:100%;
    padding:3rem 4rem 3rem 10rem;
}
.title-principal{
    text-align:center;
    font-size:2.5rem;
    text-transform: uppercase;
    color:#e89acc;
}
.container{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.contain1{
    width:500px;
}
.title-contain{
    text-align: center;
    color:#e89acc;
    padding:1rem 0;
}
.txt-contain{
    padding:0 1rem 1rem 1rem;
    color:#7e7c7c;
    text-align: justify;
    line-height: 1.8rem;
}
.contain2{
    width:100px;
}
.step{
    text-align: center;
    color:#7e7c7c;
    padding:2rem 0 0 0;
}
.contain2 span{
    display: block;
    margin-left:auto;
    margin-right:auto;
    font-size:4.5rem;
    color:#7e7c7c;
    font-weight:800;
}
.line{
    height:300px;
}
.contain3{
    width:500px;
}
.img-contain{
    width:200px;
    height:200px;
    clip-path: circle(50% at 50% 50%);
    background:#e89acc;
    padding:1rem;
}
/* ====================================================================== */
.section3{
    width:100%;
    padding:3rem 4rem 3rem 10rem;
}
.sectionsample{
    display:none;
}
/* ========================================================================== */
.section4{
    width:100%;
    padding:3rem 4rem 3rem 10rem;
}
/* ================================================================================ */
.section5{
    width:100%;
    padding:3rem 4rem 3rem 10rem;
}
.section5sample{
    display:none;
}
/* =============================MEDIA QUERRIE================================= */
@media (max-width: 768px){
    .section1{
        width:auto;
    }
    /* ===============================SECTION 2============================ */
        .section2 {
        padding: 1rem;
    }

    .title-principal {
        font-size: 1.5rem;
    }

    .container {
        flex-direction: column-reverse;
    }
    .line{
        display:none;
    }
   .contain1{
    width:auto;
   }
    .contain2 span {
        font-size: 2.5rem;
        text-align:center;
    }
    .contain3{
        display:block;
        margin:1rem auto;
    }
    .img-contain{
        margin-left:130px;
        padding:1rem;
    }
    /* ===================================SECTION 3========================== */
    .section3{
        display:none;
    }
    .sectionsample{
        display:block;
        width:auto;
    }
    /* ===================================SECTION 4======================== */
    .section4{
        padding:1rem;
    }
    /* ===============================SECTION 5======================= */
    .section5sample{
        display:block;
    }
    .section5{
        display: none;
    }
}
</style>