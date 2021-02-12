<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-btn>
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Search</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn to="/registration">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Registration</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn to="/login">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon
          class="d-lg-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>VueWineer</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn>
            <v-icon>mdi-magnify</v-icon>
            Search
          </v-btn>
          <v-btn to="/registration" v-if="!isUserLoggedIn">
            <v-icon class="pr-2">mdi-account-plus</v-icon>
            Registration
          </v-btn>
          <v-btn to="/login" v-if="!isUserLoggedIn">
            <v-icon class="pr-2">mdi-exit-to-app</v-icon>
            Login
          </v-btn>
          <v-btn to="/" @click="onLogout" v-if="isUserLoggedIn">
            <v-icon class="pr-2">mdi-logout</v-icon>
            Logout
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>

      <!-- <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="title"
                :counter="10"
                label="Title"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="descr"
                :counter="10"
                label="Descr"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="subText"
                :counter="10"
                label="Sub text"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="primary" @click="createPost">
            Add
          </v-btn>
        </v-container>
      </v-form> -->

      <!-- <v-layout v-if="myPosts.length !== 0">
        <v-card v-for="post in myPosts" :key="post.id">
          <v-card-text>
            <h2>
              {{ post.title }}
            </h2>
            <p>{{ post.descr }}</p>
            <p>{{ post.subText }}</p>
          </v-card-text>
        </v-card>
      </v-layout>
      <v-layout v-else></v-layout> -->
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      title: '',
      descr: '',
      subText: '',
    };
  },
  computed: {
    myPosts() {
      return this.$store.getters.myPosts;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
  },
  methods: {
    createPost() {
      let post = {
        id: Math.random(),
        title: this.title,
        descr: this.descr,
        subText: this.subText,
      };

      this.$store.dispatch('createPost', post);
    },
    onLogout() {
      this.$store.dispatch('logoutUser');
    },
  },
};
</script>

<style lang="scss"></style>
