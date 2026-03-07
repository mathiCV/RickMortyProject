<script>
    import { useStore } from 'vuex';
    import { ref } from 'vue';
    export default{
        setup(){
            const store = useStore();
            const name = ref('');
            const filter = (name) => {
                store.dispatch('filterByName', name);
            }
            return {
                store,
                filter,
                name
            }
        }
    }
</script>
    

<template>
    <div class="search">
        <input 
            type="text" 
            v-model="name" 
            placeholder="Search by name..." 
            @input="filter(name)"
        />
        <!-- Otras maneras de hacerlo posible
         <input type="text" placeholder="Search by name..." v-model="name" @input="filter(name)"/>
         <input type="text" placeholder="Search by name..." v-model="name" @keyup="filter(name)"/>
         <input type="text" v-model="name" placeholder="Search..."> + wathch(name, (newName) => store.dispatch('filterByName', newValue);
        -->
        <div class="userView">
            <TransitionGroup name="blast">
                <span 
                    v-for="(char, index) in name" 
                    :key="char, index"
                    class="char"
                >
                    {{ char === ' ' ? '\u00A0' : char }}
                </span>
            </TransitionGroup>
        </div>
    </div>
</template>

<style lang="scss" > 
    .search{
        position: relative;
        width: 400px;
        margin: 3rem auto 0;
        height: 56px;
        input{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;

            /* TRUCO MAESTRO */
            background: transparent; // Fondo invisible
            color: transparent;      // Texto invisible 
            caret-color: #39FF14;    // <--- ¡EL CURSOR SÍ SE VE OJO

            border: none;
            outline: none;
            padding: 0 1rem;
            font-size: 1.2rem; // Debe ser igual al de .char
            font-family: monospace; // El spna y el input usan esto para su font por lo que coinciden perfectamente y no hay problemas de espacio entre caracteres.
        } 
    }
    
    .userView{

        display: flex;
        padding: 1rem;
        background: var(--background-card);
        border-radius: 10px;
        min-height: 56px; 
        border: 2px solid #39FF14; 
        pointer-events: none; 
        overflow-x: auto; // Permite scroll horizontal
        &::-webkit-scrollbar {
            display: none;
        }
        z-index: 1;
        .char{
            font-family: monospace;
            position: relative;
            display: inline-block;
            font-size: 1.2rem;
            color: var(--text-white);
            white-space: pre; // Respeta los espacios
            transition: none !important; // Bloquea movimientos de los char de string del buscador para que no hayan problemas de animación
        }
    }
    .blast-leave-active {
        animation: rayo-desintegrador 0.2s ease-out forwards;
        position: absolute; 
        z-index: 10;
    }

    @keyframes rayo-desintegrador {
        0% {
            transform: scale(1);
            color: #39FF14;
            text-shadow: 0 0 5px #39FF14, 0 0 10px #39FF14;
        }
        30% {
            transform: scale(1.3) translateY(-10px);
            opacity: 1;
        }
        100% {
            transform: scale(0) translateY(-20px); 
            opacity: 0;
            box-shadow: 0 -10px 20px 5px rgba(57, 255, 20, 0.7);
        }
    }
</style>