<template>
  <div class="disable-dbl-tap-zoom">
    <v-hover v-slot="{ hover }">
        <v-sheet 
            :elevation="hover ? 8 : 3"
            rounded="lg" 
            height="100"
            @click="invert"
            :color="color"
            class="text-center transition-fast-in-fast-out"
            max-width="100%"
        >
        
            <v-container class="fill-height">
                <v-row align="center" justify="center" v-if="done" class="wordtext text-break text-decoration-line-through" >
                    {{word}}
                </v-row>
                <v-row align="center" justify="center" v-else class="wordtext text-break ">
                    {{word}}
                </v-row>
            </v-container>
        </v-sheet>
    </v-hover>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-vars */

export default {
    props: {
        word: String,
        i: Number,
        j: Number
    },
    data() {
        return {
            color: "grey lighten-2",
            done: false,
        }
    },
    methods: {
        invert() {
            this.done = !this.done
            this.setColor()
            //this.$store.updateBingo(this.done, this.i, this.j)
            this.$store.commit('updateBingo', {blockState: this.done, i: this.i, j: this.j})
        },
        setColor() {
            this.color = (
                this.done ?
                    "green lighten-1" : "grey lighten-2"
                    
            )
           
        }
    }
}
</script>

<style>
.wordtext {
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;
}
</style>