<template>
    <MenuLog/>
    <section class="section1">
        <h1 class="title">Fundraising you've made so far</h1>
        <table>
            <thead>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Starting Goal</th>
                <th>Donate For</th>
                <th colspan="3">Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td><router-link to="/details">Details</router-link></td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td><router-link to="/details">Details</router-link></td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td><router-link to="/details">Details</router-link></td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td><router-link to="/details">Details</router-link></td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td><router-link to="/details">Details</router-link></td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
import MenuLog from '@/components/MenuLog.vue'
export default {
    name:'MyFundraiser',
    components:{
        MenuLog
    }
}
</script>
<style scoped>
.section1{
    padding:12rem 3rem 4rem 10rem;
    width:100%;
}
.title{
    font-size:2.5rem;
    padding:0 0 2rem 0;
}
.title{
  color:#fff;
  background:linear-gradient(to right, #095fab 10%, #25abe5 50%, #be7b7b 68%);
  background-size:auto auto;
  background-clip:border-box;
  background-size:200% auto;
  color:#fff;
  background-clip:text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  display:inline-block;
}
@keyframes textclip{
  to{
    background-position:200% center;
  }
}
table{
    width:100%;
}

table, th, td{
    border-bottom:2px solid #afaaad;
    border-collapse: collapse;
}
thead th{
    text-align: left;
    padding:1rem 0;
    font-size:1.4rem;
    color:#e89acc;
}
tbody td{
    padding:0.5rem 0.5rem;
    color:#afaaad;
}
</style>