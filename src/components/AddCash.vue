<template>
  <v-form v-model="valid" ref="form" id="form" @submit.prevent="transferCash">
    <v-row justify="center">
      <v-dialog v-model="dialog1" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar id="appbar">
            <v-tabs fixed-tabs color="accent">
              <v-tab id="vtab" v-bind="attrs" v-on="on">
                add cash to family account</v-tab
              >
            </v-tabs>
          </v-app-bar>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Add some cash to family account</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="cash"
                    type="number"
                    min="1"
                    name="cash"
                    label="cash*"
                    :rules="[rules.required, rules.aboveZero]"
                    onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog1 = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              type="submit"
              text
              :disabled="!valid"
              @click="
                dialog1 = false;
                transferCash();
              "
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
import ShopService from '../services/shop-service';
export default {
  props: ['budget'],
  data() {
    return {
      valid: true,
      dialog1: '',
      cash: undefined,
      rules: {
        required: value => !!value || 'Required.',
        aboveZero: value => value != '0' || 'Zero is not accepted.',
      },
    };
  },

  methods: {
    transferCash() {
      console.log(this.valid);
      this.$refs.form.validate();

      ShopService.addCash({ cash: this.cash })
        .then(results => {
          const newBudget = results.data.budget;
          console.log(newBudget);
          this.$swal({
            text: 'thanks for the cash!',
            icon: 'success',
          });
          this.$emit('updateBudget', newBudget);
        })
        .catch(err => {
          if (
            (err.response.data.message =
              "Your sessions's expired, please LOGIN again")
          ) {
            this.$router.push('/login');
          }
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
#form {
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>