<template >
  <div data-app>
    <v-progress-circular
      v-show="loading === true"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <h1 @input="budget"></h1>
    <div v-show="loading === false">
      <h1 id="title">Welcome Home {{ user.name }}</h1>
      <button class="button" @click="logout">LogOut</button>

      <v-card
        v-show="user"
        class="results"
        v-for="user in users"
        :key="user.id"
      >
        <h2>familyname: {{ user.familyname }}</h2>
        <h3>members:</h3>
        <p class="members" v-for="member in user.members" :key="member.id">
          {{ member.name }} | {{ member.email }}
        </p>
        <h3>family budget:{{ budget }}$</h3>
      </v-card>
      <div id="div">
        <AddCash
          :budget="budget"
          v-on:updateBudget="updateBudget($event)"
          v-show="user.isAdmin"
        />
        <Shoping :budget="budget" v-on:updateBudget="updateBudget($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/auth-service';
import AddCash from '../components/AddCash';
import Shoping from '../components/Shoping';

export default {
  name: 'Home',
  components: { Shoping, AddCash },
  data() {
    return {
      user: '',
      users: [],
      loading: false,
      dialog: false,
    };
  },
  computed: {
    budget() {
      if (this.users[0]) {
        return this.users[0].budget;
      } else {
        return this.users;
      }
    },
    familyMembers() {
      if (this.users[0]) {
        return this.users[0];
      } else {
        return this.users;
      }
    },
  },

  async created() {

    if(!this.$store.getters.isLoggedIn) {
  //    this.$router.push('/login');
    }
    
    this.user = await this.$store.getters.getUser;
    this.loading = true;
    AuthService.getFamily()
      .then(results => {
        this.users.push(results.data);
        this.loading = false;
      })
      .catch(err => {
        this.$swal({
          text: err.response.data.message,
          icon: 'error',
          dangerMode: true,
        });
        console.log(err);
        err;
      });
  },
  methods: {
    updateBudget(updateBudget) {
      this.users[0].budget = updateBudget;
    },
    logout() {
      this.$store.dispatch('logout');

      this.$router.push('/login');
    // }
    },
  },
};
</script>

<style lang="scss">
@import './forms.scss';
.button {
  margin: auto 2px;
}
#title {
  margin-top: 20px;
}
.members,
p {
  margin: 0;
  padding: 0;
}
.results {
  border: 2px solid black;
  border-radius: 20px 0 20px 0;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
}
</style>