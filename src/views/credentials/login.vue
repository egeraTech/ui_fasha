<template>
    <div class="container">
        <div class="aside">
           <router-link to="/"><img src="@/assets/images/logoAyi.png" alt="image non disponible" class="img-logo"></router-link>
            <h4 class="title-aside">Great progress</h4>
            <h2 class="title-pri">Sign in to save and continue</h2>
        </div>
        <div class="login-form">
            <p class="link">Don't have an account ? <router-link to="/signup" class="signup">Sign up</router-link></p>
            <div class="form">
                <h3 class="title-form">Your account details</h3>
                <div class="form-input">
                    <input type="text" placeholder="Email adress..." class="input" >
                    <input type="password" placeholder="Password..." class="input">
                    <span><a href="#" class="forget">Forgot your password ?</a></span>
                    <button class="btn-sign">Sign in</button>
                </div>
                <p class="click">By Clicking to sign in, you agree to the Fasha <a href="#" class="cookies">Terms</a> and <a href="#" class="cookies">Privacy notice</a></p>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',

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
.link{
    padding:3rem 2rem 5rem 35rem;
    font-size:1.2rem;
    color:#7e7c7c;
}
.signup{
    color:#7e7c7c;
}
.form{
    padding:4rem 3rem 3rem 5rem;
}
.title-form{
    padding:2rem 0;
    font-size:1.5rem;
    color:#7e7c7c;
}
.form-input{
    display:flex;
    flex-direction: column;
    gap:20px;
}
.input{
    height:50px;
    padding:0.5rem 1rem;
    font-size:1rem;
    color:#7e7c7c;
    border-radius:10px;
    outline:none;
    border:1px solid #7e7c7c;
}
.forget{
    color:#7e7c7c;
}
.forget:hover{
    color:#e89acc;
    transition:0.5s;
}
.btn-sign{
    height:50px;
    border-radius:10px;
    border:1px solid #7e7c7c;
    background:#7e7c7c;
    color:#f9f9f9;
    font-size:1.5rem;
    font-weight:700;
}
.btn-sign:hover{
    background:#afadad;
    transition:0.5s;
    border:1px solid #afadad;
}
.click{
    padding:2rem 0 0 0;
    font-size:1.2rem;
    color:#7e7c7c;
}
.cookies{
    color:#7e7c7c;
}
.cookies:hover{
    color:#e89acc;
    transition:0.5s;
}
/* Media Query for Mobile Screens */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 1rem;
  }

  .aside {
    width: 100%;
    height: auto;
  }

  .img-logo {
   height:150px;
    width:150px;
    padding:2rem 0 1rem 1rem;
  }

  

  .login-form {
    width: 100%;
    margin-bottom:3rem;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px #aaa;
  }

  .link {
    padding: 1rem 0;
    text-align: center;
  }

  .form {
    padding: 2rem 1rem;
  }

  .title-form {
    padding: 1rem 0;
    text-align: center;
  }

  .input {
    width: 100%;
  }

  .click {
    padding: 1rem 0 0 0;
    text-align: center;
  }
}
</style>