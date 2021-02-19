<template>
    <div class="block" v-if="isShowBlock">
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
        };
    },
    mounted() {
        console.log('Component mounted');
        const delayTimeNumber = Number(this.delayTime);
        setTimeout(() => {
            this.isShowBlock = true;
            console.log(this.delayTime);
        }, delayTimeNumber);
    },
    updated() {
        console.log('Component updated');
    },
    unmounted() {
        console.log('Component unmounted');
    },
};
</script>

<style lang="scss">
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>
