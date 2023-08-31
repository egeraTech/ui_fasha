<template>
    <div class="container">
        <div class="aside">
            <router-link to="/"><img src="@/assets/images/logoAyi.png" alt="image non disponible" class="img-logo"></router-link>
            <h4 class="title-aside">Great progress</h4>
            <h2 class="title-pri">Create an account to save and continue</h2>
        </div>
        <div class="login-form">
            <p class="link">Already have an account ? <router-link to="/signin" class="signup">Sign in</router-link></p>
            <div class="form">
                <h3 class="title-form">Your account details</h3>
                <div class="form-input">
                    <div class="name">
                        <input type="text" placeholder="Firstname..." class="input1" >
                        <input type="text" placeholder="Lastname..." class="input1">
                    </div>
                    <input type="text" placeholder="Email adress..." class="input" >
                    <input type="password" placeholder="Password..." class="input">
                    <input type="password" placeholder="Confirm Password..." class="input">
                    <span><a href="#" class="forget">Forgot your password ?</a></span>
                    <button class="btn-sign">Sign Up</button>
                </div>
                
                
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
    height:650px;
    margin-bottom:3rem;
    background:#fff;
    border-radius:50px;
    box-shadow: 0px 0px 10px 0px #aaa;
}
.link{
    padding:3rem 2rem 4rem 35rem;
    font-size:1.2rem;
    color:#7e7c7c;
}
.signup{
    color:#7e7c7c;
}
.form{
    padding:0 3rem 3rem 5rem;
}
.title-form{
    padding:2rem 0;
    font-size:1.5rem;
    color:#7e7c7c;
}
.name{
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.input1{
    width:350px;
    height:50px;
    border-radius:10px;
    outline:none;
    border:1px solid #7e7c7c;
    padding:0.5rem 1rem;
    font-size:1rem;
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
    display: none;
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

/* ==============media querries======================= */
@media (max-width: 768px) {
  .container {
    display:flex;
    flex-direction: column;
    padding:1rem;
  }
  .img-logo{
    height:150px;
    width:150px;
    padding:2rem 0 1rem 1rem;
  }
  .aside{
   width: 100%;
    height: auto;
  }
  .login-form{
    width:100%;
    max-width:900px;
    margin-top:1rem;
    height:auto;
  }
  .link{
    padding: 1rem 0;
    text-align: center;
  }
  .signup{
    text-decoration: underline;
  }
  .name{
    display:flex;
    flex-direction: column;
    gap:1rem;
  }
  .input1{
    width:100%;
  }
  .form-input{
    display:flex;
    flex-direction:column;
    gap:20px;
  }
  .input{
    width:100%;
  }
  .forget{
    text-align:center;
  }
  .btn-sign{
    width:100%;
    margin-top:1rem;
  }
}
</style>