<template>
  <div>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/home/LoginForm.vue'
export default {
  name: 'IndexPage',
  data() {
    return {
      loggedIn: false
    }
  },
  components: {
    LoginForm
  },
  layout: 'default'
}
</script>
