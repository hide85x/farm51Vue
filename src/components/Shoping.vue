<template>
  <v-row justify="center">
    <v-dialog v-model="dialog2" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar id="appbar">
          <v-tabs fixed-tabs color="accent">
            <v-tab id="vtab" v-bind="attrs" v-on="on"> do shopping</v-tab>
          </v-tabs>
        </v-app-bar>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Shoping Spree!</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-form
                  ref="form"
                  v-model="valid"
                  @submit.prevent="doShoping"
                  id="form"
                >
                  <v-text-field
                    v-model="title"
                    type="text"
                    label="title*"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="cost"
                    type="number"
                    label="cost*"
                    :rules="[rules.required, rules.aboveZero]"
                    required
                    min="1"
                    onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                  ></v-text-field>
                </v-form>
              </v-col>
              <v-col cols="12"> </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog2 = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!valid"
            @click="
              dialog2 = false;
              doShoping();
            "
            >Buy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ShopService from '../services/shop-service';

export default {
  props: ['budget'],
  data() {
    return {
      valid: true,
      dialog2: '',
      title: '',
      cost: '',
      rules: {
        required: value => !!value || 'Required.',
        aboveZero: value => value != '0' || 'Zero is not accepted.',
      },
    };
  },
  methods: {
    doShoping() {
      this.$refs.form.validate();

      ShopService.doShoping({ title: this.title, cost: this.cost })
        .then(results => {
          if (results.data.family != undefined) {
            const newBudget = results.data.family.budget;
            console.log(newBudget);
            this.$swal({
              text: 'added to Your spending',
              icon: 'success',
            });
            this.title = '';
            this.cost = '';
            this.$emit('updateBudget', newBudget);
          } else {
            this.$swal({
              text: results.data,
              icon: 'error',
              dangerMode: true,
            });
            if (
              (err.response.data.message =
                "Your sessions's expired, please LOGIN again")
            ) {
              return this.$router.push('/login');
            }
            this.title = '';
            this.cost = '';
          }
        })
        .catch(err => {
          this.$swal({
            text: err.response.data.message,
            icon: 'error',
            dangerMode: true,
          });
        });
    },
  },
};
</script>

<style lang="scss">
</style>