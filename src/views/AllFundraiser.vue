<template>
<Menu/>
    <section class="section1">
        <h1 class="title">All Fundraiser</h1>
        <div class="grid-box">
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep wrangler</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                   <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img-fund" loading="lazy">
                <h3 class="ttle-fund">Help me restoring my Jeep</h3>
                <div class="action">
                    <h4 class="number-fund">1 Donation</h4>
                    <button class="btn-fund"><router-link class="route" to="/details">Donate Now</router-link></button>
                </div>
            </div>
            
        </div>
    </section>
    <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'AllFundraiser',
    components:{
        Menu,
        Footer
    }
}
</script>
<style scoped>
.section1{
    width:100%;
    padding:9rem 1.5rem 4rem 7.6rem;
    background:#f9f9f9;
}
.grid-box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
.box{
    border-radius:5px;
    width:350px;
    height:auto;
    box-shadow: 0px 0px 5px 0px #aaa;
    margin:1rem auto;
}
.title{
    font-size:2.5rem;
    color:#e89acc;
    margin-left:2.3rem;
    padding:0 0 2rem 0;
}
.img-fund{
    width:350px;
    height:260px;
    border-radius:inherit;
}
.ttle-fund{
    font-size:1.2rem;
    color:#e89acc;
    margin:1rem 0.3rem;
    font-weight:600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:300px;
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
.route{
    padding:0.5rem 1rem;
    text-decoration: none;
     color:#e89abc;
     font-size:1rem;
}
.route:hover{
     background:#e89abc;
  color:#fff;
  transition:0.5s;
}
/* Media Query for Mobile Screens */
@media (max-width: 768px) {
    .section1 {
        padding: 10rem 1.5rem 2rem 1.5rem;
        width:100%;
    }

    .grid-box {
        display: flex;
        flex-direction: column;
    }

    .box {
        width: 100%;
        max-width: 350px;
        margin: 1rem auto;
    }

    .title {
        margin-left: 1.5rem;

    }

    .img-fund {
        width: 100%;
        height: auto;
    }

    .ttle-fund {
        width: 100%;
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:300px;
    }
}

</style>