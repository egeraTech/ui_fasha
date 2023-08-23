<template>
<Menu/>
    <section class="section1">
        <h1 class="title">All Fundraiser</h1>
        <div class="grid-box">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
    </section>
</template>
<script>
import Menu from '@/components/Menu.vue'
export default {
    name:'AllFundraiser',
    components:{
        Menu
    }
}
</script>
<style scoped>
.section1{
    width:100%;
    padding:9rem 1.5rem 4rem 7.6rem;
}
.grid-box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
.box{
    background:#e89acc;
    border-radius:5px;
    width:350px;
    height:400px;
    box-shadow: 0px 0px 5px 0px #aaa;
    border:1px solid red;
    margin:1rem auto;
}
.title{
    font-size:2.5rem;
    color:#e89acc;
    margin-left:2.3rem;
    padding:0 0 2rem 0;
}
</style>