<template>
    <div>
        <div class="col-md-12">
            <div class="row d-flex justify-content-center">
                <div class="col-md-4 mt-5">
                    <div class="login-form border px-4 py-5 rounded">
                        <form method="post" @submit.prevent="submitLoginData">
                            <div class="mb-3 text-center">
                                <h4>Login</h4>
                            </div>
                            <div class="mb-3" :class="{ invalid: !email.isValid }">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" v-model.trim="email.val" name="email" @blur="clearValidity('email')" id="email" placeholder="Enter email">
                                <p class="err-msg" v-if="!email.isValid">Name must not be empty.</p>
                            </div>
                            <div class="mb-4" :class="{ invalid: !password.isValid }">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" v-model.trim="password.val" name="password" @blur="clearValidity('password')" id="password" placeholder="Enter password">
                                <p class="err-msg" v-if="!password.isValid">Password must not be empty.</p>
                            </div>
                            <div class="d-grid mb-3">
                                <button type="submit" class="btn btn-success">Login</button>
                            </div>
                        </form>
                        <div>
                            <p>Don't have an account? <nuxt-link to="/register">Register</nuxt-link></p>
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
                email: {
                    val: "",
                    isValid: true
                },
                password: {
                    val: "",
                    isValid: true
                },
                formIsValid: true
            }
        },
        methods: {
            async submitLoginData() {
                this.ValidateForm();
                if(!this.formIsValid) {
                    return;
                }

                const loginData = {
                    email: this.email.val,
                    password: this.password.val,
                };
                
                await this.$store.dispatch('auth_info/submitLoginData', loginData);

                if(this.$store.state.auth_info.loggedIn && (this.$store.state.auth_info.user_data.length > 0 || this.$store.state.auth_info.user_data.id)) {
                    this.$router.push('/dashboard');
                }
                else {
                    this.$router.push('/login');    
                }
            },
            ValidateForm() {
                this.formIsValid = true;
                if(this.email.val == "") {
                    this.email.isValid = false;
                    this.formIsValid = false;
                }
                if(this.password.val == "") {
                    this.password.isValid = false;
                    this.formIsValid = false;
                }
            },
            clearValidity(input) {
              this[input].isValid = true;
            },
        }
    }
</script>

<style scoped>
a {
    text-decoration: none;
}
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.err-msg {
    color: red;
}
</style>