import axios from "axios";

class PokemonAPI{
    getPokemon(){
        return axios.get('/pokemon');
    }

    getPokemonUrl(url){
      return axios.get(url);
    }

    getPokemonDetails(id){
      return axios.get('/pokemon/'+id);
    }
}

export default new PokemonAPI();