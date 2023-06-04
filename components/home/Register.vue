<template>
    <div>
        <div class="col-md-12">
            <div class="row d-flex justify-content-center">
                <div class="col-md-4 mt-5">
                    <div class="login-form border px-4 py-5 rounded">
                        <div class="mb-3 text-center">
                            <h4>Register</h4>
                        </div>
                        <form method="post" @submit.prevent="register">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" v-model="username">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" v-model="email">
                            </div>
                            <div class="mb-4">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" v-model="password">
                            </div>
                            <div class="d-grid mb-3">
                                <button class="btn btn-success">Register</button>
                            </div>
                        </form>
                        <div>
                            <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: null    
        }
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>