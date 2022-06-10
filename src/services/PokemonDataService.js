import axios from "axios";
axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-type": "application/json"
  }
});

class PokemonDataService{
    getPokemon(){
        return axios.get('https://pokeapi.co/api/v2/pokemon');
    }

    getPokemonDetails(url){
      return axios.get(url)
    }
}

export default new PokemonDataService();