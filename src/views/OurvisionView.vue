<template>
    <Menu/>
    <section class="section1">
        <h2 class="title">Our Vision</h2>
        <div class="container">
            <div class="contain-img">
                <img src="../assets/images/vis.svg" alt="image non disponible" class="img1">
            </div>
            <div class="contain-txt">
                <p class="para">
                     Our vision for a fundraising website is to create a dynamic and inclusive platform that empowers individuals, nonprofits, and communities to rally behind their passions and causes. We envision a digital space where the power of collective giving knows no bounds, and where compassion and generosity thrive. <br><br>

Our website will serve as a hub for connecting people with meaningful projects and charitable organizations, fostering a sense of purpose and community. We strive to make fundraising accessible to everyone, regardless of their financial capacity, by providing various fundraising options, from crowdfunding for personal needs to supporting global humanitarian initiatives. <br><br>

Innovation will be at the core of our vision, as we harness the latest technology and data-driven insights to enhance the fundraising experience. We aim to leverage artificial intelligence to match donors with causes they are passionate about and to help nonprofits optimize their campaigns.<br><br>

Transparency and accountability will be our guiding principles. Donors will have real-time visibility into how their contributions are making an impact, fostering trust and confidence in the giving process.<br><br>

Ultimately, our fundraising website will be a beacon of hope, a catalyst for positive change, and a testament to the collective power of individuals and communities coming together to create a better world. Together, we can turn dreams into reality and transform lives for the better.
                </p>
               
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Menu,Footer
    }
}
</script>
<style scoped>
.section1{
    padding:10rem 3rem 4rem 10rem;
}
.title{
    color:#e89acc;
    font-size:2.5rem;
}
.container{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.contain-img .img1{
    height:auto;
    width:40rem;
}
.contain-txt .para{
    text-align: justify;
    color:#7e7c7c;
    padding:0 1rem;
}
@media (max-width: 768px) {
    .section1 {
        padding: 10rem 1rem;
    }

    .container {
        flex-direction: column;
        text-align: center;
    }

    .contain-img .img1 {
        width: 80%;
    }

    .contain-txt .para {
        padding: 0 0.5rem;
    }
}
</style>