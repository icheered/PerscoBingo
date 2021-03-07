<template>
  <div disable-dbl-tap-zoom>
    <Header/>
    <BlockArray/>
    <v-overlay class="flex-column" v-if="$store.state.render.overlay && $store.state.render.canGetOverlay">
      <h1 class="font-weight-bold display-4">Bingo!</h1>
      <v-row justify="center" class="pt-8">
        <v-btn color="primary" large @click="niceclick" elevation="4">Nice</v-btn>
      </v-row>
    </v-overlay>
    <v-container class="fill-height pb-15 mb-15">
      <v-row align="center" justify="center" v-if="$store.state.render.bingo">
        <h1 class="text-center display-3 mt-n10">
          Bingo!
        </h1>
      </v-row>
      <v-row v-else>

      </v-row>
    </v-container>
    <Footer class="pt-0"/>
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

<style>
.disable-dbl-tap-zoom {
  touch-action: manipulation;
}
</style>