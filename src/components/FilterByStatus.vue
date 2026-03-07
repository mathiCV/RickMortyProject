<script>
    import { useStore } from 'vuex';
    import {ref} from 'vue';
    export default{
        setup(){
            const store = useStore();
            const statusActivo = ref('');
            const filter = (status) => {
                statusActivo.value = status;
                store.dispatch('filterByStatus', status);
            }
            return {
                store,
                filter,
                statusActivo
            }
        }
    }
</script>

<template>
    <div class="filter">
        <div class="item" :class="{ 'active': statusActivo === '' }" @click="filter('')">
            All
        </div>
        <div class="item" :class="{ 'active': statusActivo === 'Alive' }" @click="filter('Alive')">
            Alive
        </div>
        <div class="item" :class="{ 'active': statusActivo === 'Dead' }" @click="filter('Dead')">
            Dead
        </div>
        <div class="item" :class="{ 'active': statusActivo === 'unknown' }" @click="filter('unknown')">
            Unknown
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .filter{
        width: 400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border-radius: 10px;
        overflow: hidden;
        .item{
            padding: 1rem 0.5rem;
            background-color: var(--background-card);
            text-align: center;
            transition: background-color 0.4s ease-in;
            cursor: pointer;
            &:hover{
                color: greenyellow;
            }
            &.active{
                background-color: gray;
                color: greenyellow;
                font-weight: bold;
            }
        }

    }
</style>

