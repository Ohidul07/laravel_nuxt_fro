<template>
    <div class="adminview">
        <div class="content">
            <div class="row">
                <div class="col-md-12">
                    <AdminHeader />
                </div>
                <div class="col-md-3">
                    <Sidebar />
                </div>
                <div class="col-md-9">
                    <div class="p-2">
                        <Nuxt />
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import AdminHeader from '@/components/dashboard/admin/AdminHeader.vue'
import Sidebar from '@/components/dashboard/admin/Sidebar.vue'
//import Footer from '@/components/header/Footer.vue'
    export default {
        components: {
            AdminHeader,
            Sidebar,
            //Footer
        },
        methods: {
            async initialAuthCheck() {
                if(this.$store.state.auth_info.loggedIn ) {
                    
                    //this.$router.push('/dashboard');    
                }
                else if((localStorage.getItem('token')) && localStorage.getItem('token') != "") {
                    this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ localStorage.getItem('token');
                    await this.$store.dispatch('auth_info/getProfileData');
                    
                    if(this.$store.state.auth_info.loggedIn) {
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
                    this.$router.push('/login');
                }
            }
        },
        mounted() {
            this.initialAuthCheck();
        }
    }    
</script>

<style>
    .adminview {
        font-family: 'Noto Sans Bengali';
        font-size: 16px;
        background: #f4f5f7;
        margin: 0;
        overflow-x: hidden;
    }
    .content {
        min-height: 450px;
    }
</style>

 