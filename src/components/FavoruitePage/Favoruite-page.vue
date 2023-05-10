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
      this.films = films; // Оновити список фільмів у батьківському компоненті
    }
  }
}
</script>

<template>
  <FilmsCart :films="films" @films-updated="updateFilms"/>
</template>
