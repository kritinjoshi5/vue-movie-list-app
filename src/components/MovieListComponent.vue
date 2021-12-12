<template>
  <div class="flex flex-col card" @click="viewDetails">
    <p class="card-header">{{movie.Title}}</p>
    <div>
      <img :src="movie.Poster || ''" alt="Poster">
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieListComponent",
  // Getting data(movie) from parent node. in this case "Home"
  props: ['movie'],
  methods: {
    // methods to open card in new tab
    viewDetails() {
      // resolve create complete path with query params.
      const url = this.$router.resolve({path: '/details', query: {id: this.movie.imdbID}})
      console.log(url.href);
      window.open(url.href, '_blank')
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 15em;
  width: 80%;
}

.card-header {
  height: 2em;
  font-weight: 600;
}

.card {
  width: 19%;
  height: 20em;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 12px;
  transition: transform 0.5s;
}

.card:hover {
  transform: scale(1.05);
}

@media (max-width: 1380px) {
  .card {
    width: 23.5%;
  }
}

@media (max-width: 1000px) {
  .card {
    width: 32%;
  }
}

@media (max-width: 860px) {
  .card {
    width: 31%;
  }
}

@media (max-width: 600px) {
  .card {
    width: 48%;
  }
}

</style>