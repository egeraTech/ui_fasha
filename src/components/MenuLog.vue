<template>
<header>
    <a href="#" class="logo">
        <img src="../assets/images/logoAyi.png" alt="image non disponible" class="img-logo">
    </a>
    <nav>
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
        <router-link to="/howitwork" class="nav-item">How It works</router-link>
        <router-link to="allfund" class="nav-item">Fundraiser</router-link>
        <!-- <router-link to="/signin" class="nav-item">Sign In</router-link> -->
        <!-- <router-link to="/account" class="nav-item">Account</router-link> -->
        <div class="dropdown">
        <button class="dropbtn">Munyeshaka <i class="fa fa-chevron-down" aria-hidden="true"></i></button>
            <div class="dropdown-content">
                <router-link to="/newfund" class="dropdown-link">Start a new Fasha</router-link>
                <router-link to="/myfund" class="dropdown-link">Your Fundraiser</router-link>
                <router-link to="/account" class="dropdown-link">Account Setting</router-link>
                <router-link to="#" class="dropdown-link">Sign out</router-link>
            </div>
        </div>
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
nav{
    display:flex;
    flex-direction: row;
    /* margin:0 6rem 0 0; */
}
nav .nav-item{
    margin:0 1rem 0 1rem;
    text-decoration: none;
    font-size:1.2rem;
    color:gray;
    font-weight:600;
    padding:1rem 0 0 0;
}
nav .nav-item:hover{
    color:#e89abc;
    transition:0.1s;
}
/* nav .btn-item{
    padding:0.5rem 1rem;
    margin:0 3.5rem;
    font-size:1.2rem;
    border-radius:5px;
    border:none;
    background:#e89abc;
    color:#fff;
} */
/* ====================================================== */
/* Style the button that opens the dropdown */
.dropbtn {
  /* background-color: #e89acc;
  color: white;
  padding: 0.5rem 1rem;
  margin:0 0 0 1rem;
  font-size: 16px;
  border: none;
  border-radius:5px; */
  padding:0.5rem 1rem;
    margin:0.5rem 3.5rem;
    font-size:1.2rem;
    border-radius:5px;
    border:none;
    background:#e89abc;
    color:#fff;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius:5px;
  min-width: 260px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Show the dropdown content when the button is hovered */
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  width:220px;
}
.dropdown-link{
    padding:0.5rem 2rem;
    text-decoration: none;
    font-size:1.2rem;
    color:gray;
    font-weight:bold;
}
.dropdown-link:hover{
    background:#fff;
    color:#e89abc;
    transition:0.5s;
}
</style>