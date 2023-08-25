<template>
<MenuLog/>
<section class="section1">
    <div class="form-container">
        <div class="img-box">
            <img src="../assets/images/7.png" alt="image non disponible" loading="lazy" class="img-donate">
            <h4 class="title">You're supporting <span>Education Fund</span></h4>
        </div>
        <label class="label">Enter your donation</label>
        <input type="number" class="input1" v-model="amahera" placeholder="$00...">
        <!-- <label class="label">Payment Method</label>
        <input type="radio" class="radio-input"> Lumicash 
        <input type="radio" class="radio-input"> Ecocash 
        <input type="radio" class="radio-input"> iHela  -->
        <fieldset>
    <legend>Your Payment method:</legend>
    <label for="Lumicash">
      <input type="radio" id="lumicash" name="contact" value="lumicash">
      Lumicash
    </label>
    <label for="Ecocash">
      <input type="radio" id="ecocash" name="contact" value="ecocash">
      Ecocash
    </label>
    <label for="iHela">
      <input type="radio" id="ihela" name="contact" value="ihela">
      iHela
    </label>
  </fieldset>
        <label class="label">Your donation</label>
        <p class="donation">Your donation is {{amahera}} fbu</p>
        <button class="btn-pay">Pay</button>
    </div>
</section>
</template>
<script>
import MenuLog from '@/components/MenuLog.vue'
export default {
    name:'PayingView',
    data(){
        return{
            amahera:''
        }
    },
    components:{
        MenuLog
    }
}
</script>
<style scoped>
.section1{
    width:100%;
    padding:8rem 3rem 3rem 10rem;
    background:#f9f9f9;
}
.form-container{
    margin:3rem 20rem;
    background:#fff;
    border:1px solid #7e7c7c;
    box-shadow:0px 0px 5px 0px #aaa;
    padding:4rem;
    border-radius:3rem;
    display:flex;
    flex-direction:column;
}
.img-box{
    display:flex;
    flex-direction:row;
}
.img-donate{
    width:200px;
    height:100px;
}
.title{
    color:#7e7c7c;
    margin:0 0 0 2.3rem;
    text-align:justify;
}
.title span{
    color:#333;
    font-size:1.2rem;
}
.label{
    color:#333;
    font-size:1.3rem;
    margin:1.5rem 0 0.5rem 0;
    font-weight:bold;
}
.input1{
    width:100%;
    height:50px;
    padding:1rem;
    font-size:1.2rem;
    outline:none;
    color:#333;
    font-weight:bold;
    border:1px solid #e89acc;
    border-radius:10px;
}
fieldset{
    margin:1.5rem 0 0.5rem 0;
    border:1px solid #e89acc;
    border-radius:10px;
    padding:1rem;
}
legend{
    color:#333;
    font-weight:bold;
    font-size:1.3rem;
}
input[type="radio"] {
  appearance: none;
  background-color: white;
  border: 1px solid #e89acc;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

input[type="radio"]:checked {
  background-color: #e89acc;
}

label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color:#333;
}
.donation{
    margin:1rem 0 1.5rem 0;
    font-size:1.2rem;
    color:#7e7c7c;
}
.btn-pay{
    height:50px;
    border-radius:10px;
    background:#e89acc;
    border:none;
    font-size:1.4rem;
    font-weight:bold;
    color:#fff;
    cursor:pointer;
}
.btn-pay:hover{
    background:#dab1cb;
    transition:0.5s;
}
</style>