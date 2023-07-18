import { useState } from "react";
import Header from "./Components/Header/Header";
import PokemonListPage from "./Pages/PokemonListPage/PokemonListPage"
import PokemonDetailPage from "./Pages/PokemonDetailPpage/PokemonDetailPage"
import PokedexPage from "./Pages/PokedexPage/PokedexPage"


function App() {
  const [ page, setPage ] = useState(2);

  return (
    <>
      <Header page={page} setPage={setPage} />

      { page === 0 ? (
        <PokemonListPage />

      ) : page === 1 ? (
        <PokedexPage />
        
      ) : (
        <PokemonDetailPage />

      )
    
    }


    </>
  );
}

export default App;
