<template>
    <main>
        <header>
            <img src="../../public/Pokemon.svg" alt="" class="logo">
            <h1>Login</h1>
        </header>

        <section v-for="pokemon in pokemones" :key="pokemon.name" class="pokemon">
            <h2>{{ pokemon.name }}</h2>
            <img :src="pokemon.sprites.front_default" alt="">
        </section>

        <footer>
            <h2>Footer</h2>
        </footer>
    </main>
</template>

<script>
import { pokemonService } from '../services/pokemon.service';
export default {
    name: 'MainPage',
    data() {
        return {
            pokemones: [],
        }
    },
    async created() {
        this.pokemones = await pokemonService.getPokemonsArr()
    }
}
</script>