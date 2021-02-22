<template>
    <h1>Reaction Time Click Ninja</h1>
    <button @click="startGame()" :disabled="isPlayingGame">Start Game</button>
    <block-component
        v-if="isPlayingGame"
        v-bind:delayTime="delayTime"
        @endgame="endGameTimer"
    ></block-component>
    <result-component v-if="showResults" :resultTime="scoreTimer"></result-component>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { defineAsyncComponent } from 'vue';

const BlockComponent = defineAsyncComponent(() => import('../components/Block.vue'));
const ResultComponent = defineAsyncComponent(() => import('../components/Results.vue'));

export default {
    name: 'Home',
    components: {
        'block-component': BlockComponent,
        'result-component': ResultComponent,
    },
    data() {
        return {
            isPlayingGame: false,
            delayTime: null,
            scoreTimer: 0,
            showResults: false,
        };
    },
    methods: {
        startGame() {
            // Start game dengan set status playing dan delay
            this.delayTime = 2000 + Math.random() * 5000;
            this.isPlayingGame = true;
            this.showResults = false;
        },
        endGameTimer(dataemit) {
            this.scoreTimer = dataemit.datatime;
            this.isPlayingGame = false;
            this.showResults = true;
        },
    },
};
</script>
<style lang="scss">
button {
    background: #ec4646;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
}
button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
}
</style>
