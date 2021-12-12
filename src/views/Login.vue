<template>
  <div class="flex flex-col login-card flex-gap--large">
    <h2>Login</h2>
    <div class="flex flex-col card-content flex-gap--large">
        <label  for="username">Username</label>
        <input @keyup.enter="login" ref="username" type="text" name="username" />
    </div>
  </div>
</template>

<script>
export default {
    // Definging Component name as name: login.
  name: "Login",
  computed: {
    users: {
      get() {
        //   Calling store state whenever users state change.
        return this.$store.state.users || [];
      },
    },
  },
  methods: {
    //   Login functions
    login() {
        //  $refs to get component data and we defined ref=user in template 
        const value = this.$refs.username.value;
        // Calling SetUser that is defined in store.
        this.$store.dispatch("SetUser", value);

    },
  },
  mounted() {
    //   Additional check for saving network(API) calls.
    if (this.users && !this.users.length) {
      this.$store.dispatch("GetUsers");
    }
  },
};
</script>

<style lang="scss" scoped>

.login-card {
    background: rgba(0, 0, 0, 0.5);
    align-self: center;
    margin-top: 20vh;
    justify-content: center;
    justify-self: center;
    padding: 5em;
    margin-left: 20vw;
    margin-right: 20vw;
}

.card-content {
    align-self: center;
    width: 50vw;
}
</style>