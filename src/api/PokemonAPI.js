import axios from "axios";

class PokemonAPI{
    getPokemon(params = null){
        var url = '/pokemon';
        if(params){
          url = url + params
        }
        return axios.get(url);
    }

    getPokemonUrl(url){
      return axios.get(url);
    }

    getPokemonDetails(id){
      return axios.get('/pokemon/'+id);
    }
}

export default new PokemonAPI();