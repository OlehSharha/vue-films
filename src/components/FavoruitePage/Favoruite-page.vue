<script>
import FilmsCart from '../FimlsCart/FilmsCart.vue';

export default {
  name: 'FavoritePage',

  components: {
    FilmsCart,
  },

  data() {
    return {
      films: []
    }
  },

  mounted() {
    const storedFilms = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
    this.films = storedFilms;
  },
  methods: {
    updateFilms(films) {
      this.films = films;
    }
  }
}
</script>

<template>
  <div class="table1" v-if="films.length === 0">
    <div>Nothing in favorite<br/> Add something ;) </div>
    <img src="../../assets/img/icons8-kermit-the-frog-100.svg"/>
  </div>
      <FilmsCart :films="films" @films-updated="updateFilms"/>
</template>


