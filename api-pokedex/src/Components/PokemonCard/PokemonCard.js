import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer   } from "./Styled"
import ditto from "../../Assets/dito.png"
import { useNavigate } from "react-router-dom"
import { goToDetailPage } from "../../Router/Coordinator"

const PokemonCard = () => {
    const navigate = useNavigate()
    return (
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src= {ditto} alt= "Imagem de um Dito"/>  
            </ImgContainer>
            <ButtonsContainer>
                <button>Adicionar</button>
                <button onClick={()=> goToDetailPage(navigate)} >Ver Detalhes</button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
}

export default PokemonCard