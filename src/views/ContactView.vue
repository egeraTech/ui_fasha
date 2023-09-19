<template>
<Menu/>
<section class="section1">
    <h2 class="title">Contact us</h2>
    <div class="container">
        <div class="contain-item">
            <form>
                <label>Name</label>
                <input type="text">
                <label>Email</label>
                <input type="email">
                <label>Message</label>
                <textarea name="" id="" cols="20" rows="10"></textarea>
                <button>Contact us</button>
            </form>
        </div>
        <div class="contain-list">
            <ul class="ule">
                <li class="link"><img src="../assets/images/address-svgrepo-com.svg" class="svg" alt="image non disponible">Kigobe Sud, Bujumbura</li>
                <li class="link"><span><img src="../assets/images/phone.svg" class="svg" alt="image non disponible"></span>+257 69 00 97 12</li>
                <li class="link"><span><img src="../assets/images/phone.svg" class="svg" alt="image non disponible"></span>+257 76 54 78 30</li>
                <li class="link"><span><img src="../assets/images/email-9-svgrepo-com.svg" class="svg" alt="image non disponible"></span>info@egeratech.com</li>
            </ul>
        </div>
    </div>
</section>
    <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        Menu,
        Footer
    },
}
</script>
<style scoped>
.section1{
    padding:7rem 4rem 3rem 10rem;
}
.title{
    color:#e89acc;
    font-size:2.5rem;
}
.container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:3rem 1rem;
}
.contain-item{
    width:40rem;
    height:auto;
}
form{
    display:flex;
    flex-direction:column;
}
label{
    margin:1.5rem 0 0.3rem 0;
    color:#e89acc;
    font-weight:bold;
}
input{
    height:2.5rem;
    outline:none;
   font-size:1.2rem;
   color:#7e7c7c;
   border:1px solid #7e7c7c;
   border-radius:5px;
}
textarea{
    border:1px solid #7e7c7c;
    border-radius:5px;
    outline:none;
    font-size:1.2rem;
}
button{
   margin:1.5rem 0 0.3rem 0;
   height:2.5rem;
   font-size:1.3rem;
   font-weight:bold;
   color:#fff;
   background:#e89acc;
   border:1px solid #e89acc;
   border-radius:5px;
   cursor: pointer;
}
button:hover{
    background:#f9f9f9;
    color:#e89acc;
    transition:0.5s;
    cursor: pointer;
}
.contain-list{
    width:35rem;
    height:auto;
}
.ule{
    padding:1rem;
    list-style: none;
}
.link{
    margin-top:1.5rem;
    font-size:1.8rem;
    color:#7e7c7c;
}
.svg{
    height:30px;
    width:30px;
    margin-right:1rem;
}
@media (max-width: 768px) {
    .section1 {
        padding: 10rem 1rem;
    }
    
    .container {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .contain-item {
        width: 100%;
    }
    
    .contain-list {
        width: 100%;
    }
    
    .link {
        font-size: 1.5rem;
    }
}
</style>