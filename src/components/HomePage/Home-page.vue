<script>
import { getFilms } from '../../api/api'
export default {
  name: 'HomePage',
  data() {
    return {
      films: []
    }
  },

  async mounted() {
    try {
      const result = await getFilms();
      this.films = result;
      console.log(this.films)
    } catch (error) {
      console.error(error)
    }
  },

	methods: {
  getPosterUrl(posterPath) {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  },

  trimText(text, maxLength) {
      return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
    },

  }
}
</script>

<template>
  <div>
    <ul class="table">
      <li class="element" v-for="(item, index) in films" :key="index">
		<img class="poster" :src="getPosterUrl(item.poster_path)" alt="poster" />
		<p class="title">Title: {{ trimText(item.title, 29) }}</p>
		<p>Release Date :{{ item.release_date }}</p>
		<p class="title">Description : {{ trimText(item.overview, 29) }}</p>
		</li>
    </ul>
  </div>
</template>


<style>
</style>