<script>
import { getFilms } from '../../api/api'

export default {
  name: 'FavoritePage',

  data() {
    return {
      films: []
    }
  },

  async mounted() {
    try {
      const result = await getFilms()
      this.films.push(result)
      console.log(this.films)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<template>
  <div class="table">
    <ul class="element">
      <li class="element" v-for="(item, index) in films" :key="index">
		<p>{{ item.Title }}</p>
	<img :src=item.Poster alt="poster" />
		</li>
    </ul>
  </div>
</template>
