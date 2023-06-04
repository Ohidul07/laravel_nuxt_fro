<template>
    <div>
        <Nuxt />
    </div> 
</template>

<script>
    export default {
        components: {},
        mounted() {
            this.initialAuthCheck();
        },
        methods: {
            async initialAuthCheck() {
                if(this.$store.state.auth_info.loggedIn ) {
                    
                    //this.$router.push('/dashboard');    
                }
                else if((localStorage.getItem('token')) && localStorage.getItem('token') != "") {
                    this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ localStorage.getItem('token');
                    await this.$store.dispatch('auth_info/getProfileData');
                    if(this.$store.state.auth_info.loggedIn && (this.$store.state.auth_info.user_data.length > 0)) {
                        this.$router.push('/dashboard');    
                    }
                    else {
                        localStorage.setItem('token','');
                        if(this.$route.name !='login') {
                            this.$router.push('/login');
                        }
                    }
                }
                else {
                    this.loggedIn = false;
                }

                if(this.loggedIn && this.$route.name == 'index') {
                    this.$router.push('/dashboard');
                }
            }
        }
    }    
</script>

<style>
</style>

 