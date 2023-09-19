<template>
    <Menu/>
    <section class="section1">
        <h2 class="title">Our Mission</h2>
        <div class="container">
            <div class="contain-txt">
                <p class="para">At FASHA, our mission is to empower individuals and communities to create positive change in the world through the art of compassionate giving. We believe that every act of generosity has the power to transform lives, and we are committed to providing a platform that makes it easy for individuals, nonprofits, and causes to connect and thrive. <br> <br>

Our fundraising website is built on three core principles: <br> <br>


1. Accessibility: We aim to democratize philanthropy by providing a user-friendly and inclusive platform that enables anyone, regardless of their background or financial means, to support the causes that matter most to them. <br> <br>

2. Transparency: We prioritize transparency in all our interactions, ensuring that donors have confidence in the impact of their contributions. We work closely with nonprofits to provide clear information about how funds are utilized and the progress made toward achieving their missions. <br> <br>

3. Community: We foster a sense of belonging and shared purpose among our users. Through storytelling, social engagement, and collaborative campaigns, we encourage individuals to come together to amplify their impact and inspire others to join the journey. <br> <br>

Join us in our mission to create a more compassionate and interconnected world. Together, we can turn small acts of kindness into lasting change, building a brighter future for all. Together, we can make a difference, one donation at a time.</p>
            </div>
            <div class="contain-img">
                <img src="../assets/images/mis.jpg" alt="image non disponible" class="img">
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        Menu,
        Footer
    }
}
</script>
<style scoped>
.section1{
    padding:10rem 3rem 4rem 10rem;
}
.title{
    font-size:2.5rem;
    color:#e89acc;
}
.container{
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.contain-txt{
    width:50rem;
    text-align: justify;
    padding:0 1rem;
    color:#7e7c7c
}
.contain-img{
    width:50rem;
}
.img{
    height:30rem;
    width:40rem;
}

/* Media query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
    .section1 {
        padding: 12rem 1rem; /* Adjust padding for smaller screens */
    }

    .title {
        font-size: 2rem; /* Decrease font size for smaller screens */
    }

    .container {
        flex-direction: column-reverse; /* Stack content vertically on smaller screens */
    }

    .contain-txt {
        width: 100%; /* Take up the full width on smaller screens */
        margin: 2rem 0; /* Add some margin for spacing */
    }
    .contain-img{
        width:100%;
    }

    .img {
        height: auto; /* Maintain image aspect ratio */
        width: 100%; /* Make the image fill the container width */
    }
}
</style>