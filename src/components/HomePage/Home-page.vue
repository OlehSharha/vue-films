<script>
import { getFilms } from '../../api/api'
import FilmsCart from '../FimlsCart/FilmsCart.vue';
export default {
  name: 'HomePage',
  components: {
    FilmsCart,
  },

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
}
</script>

<template>
<FilmsCart :films="films"/>
</template>


<style>
</style>