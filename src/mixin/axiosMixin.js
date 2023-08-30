export default{
    data(){
        return{

        }
    },
    methods:{
        getHeaders(){
            return{
                headers:{
                    'Authorization':'Bearer ' + this.user.access
                }
            }
        }
    }
}