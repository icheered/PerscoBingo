<template>
  <div disable-dbl-tap-zoom>
    <Header/>
    <BlockArray/>
    <v-overlay class="flex-column overlay--active" v-if="$store.state.render.overlay && $store.state.render.canGetOverlay">
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
      this.$store.state.render.canGetOverlay = false,
      this.$confetti.stop()
    }
  },
  watch: {
    '$store.state.render.overlay': function() {
      if(this.$store.state.render.canGetOverlay && this.$store.state.render.overlay){
        if(this.$store.state.confettiSwitch) {
          this.$confetti.start({
          particles:[
            {
              type: 'image',
              url: 'https://www.dutchexpatshop.com/media/catalog/product/cache/ac21323b66bd6730a5f1021132460f2e/0/6/060520191339_48039BLK-1.png',
              size: 40,
              amount: 10,
              dropRate: 5
            },
            {
              type: 'image',
              url: 'https://www.plus.nl/INTERSHOP/static/WFS/PLUS-Site/-/PLUS/nl_NL/product/L/861575.png',
              size: 40,
              amount: 10,
              dropRate: 5
            }
          ],
          particlesPerFrame: 0.8
          },)
        } else {
          this.$confetti.start({
          particles:[
            {
              type: 'circle',
              size: 10,
              dropRate: 10
            }
          ]})
        }
      } else {
        this.$confetti.stop()
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/shared.scss';

.disable-dbl-tap-zoom {
  touch-action: manipulation;
}

.overlay--active {
  @keyframes overlay-fade-in {
    0% { opacity: 0; }
    25% { opacity: 0.25; }
    50% { opacity: 0.5; }
    75% { opacity: 0.75; }
    100% { opacity: 1; }
  }
  
  animation: overlay-fade-in 0.25s linear 0s 1 both;
}
</style>