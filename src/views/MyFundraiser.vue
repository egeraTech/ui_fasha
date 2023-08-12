<template>
    <MenuLog/>
    <section class="section1">
        <h1 class="title">Fundraising you've made so far</h1>
        <table>
            <thead>
                <th>Title</th>
                <th>Category</th>
                <th>Starting Goal</th>
                <th>Donate For</th>
                <th colspan="3">Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td>Details</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td>Details</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td>Details</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td>Details</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td>Attending this school year</td>
                    <td>School</td>
                    <td>1000$</td>
                    <td>Friends & Family</td>
                    <td>Details</td>
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
</style>