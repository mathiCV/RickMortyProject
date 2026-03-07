<script>
    import {useStore} from "vuex";
    import {onMounted, computed} from "vue";
    import CardCharacter from './CardCharacter.vue';    
    export default {
        components: {
            CardCharacter
        },
        setup(){
            const store = useStore(); 
            const characters = computed(()=>{
                return store.state.charactersFilter
            })
            let currentDialog = null;
            const playCharactersDialog = (name) =>{
                if (currentDialog) {
                    currentDialog.pause();
                    currentDialog.currentTime = 0; // Reinicia el audio al principio
                }
                const cleanName = name.toLowerCase().trim().replace(/\s+/g, '-');
                const audioPath = `/characterDialogs/${cleanName}.mp3`;
                const audio = new Audio(audioPath);
                currentDialog = audio;
                audio.play().catch(err => {
                    console.warn(`⚠️ No se encontró audio para: ${cleanName}.mp3 en /public/characterDialogs/`);
                    currentDialog = null;
                });
            }

            onMounted(() =>{
                store.dispatch('getCharacters')
            })
            return {
                characters,
                playCharactersDialog
            }
        }
    }
</script>


<template>
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id" @click="playCharactersDialog(character.name)">
                <CardCharacter :character="character"/>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .characters{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        margin: 3rem 0;
    }
</style>
