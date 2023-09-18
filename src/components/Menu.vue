<template>
<header>
    <a href="#" class="logo">
        <img src="../assets/images/logoAyi.png" alt="image non disponible" class="img-logo">
    </a>
    <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav class="nav-menu" :class="{'active':isMobileMenuVisible}">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
        <router-link to="/howitwork" class="nav-item">How It Works</router-link>
        <router-link to="/allfund" class="nav-item">Fundraiser</router-link>
        <router-link to="/signin" class="nav-item">Sign In</router-link>
        <router-link to="/newfund" class="btn-item">START FASHA</router-link>
    </nav>
</header>
</template>
<script>
export default {
    data(){
        return{
            isMobileMenuVisible:false
        }
    },
    methods:{
        toggleMobileMenu(){
            this.isMobileMenuVisible=!this.isMobileMenuVisible
        }
    }
}
</script>
<style scoped>
/* header{
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
    text-decoration:none;
}
.img-logo{
    height:60px;
    width:60px;
}
nav{
    display: flex;
    align-items: center;
}
nav .nav-item{
    margin:0 1rem 0 1rem;
    text-decoration: none;
    font-size:1.2rem;
    color:gray;
    font-weight:600;
}
nav .nav-item:hover{
    color:#e89abc;
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
    cursor:pointer;
    text-decoration: none;
} */


header {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem 1rem 9rem;
    z-index: 1000;
    position: fixed;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
}

header .logo {
    margin: 0 0.5rem;
}

.img-logo {
    height: 60px;
    width: 60px;
}

.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
}

.mobile-menu-toggle span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
}

nav {
    display: flex;
    align-items: center;
}

nav .nav-item {
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.2rem;
    color: gray;
    font-weight: 600;
}

nav .nav-item:hover {
    color: #e89abc;
    transition: 0.1s;
}

nav .btn-item {
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background: #e89abc;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
}

/* ==================================MEDIA QUERRIE==================================== */
@media (max-width: 768px){
    header{
        padding:2rem 1rem;
    }
    .logo {
        margin-left: 10px;
    }
    .mobile-menu-toggle {
        display: flex;
    }
    nav.nav-menu {
        display: none;
        position: absolute;
        top: 70px;
        right: 0;
        background: white;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
    nav.nav-menu.active {
        display: flex;
    }
    nav.nav-menu a {
        margin: 10px 20px;
    }
}
</style>