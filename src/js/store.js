import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable vue/no-unused-components */

const store =  new Vuex.Store({
    state: {
      bingo: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
      ],
      render: {
          bingo: false,
          overlay: false,
          canGetOverlay: true
      },
    },
    mutations: {
      updateBingo (state, {blockState, i, j}) {
        blockState ? this.state.bingo[i][j] = 1 : this.state.bingo[i][j] = 0
        var isBingo = false;

        // Check for horizontal bingo
        for(var a = 0; a < this.state.bingo.length; a++){
          var count = 0
          for(var b = 0; b < this.state.bingo[a].length; b++){
            if (this.state.bingo[a][b] == 1){
              count += 1
            }
            if (count == 5){
              this.state.render.bingo = true
              this.state.render.overlay = true
              isBingo = true
            }
          }
        }
        // Check for vertical bingo
        for(a = 0; a < this.state.bingo.length; a++){
          count = 0
          for(b = 0; b < this.state.bingo[a].length; b++){
            if (this.state.bingo[b][a] == 1){
              count += 1
            }
            if (count == 5){
              this.state.render.bingo = true
              this.state.render.overlay = true
              isBingo = true
            }
          }
        }
        // Check for diagonal bingo
        count = 0
        for(a = 0; a < this.state.bingo.length; a++){
          if (this.state.bingo[a][a] == 1){
            count += 1
          }
        }
        if (count == 5){
          this.state.render.bingo = true
          this.state.render.overlay = true
          isBingo = true
        }
        count = 0
        for(a = 0; a < this.state.bingo.length; a++){
          if (this.state.bingo[a][4-a] == 1){
            count += 1
          }
        }
        if (count == 5){
          this.state.render.bingo = true
          this.state.render.overlay = true
          isBingo = true
        }


        if (!isBingo){
          this.state.render.bingo = false
          this.state.render.overlay = false
          this.state.render.canGetOverlay = true
        }
        console.log()
        }
      },
    actions: {}
  })
  
  export default store