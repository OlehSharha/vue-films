<script>
export default {
  name: 'FilmsCart',
  props: {
    films: Array
  },
  data() {
    return {
      favoriteFilms: []
    };
  },

  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/original/${posterPath}`;
    },
    trimText(text, maxLength) {
      return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
    },
    toggleFilmInFavorites(film) {
      const index = this.favoriteFilms.findIndex((favoriteFilm) => favoriteFilm.id === film.id);
      if (index !== -1) {
        // Фільм вже є у списку улюблених, тому видаляємо його
        this.favoriteFilms.splice(index, 1);
      } else {
        // Фільму немає у списку улюблених, тому додаємо його
        this.favoriteFilms.push(film);
      }
      localStorage.setItem('favoriteFilms', JSON.stringify(this.favoriteFilms));
	  this.$emit('films-updated', this.favoriteFilms)
    },
    isFilmInFavorites(film) {
      return this.favoriteFilms.some((favoriteFilm) => favoriteFilm.id === film.id);
    }
  },

  mounted() {
    const storedFilms = JSON.parse(localStorage.getItem('favoriteFilms')) || [];
    this.favoriteFilms = storedFilms;
  }
};
</script>

<template>
  <div>
    <ul class="table">
      <li class="element" v-for="(item, index) in films" :key="index">
        <img class="poster" :src="getPosterUrl(item.poster_path)" alt="poster" />
        <p class="title">Title: {{ trimText(item.title, 29) }}</p>
        <p>Release Date: {{ item.release_date }}</p>
        <p class="title">Description: {{ trimText(item.overview, 29) }}</p>
        <button @click="toggleFilmInFavorites(item)" :class="{ 'favorite': isFilmInFavorites(item) }">
          {{ isFilmInFavorites(item) ? 'Remove from Favorites' : 'Add to Favorites' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style>
</style>
