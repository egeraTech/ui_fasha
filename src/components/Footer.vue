<template>
     <footer>
  <div class="contain-footer">
    <div class="footer">
      <h1 class="footer-title">Fasha</h1>
      <p class="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam repellat fuga doloribus nulla, delectus voluptatibus quaerat.</p>
    </div>
    <div class="footer1">
      <h2 class="title-foot">Navigation Links</h2>
      <ul class="ule">
        <li class="lii"><router-link class="links" to="/">Home</router-link></li>
        <li class="lii"><router-link class="links" to="/about">About</router-link></li>
        <li class="lii"><router-link class="links" to="/howitworks">How it works</router-link></li>
        <li class="lii"><router-link class="links" to="/allfund">Fundraiser</router-link></li>
      </ul>
    </div>
    <div class="footer1">
      <h2 class="title-foot">Quick Links</h2>
      <ul class="ule">
        <li class="lii"><router-link class="links" to="/about">About</router-link></li>
        <li class="lii"><router-link class="links" to="/mission">Our mission</router-link></li>
        <li class="lii"><router-link class="links" to="/vision">Our vision</router-link></li>
        <li class="lii"><router-link class="links" to="/contact">Contact us</router-link></li>
      </ul>
    </div>
    <div class="footer1">
      <h2 class="title-foot">Contact us</h2>
      <ul class="ule">
        <li class="lii">Kigobe Sud, Bujumbura Mairie</li>
        <li class="lii">+257 69 00 97 12</li>
        <li class="lii">+257 76 54 78 30</li>
        <li class="lii">info@egeratech.com</li>
      </ul>
    </div>
  </div>
  <hr class="line">
  <p class="line-desc">Copyright &copy 2023 | EgeraTech </p>
 </footer>
</template>
<style scoped>
footer{
  width:100%;
  padding:3rem 4rem 2rem 10rem;
  background:#7e7c7c;
}
.contain-footer{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.footer{
  width:400px;
  padding:1rem
}
.footer1{
  width:300px;
  margin:0 1rem;
  padding:0 0 1rem 1rem;
}
.footer-title{
  color:#e89abc;
  font-size:2.5rem;
}
.desc{
  text-align:justify;
  color:#f9f9f9;
}
.title-foot{
  color: #e89abc;
  font-size:1.8rem;
  padding-bottom:1rem;
}
.ule .lii{
  list-style-type: none;
  padding:0.5rem 0 0.5rem 0;
  font-size:1rem;
  color:#f9f9f9;
}
.ule .lii .links{
  color:#f9f9f9;
  text-decoration:none;
  cursor:pointer;
}
.line-desc{
  text-align:center;
  padding:1rem 0 0 0;
}
/* Media Queries */
@media (max-width: 768px) {
  footer{
    padding: 3rem 2rem;
  }

  .contain-footer {
    flex-direction: column;
  }

  .footer,
  .footer1 {
    max-width: none;
    width: 100%;
  }

  .footer-title {
    font-size: 1.8rem;
  }

  .title-foot {
    font-size: 1.3rem;
  }
}

</style>