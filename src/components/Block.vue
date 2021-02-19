<template>
    <div class="block">
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
