<template>
    <MenuLog/>
    <section class="section1">
        <h1 class="title">Fundraising you've made so far</h1>
        <table>
            <thead>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Ayakenewe</th>
                <th>Uwufashwa</th>
                <th>Status</th>
                <th colspan="3">Action</th>
                <!-- <p>{{ this.$store.state.Myfundraiser }}</p> -->
            </thead>
            <!-- <tbody v-if="Myfundraiser > 0"> -->
                <tbody>
                <tr v-for="myfund in this.$store.state.Myfundraiser" :key="myfund.id">
                    <td>{{myfund.id}}</td>
                    <td>{{myfund.title}}</td>
                    <td>{{ myfund.category }}</td>
                    <td>{{myfund.ayakenewe}}</td>
                    <td>{{ myfund.uwufashwa }}</td>
                    <td>Active</td>
                    <td><router-link :to="`/fashaDetails/${myfund.id}`">Details</router-link></td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <p>{{this.$route.params.id}}</p>
            </tbody>
            <!-- <tbody else>
                <tr>
                    <td colspan="9">Ntaco twashoboye gutora!</td>
                </tr>
            </tbody> -->
        </table>
    </section>
</template>
<script>
import MenuLog from '@/components/MenuLog.vue'
import axios from 'axios'
export default {
    name:'MyFundraiser',
    components:{
        MenuLog
    },
    data(){
        return{
            // Myfundraiser: this.$store.state.Myfundraiser
        
        }
    },
    methods:{
        getMyfundraiser(){
            axios
            .get('/fasha/',this.getHeaders())
            .then((response)=>{
                this.$store.state.Myfundraiser=response.data.results
            })
        },
        // details(item){
        //     this.$store.state.Myfundraiser=item
        //     this.$router.push('/fashaDetails')
        // }
    },
    mounted(){
        this.getMyfundraiser()
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

/* Media query for smaller screens */
@media (max-width: 768px) {
    .section1 {
        padding: 1rem;
    }
    
    .title {
        font-size: 1.5rem;
    }
    
    table, th, td {
        font-size: 0.9rem;
    }
    
    .table-wrapper {
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    table {
        width: 100%;
    }
    
    thead, tbody, tr, td, th {
        display: block;
    }
    
    thead {
        width: calc(100% + 17px);
    }
    
    tr {
        margin-bottom: 0.625rem;
    }
    
    th, td {
        padding: 0.25rem 0;
    }
    
    th {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
}
</style>