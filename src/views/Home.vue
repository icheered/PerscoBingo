<template>
  <div>
    <Header/>
    <BlockArray/>
    <v-overlay class="flex-column" v-if="$store.state.render.overlay && $store.state.render.canGetOverlay">
      <h1 class="font-weight-bold display-4">Bingo!</h1>
      <v-row justify="center" class="mt-8">
        <v-btn color="primary" large @click="niceclick" elevation="4">Nice</v-btn>
      </v-row>
    </v-overlay>
    <v-container class="fill-height" v-if="$store.state.render.bingo">
      <v-row align="center" justify="center" >
        <h1 class="text-center display-3 pt-4">
          Bingo!
        </h1>
      </v-row>
    </v-container>
    <Footer/>
  </div>
</template>


<script>
import Header from '../components/home/Header'
import BlockArray from '../components/home/BlockArray'
import Footer from '../components/home/Footer'

export default {
  components: {
    'Header': Header,
    "BlockArray": BlockArray,
    'Footer': Footer,
  },
  data() {
    return {
    }
  },
  methods: {
    niceclick() {
      this.$store.state.render.canGetOverlay = false
    }
  }
}
</script>

<style scoped>
</style>