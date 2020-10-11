<template>
<v-app>
  
   <div id="app">
    <v-app-bar id="appbar">
      <v-tabs fixed-tabs color="accent">
        <v-tab id="vtab" to="/login">Login</v-tab>
        <v-tab  id="vtab" to="/about">About</v-tab>
        <v-tab  id="vtab" to="/home">Home</v-tab>
      </v-tabs>
    </v-app-bar>

    
    <router-view />
  </div>
</v-app>
</template>

<script>
import Login from './components/Login.vue';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Router from './router'

export default {
  name: 'App',
  components: {
    Login,
    SignUp,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:flex;
  flex-direction: column;
  align-items: center;
}
#appbar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  #vtab {
    width: 300px;
    color:black
  }
  
}
</style>
