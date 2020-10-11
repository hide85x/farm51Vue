<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">email</label>
        <input type="text" id="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="text" id="password" v-model="form.password" />
      </div>
      <button
        id="login"
      >
        login
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import AuthService from '../services/auth-service';

export default {
  name: 'FormComp',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
   login() {
      AuthService.login(this.form)
        .then(result => {
          this.$swal({
            text: 'User successfullly logged in',
            icon: 'success',
          });
         
          const token = result.data.token;
          const user = result.data.user;
          const budget= result.data.budget

          // const email = result.data.email;

          this.$store
            .dispatch('login', { token, user, budget })
            .then(() => {
              this.$swal({
                text: 'You have succesfully logged in!',
                icon: 'success',
              });
              this.$router.push('/home');
            })
            .catch(err => {
              console.log(err);
               this.$swal({
            text: err.response.data.message,
            icon: 'error',
            dangerMode: true,
          });
            });
        })
        .catch(err => {
          if (err.response.data.message.length > 5) {
            this.$swal({
            text: err.response.data.message,
            icon: 'error',
            dangerMode: true,
          });
            return;
          }


          this.msgs = err.response.data.message;
        });
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
</style>
