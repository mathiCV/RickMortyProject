<script >
  import ListCharacters from './components/ListCharacters.vue';
  export default {
    name : 'App',
    components : {
      ListCharacters
    }
  }
</script>

<template>
  <div class="container">
    <h1>Rick and Morty Characters</h1>
    <ListCharacters/>
  </div>
</template>

<style lang="scss">
  :root{
    --background-body: #24282F;
    --background-card: #3c3e44;
    --text-white: #FFFFFFF;
    --text-gray: #c0c0c0;
    --text-orange: #FF9800;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1{
    margin-bottom: 3rem;
    text-align: center;
  }
  .container{
    width: 900px;
    max-width: 90%;
    margin: 5rem auto;
  }
  img {
    width: 100%;
  }

</style>