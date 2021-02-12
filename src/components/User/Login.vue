<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            type="email"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            type="password"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="primary" @click="onSubmitLogin">
        Login
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmitLogin() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch('loginUser', user)
        .then(() => {
          this.$router.push('/');
        })
        .catch(() => {});
    },
  },
};
</script>
