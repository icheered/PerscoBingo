<template>
    <v-footer class="pt-0 ma-0 disable-dbl-tap-zoom" absolute>
      <v-expansion-panels flat>
        <v-expansion-panel class="grey lighten-4">
          <v-expansion-panel-header>
            <v-col class="text-center" >
              <v-btn text outlined> 
                <v-list-item class="custom-btn" href="https://github.com/icheered/PerscoBingo" target="_blank" hover>
                  {{ new Date().getFullYear() }} - ICheered
                <v-icon right>fa-github</v-icon>
              </v-list-item>
            </v-btn>
          </v-col>
          <template v-slot:actions>
            <v-icon class="donottranslate">
              mdi-information-variant
            </v-icon>
            <v-icon>
              mdi-chevron-up
            </v-icon>
          </template>             
        </v-expansion-panel-header>
        <v-expansion-panel-content absolute>
          <v-col>
          <v-row class="justify-center text-center">
            <p class="italic">
              Issues, vragen, opmerkingen of suggesties? <a href="https://icheered.nl/contact/index.html" target="_blank"> Contact me! </a> 
            </p>
          </v-row>
          <v-row class="justify-center text-center pb-5">
            <v-switch
              v-model="switch1"
              :label="'Studentenconfetti'"
              @click="switchClick"
            ></v-switch>
          </v-row>
          <v-row class="justify-left text-left">
            <h3>
              Laatste updates
            </h3>
          </v-row>
          <v-row class="justify-left text-left">
          <v-col cols="12" class="pr-0 ma-0">
          <ul>
            <li>Iedereen heeft nu een random bingokaart</li>
            <li>Confetti</li>
            <li>...</li>
            <li>Eigenlijk vooral Confetti</li>
          </ul>  
          </v-col>
          </v-row>
          </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      switch1: false
    }),
    methods: {
      switchClick() {
        this.$store.state.confettiSwitch = this.switch1
      }
    }
  }
</script>

<style scoped>
.custom-btn::before {
    color: transparent
}
.donottranslate {
  transform: none!important;
}
</style>