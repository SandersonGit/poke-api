import { Navigate } from "react-router-dom"

export const goToPokemonListPage = (navigate)=>{
    navigate("/")
}

export const goToPokedexPage = (navigate)=> {
    navigate("/pokedex")
}

export const goToDetailPage = (navigate)=>{
    navigate("/detalhes/:nome")
}