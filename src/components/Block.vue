<template>
    <div class="block" v-if="isShowBlock" @click="stopTimer()">
        Tekan Kotak
    </div>
</template>

<script>
export default {
    props: {
        delayTime: {
            type: Number,
            default: 0,
        },
    },
    setup() {
        return {};
    },
    data() {
        return {
            isShowBlock: false,
            timer: null,
            reactionTime: 0,
        };
    },
    mounted() {
        const delayTimeNumber = Number(this.delayTime);
        setTimeout(() => {
            this.isShowBlock = true;
            this.startTimer();
        }, delayTimeNumber);
    },
    updated() {},
    unmounted() {},
    methods: {
        startTimer() {
            // Menjalankan timer dengan interval
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            // Menghentikan laju timer interval
            clearInterval(this.timer);
            this.kirimDataTimerResult();
        },
        kirimDataTimerResult() {
            // kirim data hasil penghitungan timer
            this.$emit('endgame', { datatime: this.reactionTime });
        },
    },
};
</script>

<style lang="scss">
.block {
    width: 400px;
    border-radius: 20px;
    background: #ec4646;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>
