export default{
    data(){
        return{
            user:JSON.parse(localStorage.getItem('user'))
        }
    },
    methods:{
        getHeaders(){
            return{
                headers:{
                    'Authorization': 'Bearer ' + this.user.access
                }
            }
        }
    }
}