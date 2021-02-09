<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar >
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
              <v-list-item-title>title</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn>
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>title</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn>
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>title</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon to="/registration">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <v-btn icon to="/login">
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar>
      <router-view></router-view>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style lang="scss">
</style>
