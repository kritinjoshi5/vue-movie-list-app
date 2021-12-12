<template>
  <div class="home">
    <div class="flex justify-space-between align-center">
      <h4 v-if="user">Welcome {{ user.name }}.</h4>
      <br />
      <div class="flex flex-gap--small search-menu">
        <label for="movie">Search Movie</label>
        <input
          @keyup.enter="getMovieList()"
          @mousedown="showRecents = true"
          @blur="showRecents = false"
          v-model="searchString"
          autocomplete="false"
          type="text"
          name="movie"
        />
        <div v-if="showRecents" class="flex flex-col search-menu-content">
          <template v-for="(srchString, index) in searchStrings.reverse().slice(0, 4)">
            <div :key="srchString + index">
              {{ srchString }}
            </div>
          </template>
          <div v-if="searchStrings.length > 5">More ...</div>
        </div>
        <button v-if="$route.path !== '/login'" @click="logout">Logout</button>
      </div>
    </div>
    <hr />
    <main class="flex flex-wrap flex-gap">
      <!-- Using Movie List Component here -->
      <template v-for="(movie, index) in movies">
        <MovieListComponent :movie="movie" :key="index + 'movie'" />
      </template>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieListComponent from "@/components/MovieListComponent.vue";

export default {
  name: "Home",
  components: {
    MovieListComponent,
  },
  data() {
    return {
      searchString: "",
      showRecents: false,
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user || null;
      },
    },
    movies: {
      get() {
        return this.$store.state.movies || [];
      },
    },
    searchStrings: {
      get() {
        let searchs = localStorage.getItem(`searches-${this.user.username}`);
        if (typeof searchs === 'string') {
          searchs = searchs.split(',');
        }
        console.log(searchs, 'searchs');
        return searchs || [];
      },
    },
  },
  methods: {
    // Getting list of movies
    getMovieList() {
      let strings = this.searchStrings;
      strings.push(this.searchString);
      localStorage.setItem(`searches-${this.user.username}`, strings);
      this.$store.dispatch("GetMovies", this.searchString || "");
    },
    logout() {
      localStorage.setItem("user", "");
      this.$router.push("/login");
    },
  },
};
</script>


<style lang="scss">
button {
  background: #00000080;
  color: #fff;
  border: 1px solid #ffffff80;
  border-radius: 8px;
  height: 36px;
  padding: 8px 16px;
}

.justify-space-between {
  justify-content: space-between;
}

.search-menu {
  position: relative;
}

.search-menu-content {
  background: #00000080;
  color: #fff;
  backdrop-filter: blur(10px);
  z-index: 10;
  position: absolute;
  top: 2.2em;
  border-radius: 8px;
  right: 5em;
  width: 250px;
}

.search-menu-content {
  div {
    padding: 0.75em;
  }
  div:not(:last-child) {
    border-bottom: 1px solid #ffffff42;
  }
  div:hover {
    background: 00000080;
  }
}
</style>