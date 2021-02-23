<template>
<v-container class="mb-15">
    <v-row v-bind:key="wordlist" v-for="(wordlist, i) in words">
        <v-col v-bind:key="word" v-for="(word, j) in wordlist">
            <Block :word="word" :i="i" :j="j"></Block>   
        </v-col>
    </v-row>
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
        words: [
            ["Middel-bare scholen", "Kappers", "Horeca", "IC", "Ouderen"],
            ["Mentale Gezond-heid", "De Zorg", "Mond-kapje", "Corona", "Besmet-tingen"],
            ["Het Vaccin", "Basis-regels", "Avond-klok", "Eenzaam-heid", "Irma is er!"],
            ["Lock-down", "Basis scholen", "Winkels", "Festival", "Bedrijven"],
            ["Jongeren", "Verkiez-ingen", "Het OMT", "Virus", "Sport vereniging"],
        ],
        }
    }
}
</script>

<style>

</style>