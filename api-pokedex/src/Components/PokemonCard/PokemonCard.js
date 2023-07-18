import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer   } from "./Styled"
import ditto from "../../Assets/dito.png"

const PokemonCard = () => {
    return (
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src= {ditto} alt= "Imagem de um Dito"/>  
            </ImgContainer>
            <ButtonsContainer>
                <button>Adicionar</button>
                <button>Ver Detalhes</button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
}

export default PokemonCard