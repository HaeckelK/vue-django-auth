<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button @click='logout' v-if=$store.state.isAuthenticated>LOGOUT</button>
      <button @click='login' v-else>LOGIN</button>
    </div>
    <h2>Token: {{ $store.state.csrfToken }}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  methods: {
    logout() {
      console.log('Button clicked on home page');
      this.$store.dispatch('logout');
    },
  },
  mounted() {
    // TODO this needs to happen at a higher level that a page view?
    this.$store.dispatch('getCSRF');
  },
};
</script>
