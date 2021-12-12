<template>
  <main class="flex flex-rev-col-xs">
    <div class="flex align-start flex-col flex-gap--small">
      <div class="flex" v-for="(val, key) in movie" :key="key" v-show="key !== 'Poster'">
        <div class="key">{{ key }}:</div>
        {{ val }}
      </div>
    </div>
    <div>
      <img :src="movie.Poster || ''" alt="Poster" />
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  props: {},
  created() {},
  name: "Details",
  data() {
    return {
      currentId: null,
      movie: null,
    };
  },
  mounted() {
    this.currentId = (this.$route.query && this.$route.query.id) || "";
    this.getMovieFromId();
  },
  methods: {
    //  Fetching particular movie using imdbId
    getMovieFromId() {
      const url = "http://www.omdbapi.com/";
      const params = {
        params: {
          apikey: "ece5ea60",
          i: this.currentId,
          type: "movie",
        },
      };
      axios.get(url, params).then(
        (resp) => {
          this.movie = resp.data || null;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .flex-rev-col-xs {
    flex-direction: column-reverse;
  }
}

p {
  margin: 0.1em;
  text-align: start;
  font-size: 18px;
}

.key {
  width: 150px;
  text-align: start;
  font-weight: 600;
}

.align-start {
  align-items: flex-start;
}
</style>