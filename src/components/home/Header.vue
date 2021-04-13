<template>
  <v-sheet :height="120" color="grey lighten-3" class="mb-2 disable-dbl-tap-zoom">
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="pt-5">
        <h1 class="text-center display-3">
          Persco-Bingo!
        </h1>

        
      </v-row>
      <v-row justify="center" class="mt-4">
        <p class="caption">
          Bingokaart nummer: {{cardnumber}}
        </p>
      </v-row>
      <v-row justify="center" class="mt-n2">
        <p class="caption">
          Spelers op dit moment: {{wsconns}} (Peak: {{wspeak}})
        </p>
      </v-row>
      
    </v-container>
  </v-sheet>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return{

    }
  },
  props:{
    cardnumber: String,
  },
  computed: mapState({
    wsconns: state => state.wsconns,
    wspeak: state => state.wspeak,
  }),
}
</script>

<style scoped>
h1 {
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;
}
</style>