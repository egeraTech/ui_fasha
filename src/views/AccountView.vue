<template>
<MenuLog/>
<section class="section1">
    <h1 class="title">Account Setting</h1>
    <div class="tab">
        <div class="profile">
            <h3 class="title-profile">Profile</h3>
        </div>
        <div class="notification">
            <h3 class="title-notif">Notification</h3>
        </div>
    </div>
    <div class="container">
        <div class="photo">
            <img src="../assets/images/cov.jpg" alt="image non disponible" class="img-profile">
            <button class="upload">Change</button>
        </div>
        <div class="info">
            <table>
                <tr>
                   <div class="details">
                    <td>
                        <h3 class="title-details">First Name</h3>
                    </td>
                    <td>
                        <input type="text" class="input" >
                    </td>
                     </div>
                </tr>
                <tr>
                    <div class="details">
                        <td>
                            <h3 class="title-details">Last Name</h3>
                        </td>
                        <td>
                            <input type="text" class="input" >
                        </td>
                      </div>
                </tr>
                <tr>
                     <div class="details">
                        <td>
                            <h3 class="title-details">Email</h3>
                        </td>
                        <td>
                            <input type="text" class="input">
                        </td>
                      </div>
                </tr>
                <tr>
                    <div class="details">
                        <td>
                            <h3 class="title-details">Password</h3>
                        </td>
                        <td>
                            <input type="password" class="input" >
                        </td>
                     </div>
                </tr>
                <tr>
                    <div class="details">
                        <td>
                            <h3 class="title-details">Confirm password</h3>
                        </td>
                        <td>
                            <input type="password" class="input" >
                        </td>
                     </div>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="save">Save</button>
                    </td>
                </tr>
                
           </table>
            
        </div>
    </div>
    </section>
</template>
<script>
import MenuLog from '@/components/MenuLog.vue'
export default {
   name:'AccountView',
   components:{
    MenuLog
   }
}
</script>
<style scoped>
.section1{
    width:100%;
    padding:9rem 4rem 3rem 10rem;
    background:#f9f9f9;
}
.title{
    font-size:2.5rem;
    color:#7e7c7c;
    padding:0.5rem 0 1rem 0;
}
.tab{
    display:flex;
    flex-direction:row;
}
.profile{
    border:1px solid #7e7c7c;
    margin:1rem 0 1rem 0;
}
.title-profile{
    padding:1rem 2rem;
    color:#e89acc;
}
.notification{
    border:1px solid #7e7c7c;   
    margin:1rem 0 1rem 0;
}
.title-notif{
    padding:1rem 2rem;
    color:#7e7c7c;
}
.container{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.photo{
    width:500px;
    height:500px;
    display:flex;
    flex-direction: column;
}
.img-profile{
    height:400px;
    width:400px;
    display:block;
    margin:1rem auto;
    border-radius:50%;
}
.upload{
    height:50px;
    font-size:1.5rem;
    font-weight:bold;
    color:#e89acc;
    border-radius:10px;
    border:1px solid #f9f9f9;
    cursor:pointer;
    box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.75);
}
.upload:hover{
box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.75);
transition:0.5s;
}
.info{
    width:650px;
}
.details{
    display:flex;
    flex-direction: space-between;
}
.title-details{
    color:#7e7c7c;
    font-weight:normal;
    margin:1rem 1.5rem;
    padding:0.8rem;
}
.input{
    height:50px;
    width:450px;
    margin:1rem 0;
    border-radius:10px;
    outline:none;
    padding:0 1rem;
    font-size:1.3rem;
    color:#7e7c7c;
    border:1px solid #7e7c7c;
}
.save{
     height:50px;
     width:450px;
    font-size:1.5rem;
    font-weight:bold;
    color:#e89acc;
    border-radius:10px;
    border:1px solid #f9f9f9;
    cursor:pointer;
    box-shadow: 0px 0px 9px -3px rgba(0,0,0,0.75);
    margin:2rem  0 0 0;
}
/* Additional styles for mobile responsiveness */
@media (max-width: 768px) {
  .section1 {
    padding: 3rem 1rem;
  }
  .container {
    flex-direction: column;
    align-items: center;
  }
  .photo, .info {
    width: 100%;
    text-align: center;
  }
  .img-profile{
    height:350px;
    width:350px;
  }
  .input, .save {
    width: 100%;
  }
}
</style>