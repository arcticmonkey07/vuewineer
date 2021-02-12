<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            type="email"
            :counter="10"
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

        <v-col cols="12" md="4">
          <v-text-field
            v-model="passwordRepeat"
            type="password"
            :counter="10"
            label="Repeat Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn 
        class="primary"
        @click="onSubmitRegister"
      >
        Register
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
      passwordRepeat: ''
    }
  },
  methods: {
    onSubmitRegister() {
      const user = {
        email: this.email,
        password: this.password
      }

      console.log(user)

      this.$store.dispatch('registerUser', user)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {})
    }
  }
}
</script>