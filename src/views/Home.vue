<template>
    <h1>Reaction Time Click Ninja</h1>
    <button @click="startGame()" :disabled="isPlayingGame">Start Game</button>
    <block-component v-if="isPlayingGame" v-bind:delayTime="delayTime"></block-component>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { defineAsyncComponent } from 'vue';

const BlockComponent = defineAsyncComponent(() => import('../components/Block.vue'));

export default {
    name: 'Home',
    components: {
        'block-component': BlockComponent,
    },
    data() {
        return {
            isPlayingGame: false,
            delayTime: null,
        };
    },
    methods: {
        startGame() {
            // Start game dengan set status playing dan delay
            this.delayTime = 2000 + Math.random() * 5000;
            this.isPlayingGame = true;
        },
    },
};
</script>
