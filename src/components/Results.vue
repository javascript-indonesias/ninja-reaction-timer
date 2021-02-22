<template>
    <div>Reaction Time - {{ this.resultTime }}</div>
    <p class="rank">Peringkat Reaksi - {{ peringkat }}</p>
</template>

<script>
export default {
    name: 'ResultComponent',
    props: {
        // Mendapatkan props untuk hasil score reaction timer
        resultTime: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            peringkat: null,
        };
    },
    setup() {
        return {};
    },
    mounted() {
        console.log('Component mounted');
        this.kalkulasiRank();
    },
    updated() {
        console.log('Component updated');
    },
    methods: {
        kalkulasiRank() {
            if (this.resultTime < 250) {
                this.peringkat = 'Tangan Ninja yang secepat kilat';
            } else if (this.resultTime < 400) {
                this.peringkat = 'Refleks yang cepat';
            } else {
                this.peringkat = 'Refleks lambat';
            }
        },
    },
};
</script>

<style lang="scss">
.rank {
    font-size: 1.4em;
    color: #ec4646;
    font-weight: bold;
}
</style>
