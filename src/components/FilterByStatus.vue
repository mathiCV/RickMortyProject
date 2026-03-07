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
        <div class="item" :class="{ 'all': statusActivo === '' }" @click="filter('')">
            All
        </div>
        <div class="item" :class="{ 'alive': statusActivo === 'Alive' }" @click="filter('Alive')">
            Alive
        </div>
        <div class="item" :class="{ 'dead': statusActivo === 'Dead' }" @click="filter('Dead')">
            Dead
        </div>
        <div class="item" :class="{ 'unknown': statusActivo === 'unknown' }" @click="filter('unknown')">
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
                font-weight: bold;
            }
            &.all{
                background-color: rgb(144, 134, 134);
                color: rgb(0, 0, 0);
                font-weight: bold;
            }
            &.alive{
                background-color: rgb(146, 204, 58);
                color: rgb(255, 255, 255);
                font-weight: bold;
            }
            &.dead{
                background-color: rgb(215, 83, 83);
                color: rgb(255, 255, 255);
                font-weight: bold;
            }
            &.unknown{
                background-color: rgb(225, 218, 218);
                color: rgb(70, 69, 69);
                font-weight: bold;
            }
        }
    }
</style>

