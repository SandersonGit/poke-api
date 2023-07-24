import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./Styled";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/Coordinator";

const Header = ({ page, setPage }) => {
  let titlePage;
  let leftButtonText;
  let nextPage;

  const { pathname } = useLocation();
  const  navigate  = useNavigate();

  if (pathname === "/") {
    titlePage = "Lista de Pokemons";
    leftButtonText = "Ver Minha Pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    leftButtonText = "Retornar Para Lista Inicial";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/detalhes/")) {
    titlePage = "Nome do Pokemon";
    leftButtonText = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  }

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={nextPage}>
        {" "}
        {leftButtonText}{" "}
      </LeftHeaderButton>
      <h1> {titlePage} </h1>
      {pathname.includes("/detalhes/") ? (
        <RightHeaderButton> Adicionar / Remover da Pokedex </RightHeaderButton>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};

export default Header;
