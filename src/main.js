
import {createStore} from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

export default createStore({
    state:{
        characters: [],
        charactersFilter: []

    },
    mutations:{
        setCharacters(state,payload){
            state.characters = payload
        },
        setCharactersFilter(state, payload){
            state.charactersFilter = payload
        }
    },
    actions: {
        async getCharacters({commit}){
            try{
                const response = await fetch('https://rickandmorty.com/api/character')
                const data = await response.json()
                console.log(data)
            }
            catch(error){
                console.error(error)
            }
        }


    },
    
    modules:{

    }

})



