<template>
<Menu/>
    <section class="section1" >
        <h1 class="title">{{ Myfundraiser.title }} help me recovering my Jeep</h1>
        <div class="container">
            <div class="img-box">
                <img src="../assets/images/7.png" alt="image non disponible" class="img1">
                <h4 class="fund"> {{ Myfundraiser.user }}Munyeshaka is organizing this fundraising</h4>
                <hr>
                <p class="description">{{Myfundraiser.story}}</p>
                <hr>
                <h3 class="sub-title">Organizer</h3>
                <div class="sub-contain">
                    <div class="img-contain">
                        <img src="../assets/images/user.svg" alt="image non disponible" class="img2">
                    </div>
                    <div class="txt-contain">
                        <ul>
                            <li class="lii">{{ Myfundraiser.user }} Munyeshaka</li>
                            <li>Organizer</li>
                            <li>munyeshaka@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <hr>
                <p class="created">Created July, 29th, 2023 <span><i class="fa fa-tag" aria-hidden="true"></i> {{ Myfundraiser.category }} Events</span></p>
            </div>
            <div class="donate-box">
                <h4 class="goal">{{ Myfundraiser.ayakenewe }}10000 Goal</h4>

                <div class="btn">
                    <button class="btn-share">Share</button>
                    <button class="btn-done"><router-link to="/donate" class="btn">Donate Now</router-link></button>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
   name:'DetailsFundraiser',
   components:{
    Menu,
    Footer
   },
   data(){
    return{
        Myfundraiser:[]
    }
   },
   methods:{
    getDetailsMyfundraiser(){
    const ID = this.$route.params.id
    axios
    .get('/fasha/'+ ID + '/',this.getHeaders)
    .then((res)=>{
        this.Myfundraiser=res.data
        this.getUserConnected();
    })
   },
   getUserConnected(){
    const userID = this.Myfundraiser.id
    axios
    .get('/users/'+ userID + '/',this.getHeaders)
    .then((res)=>{
        this.Myfundraiser=res.data
    })
   }
   },
   
   mounted(){
    this.getDetailsMyfundraiser()
   }
}
</script>
<style scoped>
.section1{
    width:100%;
    padding:10rem 3rem 3rem 10rem;
      background:#f5f5f5;
}
.title{
    font-size:2rem;
    color:#e89acc;
    padding:0 0 1.5rem 0;
}
.container{
    display:flex;
    flex-direction:row;
}
.img-box{
    width:800px;
    margin:0 1rem 0 0;
}
.img1{
    height:30rem;
    width:49rem;
}
.img2{
    height:30px;
    width:30px;
}
.fund{
    padding:2rem 0 1rem 1rem;
}
hr{
    width:700px;
    margin:1rem;
}
.description{
    text-align: justify;
    padding:1rem;
    line-height:2rem;
    color:#7e7c7c;
}
.sub-title{
    padding:1rem;
}
.sub-contain{
    display:flex;
    flex-direction:row;
}
.img-contain{
    margin:0 1.5rem 0 1rem;
}
.txt-contain ul li{
    list-style-type: none;
    line-height:1.5rem;
    color:#333;
}
.lii{
    font-weight:bold;
    font-size:1.2rem;
    color:#333;
}
.created{
    padding:1rem;
    font-size:1.3rem;
    color:#7e7c7c;
}
.created span{
    margin:0 0 0 1.5rem;
}
.donate-box{
    width:400px;
    height:350px;
    box-shadow: 0px 0px 7px 0px #aaa;
    border-radius:5px;
    position:fixed;
    left:1050px;
    top:170px;
    z-index:1000;
    backdrop-filter: blur(4px);
}
.goal{
    color:#333;
    padding:1rem 0 1rem 1rem;
}
.btn{
    display:flex;
    flex-direction: column;
}
.btn-share{
    height:50px;
    border-radius:10px;
    margin:1rem;
    font-size:1.2rem;
    background:linear-gradient(#f9f9f9 0%, #e89acc 100%);
    color:#333;
    font-weight:bold;
    border:none;
    cursor: pointer;
}
.btn-done{
    height:50px;
    border-radius:10px;
    margin:0 1rem;
    font-size:1.2rem;
    background:#e89acc;
    color:#fff;
    border:1px solid #e89acc;
    cursor: pointer;
}
.btn-done .btn{
    padding:0.5rem 0;
    border-radius:inherit;
    text-decoration:none;
    font-size:1.2rem;
    background:#e89acc;
    color:#fff;
    cursor: pointer;
}
/* Adjustments for smaller screens */
@media (max-width: 768px) {
  .section1 {
    padding: 10rem 1rem;
    width:100%;
  }

  .container {
    flex-direction: column;
  }

  .img-box {
    width: 100%;
    margin: 0;
  }
hr{
    width:auto;
}
  .img1 {
    width: 100%;
    height: auto;
  }

  .donate-box {
    width: 100%;
    height:auto;
    position: relative;
    left: auto;
    top: auto;
    margin-top: 2rem;
  }

  .goal {
    padding: 1rem 1rem 0;
  }

  .btn {
    flex-direction: column;
    justify-content: center;
    margin:1rem 0;
  }

  .btn-share,
  .btn-done {
    width: 95%;
    margin: 0.5rem ;
  }
}
</style>