<template>
    <div class="container">
        <div class="aside">
            <router-link to="/"><img src="@/assets/images/logoAyi.png" alt="image non disponible" class="img-logo"></router-link>
            <h2 class="title-pri">Let's begin your fundraising journey</h2>
            <h4 class="title-aside">We're here to guide you every step of the way</h4>
            
        </div>
        <div class="login-form">
              <div class="form">
                <!-- <form @submit.prevent="submitForm"> -->
                    <form>
                <div v-if="currentStep === 1" class="steps">
                    <h2 class="title-step">Step 1</h2>
                    <label>Your Location</label>
                    <select >
                        <option selected>--Your location--</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Ouganda">Ouganda</option>
                        <option value="Tanzanie">Tanzanie</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    <label>Categorie for your fundraising</label>
                    <select v-model="form.category">
                        <option selected>--Categorie--</option>
                        <option value="Event">Event</option>
                        <option value="Business">Business</option>
                        <option value="Competition">Competition</option>
                        <option value="Medical">Medical</option>
                        <option value="Travel">Travel</option>
                    </select>
                    <div class="btn-action">
                        <button @click="nextStep">Next</button>
                    </div>
                    
                </div>
                <div v-if="currentStep === 2" class="steps">
                    <h2 class="title-step">Step 2</h2>
                    <label>Who are you fundraising for?</label>
                    <select v-model="form.uwufashwa">
                        <option selected>--Donate for--</option>
                        <option value="myself">Yourself</option>
                        <option value="friend">Friend or Family</option>
                        <option value="charity">Charity</option>
                    </select>
                    <label>Your starting goal</label>
                    <input type="number" class="input" placeholder="Starting goal..." v-model="form.ayakenewe">
                    <div class="btn-action">
                        <button @click="prevStep">Previous</button>
                         <button @click="nextStep">Next</button>
                    </div>
                    
                </div>
                <div v-if="currentStep === 3" class="steps">
                    <h2 class="title-step">Step 3</h2>
                    <label>Add a picture</label>
                    <!-- <input type="file" class="input" v-model="form.photo"> -->
                    <input type="file" ref="fileInput" v-on:change="handleFileUpload">
                    <label>Title of your fundraising</label>
                    <input type="text" class="input" placeholder="Title..." v-model="form.title">
                    <label>Tell your Story</label>
                    <textarea  placeholder="Details..." class="text" v-model="form.story"></textarea>
                    <div class="btn-action">
                        <button @click="prevStep">Previous</button>
                        <button @click="submitForm">Complete Fundraising</button>
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return{
            currentStep:1,
            form:{
                category:'',
                uwufashwa:'',
                ayakenewe:null,
                photo:null,
                title:'',
                story:''
            }
        }
    },
    methods:{
        nextStep(){
            this.currentStep++;
        },
        prevStep(){
            this.currentStep--;
        }, 
       
    submitForm(){
        const isUserConnected=this.$store.state.user
        if(isUserConnected){
            axios
        .post('/fasha/',this.form)
        .then(res=>{
            console.log(res)
            alert('Ivyo mwakoze vyakunze!')
        })
        .catch((error)=>{
            console.log(error)
        })
        }else{
            this.$router.push('/signin')
        }
        
    }
        
    }

}
</script>
<style scoped>
.container{
    display:flex;
    align-items:center;
    flex-direction: row;
    padding:1rem 3rem 1rem 3rem;
    background:#f9f9f9;
}
.aside{
    width:500px;
    height:650px;
    background:#f9f9f9;
}
.img-logo{
    height:150px;
    width:150px;
    padding:2rem 0 3rem 4rem;
}
.title-aside{
    padding:2rem 0 3rem 4rem;
    font-weight:normal;
    font-size:1.5rem;
    color:#afadad;
}
.title-pri{
    padding:2rem 0 3rem 4rem;
    font-size:3rem;
    color:#7e7c7c;
    letter-spacing: 2px;
}
.login-form{
    width:900px;
    height:auto;
    background:#fff;
    border-radius:50px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}
.input{
    height:50px;
    padding:0.5rem 1rem;
    font-size:1rem;
    color:#7e7c7c;
    border-radius:5px;
    outline:none;
    border:1px solid #7e7c7c;
    margin:0 0 1rem 0;
}

/* ================================================================= */
.steps{
    display:flex;
    flex-direction:column;
}
.form{
    padding:6rem 3rem 3rem 4rem;
}
.title-step{
    padding:0 0 3rem 0;
    color:#afadad;
    font-size:3rem;
}
.steps label{
    font-size:1.2rem;
    color:#7e7c7c;
    padding:0 0 0.5rem 0;
}
.steps select{
    height:50px;
    border:1px solid #afadad;
    border-radius:5px;
    padding:0.5rem 1rem;
    font-size:1rem;
    color:#7e7c7c;
    margin:0 0 1rem 0;
    outline:none;
}
.btn-action button{
    padding:0.5rem 2rem;
    border-radius:5px;
    border:1px solid #e89acc;
    font-size:1.2rem;
    color:#f9f9f9;
    background:#e89acc;
    cursor:pointer;
    margin:1rem 1rem 0 0;
}
.text{
    height:200px;
    border-radius:5px;
    padding:0.5rem 1rem;
    font-size:1.2rem;
    outline:none;
    color:#7e7c7c;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #f9f9f9;
}
   .img-logo {
   height:150px;
    width:150px;
    padding:2rem 0 1rem 1rem;
  }

    .aside{
     width: 100%;
     margin:auto;
    height: auto;
}
.title-aside{
    font-size:1.5rem;
}
.title-pri {
    font-size: 2rem;
    color: #afadad;
    margin-bottom: 1rem;
}

   .login-form{
    width:100%;
    height:auto;
    margin-bottom:3rem;
    padding:1rem;
    background:#fff;
    border-radius:50px;
    box-shadow: 0px 0px 10px 0px #aaa;
}
}
</style>