<template>
<v-container class="mb-15 disable-dbl-tap-zoom">
    <v-col>
    <v-row v-bind:key="wordlist" v-for="(wordlist, i) in words" class="ml-n12">
        <v-spacer></v-spacer>
        <v-col v-bind:key="word" v-for="(word, j) in wordlist" cols="2" class="pa-0 ma-1">
            <Block :word="word" :i="i" :j="j"></Block>
        </v-col>
        
    </v-row>
    </v-col>
    </v-container>
</template>

<script>

import Block from '../home/Block'

export default {
    components: {
        "Block": Block
    },
    data() {
        return {
        words: [],
        wordArray: ["Corona", "Avond\u200Bklok", "Maat\u200Bregelen", "Britse variant", "Mutatie", "Vaccin\u200Batie", "Snel\u200Btest", "Quaran\u200Btaine", "Restau\u200Brants", "Winkels", "Test\u200Bbewijs", "Vaccinatie\u200Bgraad", "Middel\u200Bbare scholen", "Basis\u200Bscholen", "Scholen", "Onder\u200Bwijs", "HBO ", "MBO", "WO ", "Crisis ", "Contact\u200Bberoep", "Cijfers", "Risico", "Jonge\u200Bren", "Oude\u200Bren", "RIVM", "Mond\u200Bkapje", "OMT", "Veilig\u200Bheids\u200Bregio", "Ander\u200Bhalve meter ", "Sport ", "Quaran\u200Btaine", "Wande\u200Blen", "Bood\u200Bschappen", "Symp\u200Btomen", "Op Afspraak", "Team\u200Bsport", "Contact\u200Bsport", "Econo\u200Bmie", "Gezond\u200Bheid", "Bedrij\u200Bven", "Vaccin", "De Zorg", "Een\u200Bzaam\u200Bheid", "Team\u200Bverband", "Mentale Gezond\u200Bheid", "Festi\u200Bvals", "Lastige Fase", "Verkiez\u200Bingen", "Stem\u200Bmen", "Irma is er!", "Besmet\u200Btingen", "IC", "Hoesten", "Keel\u200Bpijn", "Testen", "Open\u200Bbaar", "Voort\u200Bgezet Onder\u200Bwijs", "Kapper", "Thuis\u200Bwerken", "Basis\u200Bregels", "Zieken\u200Bhuizen", "Verpleeg\u200Bhuizen", "Experts", "Pande\u200Bmie", "CPB", "CBS", "Theater", "Concert", "Inenting", "Evene\u200Bment", "Scholieren", "Golf", "Zomer", "Herfst", "Winter", "Lente ", "Verant\u200Bwoord", "Onder\u200Bzoek", "Kwartaal", "Bios\u200Bcopen", "Vakan\u200Btie", "Reizen", "Trein", "Handen Wassen", "Elle\u200Bboog", "Knuffels"]
        }
    },
    methods: {
        randomArray(arr, size) {
            var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        },
        getRandomlist() {
            var arr = this.randomArray(this.wordArray, 25)
            var outputList = []
            for(var i = 0; i < 5; i++) {
                outputList.push(arr.slice(i*5, i*5+5))
            }
            this.words = outputList
        }
    },
    mounted(){
        this.getRandomlist()
    }
}
</script>

<style>

</style>