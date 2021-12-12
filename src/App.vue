<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  },
  mounted() {
    this.$store.dispatch("GetUsers");
  },
}
</script>

<style lang="scss">
body {
  background: #364c63;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #89c4ff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input {
    background: transparent;
    box-shadow: none;
    padding: 8px 16px;
    background: transparent;
    box-shadow: none;
    border: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    height: 16px;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-gap {
  & {
    gap: 16px;
  }
  &--small {
    gap: 8px;
  }
  &--large {
    gap: 24px;
  }
}

.align-center {
  align-items: center;
}

main {
  padding: 1em;
}
</style>
