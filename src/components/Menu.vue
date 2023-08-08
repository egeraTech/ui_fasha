<template>
<header>
    <a href="#" class="logo">
        <img src="../assets/images/logoAyi.png" alt="image non disponible" class="img-logo">
    </a>
    <nav>
        <a href="#" class="nav-item">Home</a>
        <a href="#" class="nav-item">About</a>
        <a href="#" class="nav-item">How It works</a>
        <a href="#" class="nav-item">Contact</a>
        <a href="#" class="nav-item">Sign In</a>
        <button class="btn-item">DONATE</button>
    </nav>
</header>
</template>
<style scoped>
header{
    background:rgba(0,0,0,0.1);
    backdrop-filter: blur(2px);
    width:100%;
    display:flex;
    justify-content: space-between;
    padding:2rem 0 2rem 0;
    z-index:1000;
    position:fixed;
     box-shadow: 0 1px 0px 0px rgba(0,0,0,0.1);
}
header .logo{
    margin:0 0.5rem 0 10rem;
    /* padding-top:0.5rem; */
    text-decoration:none;
}
.img-logo{
    height:60px;
    width:60px;
}
nav .nav-item{
    margin:0 1rem 0 1rem;
    text-decoration: none;
    font-size:1.2rem;
    color:gray;
    font-weight:600;
}
nav .nav-item:hover{
    color:#fff;
    transition:0.1s;
}
nav .btn-item{
    padding:0.5rem 1rem;
    margin:0 3.5rem;
    font-size:1.2rem;
    border-radius:5px;
    border:none;
    background:#e89abc;
    color:#fff;
}
</style>